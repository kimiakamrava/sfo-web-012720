class CandidatesController < ApplicationController
  before_action :find_candidate, only: [:show, :edit, :update, :destroy]

  def index
    @candidates = Candidate.all
  end

  def show
  end

  def new
    @candidate = Candidate.new
  end

  def create
    @candidate = Candidate.create(candidate_params)
    redirect_to @candidate
  end

  def edit
  end

  def update
    @candidate.update(candidate_params)
    redirect_to @candidate
  end

  def destroy
    @candidate.destroy
    redirect_to candidates_path
  end

  private

  def candidate_params
    params.require(:candidate).permit(:name, :party)
  end

  def find_candidate
    @candidate = Candidate.find(params[:id])
  end
end
