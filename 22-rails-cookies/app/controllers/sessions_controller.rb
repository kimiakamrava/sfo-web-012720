class SessionsController < ApplicationController
  
  def new
    # there is no session model, so don't send down an instance of a session!
  end

  def create
    # logging in
    @user = User.create(username: params[:username])
    if @user.valid?
      session[:user_id] = @user.id
      flash[:success] = "Successfully signed in!"
      redirect_to play_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to login_path
    end
  end

end
