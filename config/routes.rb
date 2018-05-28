Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :stories do
    patch 'status', on: :member
    resources :blocks, only: [:create]
  end
  resources :blocks, only: [:update, :destroy] do
    resources :events, only: [:create]
  end
  resources :events, only: [:update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
