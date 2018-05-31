class BlocksController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_story, only: [:new, :create]
  before_action :set_block, only: [:edit, :update_position, :update, :destroy]

  def new
    @block = Block.new
    authorize @block

    respond_to do |format|
      format.html
      format.js # <-- will render `app/views/blocks/new.js.erb` by default
    end
  end

  def create
    @block = Block.new(block_params)
    authorize @block
    @block.story = @story
    @block.position = @story.blocks.length + 1

    if @block.save!
      respond_to do |format|
        format.html { redirect_to edit_story_path(@story) }
        format.js  # <-- will render `app/views/blocks/create.js.erb`
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js  # <-- idem
      end
    end
  end

  def edit
    authorize @block
    respond_to do |format|
      format.html
      format.js # <-- will render `app/views/blocks/edit.js.erb` by default
    end
  end

  def update
    if @block.update(block_params)
      respond_to do |format|
        format.html { redirect_to edit_story_path(@block.story) }
        format.js  # <-- will render `app/views/blocks/update.js.erb`
      end
    else
      respond_to do |format|
        format.html { render :edit }
        format.js  # <-- idem
      end
    end
  end

  def update_position
    authorize @block
    init = params[:positionInit].to_i + 1
    fin = params[:positionFin].to_i + 1
    blocks = @block.story.blocks
    direction_aug = (init - fin) < 0 ? true : false #check if block was moved up or down
    if direction_aug
      blocks.each do |block|
        unless block == @block
          #lq position des blocka entre @block.positionInit et fin diminue de 1
          if init < block.position && block.position <= fin
            block.position -= 1
            block.save
          end
        end
      end
    else
      blocks.each do |block|
        unless block == @block
          #lq position des blocka entre @block.positionInit et fin diminue de 1
          if fin <= block.position && block.position < init
            block.position += 1
            block.save
          end
        end
      end
    end
    @block.position = fin
    @block.save
    #recupere block id
    #update position de ce block et de tous les autres
  end

  def destroy
    position = @block.position
    blocks = @block.story.blocks
    @block.destroy
    blocks.each do |block|
      block.position -= 1 if block.position > position
      block.save
    end

    respond_to do |format|
      format.html { redirect_to edit_story_path(@block.story) }
      format.js # <-- will render `app/views/blocks/destroy.js.erb` by default
    end
  end

  private

  def block_params
    params.require(:block).permit(:title)
  end

  def set_block
    @block = Block.find(params[:id])
    authorize @block
  end

  def set_story
    @story = Story.find(params[:story_id])
    authorize @story
  end
end
