Rails.application.routes.draw do
  root 'film#index'
  get '*path', to: 'film#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
