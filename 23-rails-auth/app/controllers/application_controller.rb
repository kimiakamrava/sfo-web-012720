class ApplicationController < ActionController::Base
  # helper_method macro allows you to make a method from 
  # any controller and make it available to your views

  # alternatively, you could declare the method in the ApplicationHelper
  # and 'includes ApplicationHelper' in this file.
  helper_method :current_user
  before_action :authorize

  def current_user
    @user = User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  def authorize
    # if you're not logged in, redirect to log in page
    # else do nothing
    redirect_to login_path if !current_user?
  end

end
