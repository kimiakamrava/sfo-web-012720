class ReviewsController < ApplicationController
  get '/reviews/new' do
    @games = Game.all
    erb :"/reviews/new"
  end

  post '/reviews' do
    game_id = params[:review][:game_id]

    review = Review.create(
      content: params[:review][:content],
      game_id: game_id
    )

    redirect "/games/#{game_id}"
  end
end
