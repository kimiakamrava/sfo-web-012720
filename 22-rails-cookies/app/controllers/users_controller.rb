class UsersController < ApplicationController

  def home
  end

  def new
    @user = User.new
  end

  def create
    #sign up
    # byebug
    @user = User.create(username: params[:user][:username])
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to play_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end

  private


end
