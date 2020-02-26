Rails.application.routes.draw do
  resources :bagels, except: [:index, :edit, :update]
  resources :shops, only: [:index, :show]
end
