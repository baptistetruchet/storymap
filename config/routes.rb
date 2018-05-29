Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :stories do
    patch 'toggle_status', on: :member
    resources :blocks, only: [:create, :new]
  end
  resources :blocks, only: [:edit, :update] do
    resources :events, only: [:create, :new]
  end
  resources :events, only: [:edit, :update]
  resources :events, only: [:destroy], as: 'delete_event'
  resources :blocks, only: [:destroy], as: 'delete_block'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
