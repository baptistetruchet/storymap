class StoriesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_story, only: [:show, :edit, :edit_story_details, :update, :destroy]
  before_action :set_markers, only: [:show, :edit]

  def index
  end

  def show
  end

  def new
    @story = Story.new
    authorize @story
  end

  def create
    @story = Story.new(story_params)
    authorize @story
    @story.user = current_user

    if @story.save
      redirect_to edit_story_path(@story)
    else
      render :new
    end
  end

  def edit
    @blocks = @story.blocks
  end

  def edit_story_details
  end

  def update
    @story.update(story_params)
    redirect_to edit_story_path(@story)
  end

  def destroy
    @story.destroy
    redirect_to dashboard_path
  end

  private

  def story_params
    params.require(:story).permit(:title, :description)
  end

  def set_story
    @story = Story.find(params[:id])
    authorize @story
  end

  def set_markers
    @all_markers = []
    @markers = {}
    @story.blocks.each do |block|
      blockhash = {}
      block.events.each do |event|
        @all_markers << { icon: ActionController::Base.helpers.asset_path('favicon_blue.png'), eventid: event.id, blockid: event.block.id, lat: event.latitude, lng: event.longitude }
        latlong = { lat: event.latitude, lng: event.longitude, title: event.title }
        blockhash[event.id] = latlong
      end
      @markers[block.id] = blockhash
    end
  end
end
