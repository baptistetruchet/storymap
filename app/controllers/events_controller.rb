class EventsController < ApplicationController
  before_action :set_block, only: [:create, :new]

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

  private

  def set_block
    @block = Block.find(params[:block_id])
  end

  def event_params
    params.require(:event).permit(:title, :content, :date, :address)
  end
end
