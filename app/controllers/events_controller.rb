class EventsController < ApplicationController
  before_action :set_block, only: [:create, :new]
  before_action :set_event, only: [:edit, :update, :destroy]

  def new
    @event = Event.new
    authorize @event
  end

  def create
    @event = Event.new(event_params)
    @event.block = @block
    authorize @event
   if @event.save
      redirect_to edit_story_path(@event.block.story)
    else
      render :new
    end
  end

  def edit
    authorize @event
  end

  def update
    @event.update(event_params)
    redirect_to edit_story_path(@event.block.story)
  end

  def destroy
    @event.destroy
    redirect_to edit_story_path(@event.block.story)
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
