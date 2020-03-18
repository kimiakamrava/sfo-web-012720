class SpeciesController < ApplicationController
	def index
		species = Species.all
		render json: species
	end

	def show
		single_species = Species.find(params[:id])
		render json: single_species
	end
end
