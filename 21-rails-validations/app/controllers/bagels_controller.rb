class BagelsController < ApplicationController
  before_action :find_bagel, only: [:show, :edit, :update, :destroy]

  def show
  end

  def new
    @bagel = Bagel.new
  end

  def create
    params[:bagel][:price] = params[:bagel][:price].to_i
    params[:bagel][:tasty] = params[:bagel][:tasty] === '1' ? true : false

    @bagel = Bagel.create(bagel_params)
    if @bagel.valid?
      flash[:notice] = "Bagel was created!"
      redirect_to bagel_path(@bagel)
    else
      render :new
    end
  end
  
  def destroy
  end 

  private

  def bagel_params
    params.require(:bagel).permit(:name, :price, :tasty, :shop_id)
  end

  def find_bagel
    @bagel = Bagel.find(params[:id])
  end

end
