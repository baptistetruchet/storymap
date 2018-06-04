require "application_system_test_case"

class HomeTest < ApplicationSystemTestCase
  test "visiting homepage" do
    visit "/"
    assert_selector "h1", text: "Using Maps"
    assert_selector "h2", text: "How to build your StoryMap"
  end
end
