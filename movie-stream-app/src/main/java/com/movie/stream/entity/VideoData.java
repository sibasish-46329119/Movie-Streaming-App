package com.movie.stream.entity;

import java.util.List;

import com.movie.stream.payload.ListToStringConverter;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "videoData")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VideoData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	private Integer yearRelease;
	private String rated;
	@Size(max=8000,message="Description must not be greater than 80 characters")
	private String description;
	private String category;
	private String imageName;
	private String videoName;
	@Convert(converter = ListToStringConverter.class)
	private List<String> genre;
}
