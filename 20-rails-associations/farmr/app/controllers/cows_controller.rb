class CowsController < ApplicationController

  def index
    @cows = Cow.all
  end

  def show
    @cow = Cow.find(params[:id])
  end

  def new
    @cow = Cow.new
  end

  def create
    # byebug
    # after success, cow show page
    # after failure, render same new page
    @cow = Cow.create(cow_params)
    if @cow.valid?
      redirect_to @cow
    else
      flash[:errors] = @cow.errors.full_messages
      render :new
    end
  end

  private

  def cow_params
    params.require(:cow).permit(:name, :spots, :farmer_id)
  end
end
