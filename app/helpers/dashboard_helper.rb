module DashboardHelper
  def story_picture(story)
    story_photo = 'https://images.unsplash.com/photo-1497302347632-904729bc24aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=144d48440ee329f1d475ac5db69d66fc&auto=format&fit=crop&w=1650&q=80'
    unless story.blocks.empty?
      story.blocks.first.events.each do |event|
        if event.photo_url
          story_photo = event.photo_url
        end
      end
    end
    return story_photo
  end
end
