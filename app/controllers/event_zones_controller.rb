# class EventZonesController < ApplicationController
#   before_action :set_event, only: [:create, :new]
#   before_action :set_zone, only: [:show, :destroy]

#   def new
#     @eventzone = EventZone.new
#     authorize @eventzone
#     end
#   end

#   def show
#   end

#   def create
#     @eventzone = EventZone.new(zoneevent_params)
#     @eventzone.event = @event
#     authorize @eventzone
#     @eventzone.save
#   end

#   def destroy
#     @eventzone.destroy
#   end

#   private

#   def zoneevent_params
#     params.require(:event_zone).permit(:color, :zone_id, :event_id)
#   end
# end
