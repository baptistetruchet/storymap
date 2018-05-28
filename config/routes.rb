Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :users, except: [:index]
  resources :stories do
    get 'published', on: :member
    resources :blocks, only: [:new, :create]
  end
  resources :blocks, only: [:show, :edit, :update, :destroy] do
    resources :events, only: [:new, :create]
  end
  resources :events, only: [:show, :edit, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
