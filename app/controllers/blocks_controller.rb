class BlocksController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_story, only: [:new, :create]

  def new
    @block = Block.new
    authorize @block
  end

  def create
    @block = Block.new(block_params)
    authorize @block
    @block.story = @story
    @block.position = @story.blocks.length + 1
   if @block.save
      redirect_to edit_story_path(@story)
    else
      render :new
    end
  end

  private

  def block_params
    params.require(:block).permit(:title)
  end

  def set_story
    @story = Story.find(params[:story_id])
    authorize @story
  end
end
