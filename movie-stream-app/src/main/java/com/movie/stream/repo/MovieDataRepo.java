package com.movie.stream.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.stream.entity.MoviesData;

public interface MovieDataRepo extends JpaRepository<MoviesData, Integer>{
	
	Optional<MoviesData> findByCategory(String category);

}
