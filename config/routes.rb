Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :stories do
    patch 'toggle_status', on: :member
    resources :blocks, only: [:create, :new]
  end

  resources :blocks, only: [:edit, :update, :destroy] do
    resources :events, only: [:create, :new]
    member do
      patch :update_position
    end
  end
  resources :events, only: [:show, :edit, :update, :destroy] do
    resources :eventzones, only: [:create, :new, :update]
  end
  resources :eventzones, only: [:show, :destroy]
  resources :zones, only: [:create, :new]

  get "/dashboard", to: "pages#dashboard"
  get "/edit_story/:id", to: "stories#edit_story_details", as: 'edit_story_details'
  patch "/stories/:id/publish", to: "stories#publish", as: 'publish_story'
  patch "/stories/:id/unpublish", to: "stories#unpublish", as: 'unpublish_story'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
