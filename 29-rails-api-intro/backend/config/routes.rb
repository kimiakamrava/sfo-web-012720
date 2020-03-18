Rails.application.routes.draw do
  resources :animals
  # get '/animals', to: 'animals#index'
  resources :species
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
