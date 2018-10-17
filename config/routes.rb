Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index :edit, :update]
  resources :groups, only: [:new, :show, :edit, :update] do
    resources :messages, [:index, :create]
  end
end
