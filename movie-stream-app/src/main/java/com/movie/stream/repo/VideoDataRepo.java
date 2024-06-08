package com.movie.stream.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.stream.entity.VideoData;

public interface VideoDataRepo extends JpaRepository<VideoData, Integer>{
	
	Optional<VideoData> findByCategory(String category);

}
