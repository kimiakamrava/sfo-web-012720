Rails.application.routes.draw do

  resources :games, only: [:create]
  resources :users, only: [:new, :create]
  get '/games/play', to: 'games#play', as: 'play'
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  root :to => 'users#home'
  
end
