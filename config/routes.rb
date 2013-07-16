Redesignproject::Application.routes.draw do

  root to: "redesign#pageslist", :nm  => 1
  match "/about" => "redesign#home", :nm  => 1
  match "/welcome" => "redesign#welcome"
  match "/downloadingfile" => "redesign#downloadingfile"
  match "/search" => "redesign#search"
  match "/searchinprogress" => "redesign#searchinprogress"
  match "/notifications" => "redesign#notifications"
  
  


  match "/share/downloadedfiles" => "redesign#downloadedfiles"
  match "/share/uploadingfiles" => "redesign#uploadingfiles"

  match "/uploadfile" => "redesign#uploadfile"
  match "/uploadfreesite" => "redesign#uploadfreesite"

  match "/settings/interfaces" => "redesign#interfacesconfig"
  match "/settings/seclevels" => "redesign#seclevels"

  match "/apps/manage" => "redesign#manage"
  match "/apps/connectionsfriends" => "redesign#connectionsfriends"
  match "/apps/addfriend" => "redesign#addfriend"
  match "/apps/addfriend1" => "redesign#addfriend-step1"
  match "/apps/addfriend2" => "redesign#addfriend-step2"
  match "/apps/addfriend3" => "redesign#addfriend-step3"
  

  match "/phrase" => "redesign#phrase"
  match "/wizard1" => "redesign#wizard1"
  match "/wizard2" => "redesign#wizard2"
  match "/wizard3" => "redesign#wizard3"
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
