class EventsController < ApplicationController
  before_action :set_block, only: [:create, :new]
  before_action :set_event, only: [:edit, :update, :destroy]

  def new
    @event = Event.new
    authorize @event

    respond_to do |format|
      format.html
      format.js # <-- will render `app/views/events/new.js.erb` by default
    end
  end

  def create
    @event = Event.new(event_params)
    @event.block = @block
    authorize @event

    if @event.save
      respond_to do |format|
        format.html { redirect_to edit_story_path(@event.block.story) }
        format.js  # <-- will render `app/views/events/create.js.erb`
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js  # <-- idem
      end
    end
  end

  def edit
    authorize @event
    respond_to do |format|
      format.html
      format.js # <-- will render `app/views/events/edit.js.erb` by default
    end
  end

  def update
    if @event.update(event_params)
      respond_to do |format|
        format.html { redirect_to edit_story_path(@event.block.story) }
        format.js  # <-- will render `app/views/events/update.js.erb`
      end
    else
      respond_to do |format|
        format.html { render :edit }
        format.js  # <-- idem
      end
    end
  end

  def destroy
    @event.destroy

    respond_to do |format|
      format.html { edit_story_path(@event.block.story) }
      format.js # <-- will render `app/views/events/destroy.js.erb` by default
    end
  end

  private

  def set_block
    @block = Block.find(params[:block_id])
  end

  def set_event
    @event = Event.find(params[:id])
    authorize @event
  end

  def event_params
    params.require(:event).permit(:title, :content, :date, :address, :photo_url)
  end
end
