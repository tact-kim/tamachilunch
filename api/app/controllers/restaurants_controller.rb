class RestaurantsController < ApplicationController
  def index
    restaurant = Restaurant.all
    render :json => restaurant
  end
end
