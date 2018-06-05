module DashboardHelper
  def story_picture(story)
    if story.photo_url.blank?
    # && add a url regex
      "https://images.unsplash.com/photo-1497302347632-904729bc24aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=144d48440ee329f1d475ac5db69d66fc&auto=format&fit=crop&w=1650&q=80"
    else
      story.photo_url
    end
  end
end

