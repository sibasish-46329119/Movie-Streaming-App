package com.movie.stream.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.stream.entity.MoviesData;
import com.movie.stream.entity.VideoData;
import com.movie.stream.exception.ResourceNotFoundException;
import com.movie.stream.repo.MovieDataRepo;
import com.movie.stream.service.MovieDataService;

@Service
public class MovieDataServiceImpl implements MovieDataService {

	@Autowired
	private MovieDataRepo movieDataRepo;
	
	@Override
	public MoviesData createMovieData(MoviesData movieData) {
		// TODO Auto-generated method stub
		MoviesData addVideo = this.movieDataRepo.save(movieData);
		addVideo.setImageName("default.png");
		addVideo.setVideoName("default.mp4");
		return addVideo;
	}

	@Override
	public MoviesData updateMovieData(MoviesData movieData, Integer id) throws Exception {
		// TODO Auto-generated method stub
		MoviesData updateVideo = this.movieDataRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("MovieData", "id", id));
		updateVideo.setDescription(movieData.getDescription());
		updateVideo.setCategory(movieData.getCategory());

		MoviesData updatedVideo = this.movieDataRepo.save(updateVideo);
		return updatedVideo;
	}

	@Override
	public List<MoviesData> getAllVideos() {
		// TODO Auto-generated method stub
		List<MoviesData> allVideo = this.movieDataRepo.findAll();
		return allVideo;
	}

	@Override
	public MoviesData getMovieData(String category) {
		// TODO Auto-generated method stub
		MoviesData getVideo = this.movieDataRepo.findByCategory(category).orElseThrow(()-> new ResourceNotFoundException("MovieData", "id", 0));
		return getVideo;
	}

	@Override
	public MoviesData movieById(Integer id) {
		MoviesData getVideo = this.movieDataRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("VideoData", "id", 0));
		return getVideo;
	}

}
