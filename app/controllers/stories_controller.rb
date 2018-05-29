class StoriesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_story, only: [:show, :edit, :update, :destroy]
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

  def update
  end

  def destroy
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
    @markers = []
    @story.blocks.each do |block|
      block.events.each do |event|
        @markers << { lat: event.latitude, lng: event.longitude }
      end
    end
  end
end
