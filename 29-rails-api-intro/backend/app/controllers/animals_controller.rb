class AnimalsController < ApplicationController
	# GET /animals
	def index
		# Should return JSON data with all animals
		animals = Animal.all
		render json: animals

		# Smallest to largest scope
		# 1. local variable
		# 2. instance variable
		# 3. class variable
		# 4. global variable
	end

	# GET /animals/:id
	def show
		# Should return JSON data with one single animal
		animal = Animal.find(params[:id])
		render json: animal
	end

	# POST /animals
	def create
		# We want to create a new animal & probably send that animal back as JSON

		species = Species.find_or_create_by(name: animal_params[:species].capitalize)
    animal = Animal.new(name: animal_params[:name], gender: animal_params[:gender], species: species)

    if animal.save
      render json: animal
    else
      render json: { error: "Something went wrong, try again" }
    end
	end

	# PATCH /animals/:id
	def update
		# We want to udpate an animal & probably send that animal back as JSON
	end

	# DELETE /animals/:id
	def destroy
		# We want to delete an animal & send a message back that this was successful
	end

	# New AND Edit are handled in the frontend

	private

	def animal_params
		params.require(:animal).permit(:name, :gender, :species)
	end
end
