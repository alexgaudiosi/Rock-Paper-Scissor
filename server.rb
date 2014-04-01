require 'sinatra'
require 'sinatra/partial'

set :partial_template_engine, :erb

get '/' do 
	erb :index
end