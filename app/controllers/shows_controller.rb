class ShowsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_show_found

    def create
        new_show = Show.create!(show_params)
        render json: new_show, status: :created
    end

    def index
        render json: Show.all
    end

    def show 
        one_show = Show.find(params[:id])
        render json: one_show, status: :ok 
    end

private

    def show_params
        params.permit(:name, :image, :rating, :summary, :network, :official_site, :seasons, :episodes, :cast, :genre, :runtime, :premiered, :ended, :user_id, :show_id)
    end

    def no_show_found
        render json: {error: "Show not found"}, status: :not_found
    end

end
