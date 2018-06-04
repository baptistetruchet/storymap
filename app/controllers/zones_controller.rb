class ZonesController < ApplicationController
  before_action :set_event, only: [:create, :new]
  before_action :set_zone, only: [:show, :destroy]

  def new
    @zone = Zone.new
    authorize @zone
    end
  end

  def show
  end

  def create
    @zone = Zone.new(zone_params)
    @zone.event = @event
    authorize @zone
    @zone.save
  end

  def destroy
    @zone.destroy
  end

  private

  def set_event
    @block = Event.find(params[:event_id])
  end

  def set_zone
    @zone = Zone.find(params[:id])
    authorize @zone
  end

  def event_params
    params.require(:zone).permit(:title, :country, :color)
  end
end
