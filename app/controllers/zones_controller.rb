class ZonesController < ApplicationController
  def new
    @zone = Zone.new
    authorize @zone
  end

  def create
    @zone = Zone.new(zone_params)
    authorize @zone
    @zone.save
  end

  private

  def zone_params
    params.require(:zone).permit(:country, :coordinates)
  end
end
