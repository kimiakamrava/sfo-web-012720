class GamesController < ApplicationController
	# index
	get '/games' do
		@games = Game.all
		erb :"/games/index"
	end

	# new
	get '/games/new' do
		erb :'/games/new'
	end

	# show
	get '/games/:id' do
		@game = Game.find(params[:id])
		erb :"/games/show"
	end

	# create
	post '/games' do
		@game = Game.create(params)
		redirect "/games/#{@game.id}"
	end

	# edit
	get '/games/:id/edit' do
		@game = Game.find(params[:id])
		erb :'/games/edit'
	end

	# update
	patch '/games/:id' do
		@game = Game.find(params[:id])
		@game.update(
			title: params[:title],
			description: params[:description],
			rating: params[:rating],
			image_url: params[:image_url]
		)

		redirect "/games/#{@game.id}"
	end

	# delete
	delete '/games/:id' do
		binding.pry
		@game = Game.find(params[:id])
		@game.delete

		redirect "/games"
	end

end
