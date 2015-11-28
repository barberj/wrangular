Rails.application.routes.draw do
   root 'main#index'
   get '/home', to: 'angular_template#home'
end
