package com.movie.stream.service;

import java.util.List;

import com.movie.stream.entity.MoviesData;


public interface MovieDataService {

MoviesData createMovieData(MoviesData movieData);
	
MoviesData updateMovieData(MoviesData movieData, Integer id) throws Exception;
	
MoviesData getMovieData(String category);
	
MoviesData movieById(Integer id);

	List<MoviesData> getAllVideos();
}
