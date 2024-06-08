package com.movie.stream.controller;

import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.movie.stream.entity.MoviesData;
import com.movie.stream.service.FileService;
import com.movie.stream.service.MovieDataService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/movieData")
public class MovieDataController {

	@Autowired
	private MovieDataService movieDataService;
	
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	@Value("${project.video}")
	private String videoPath;
	
	@PostMapping("/addVideo")
	public ResponseEntity<MoviesData> createVideo(@RequestBody MoviesData movieData){
		MoviesData video = this.movieDataService.createMovieData(movieData);	
		return new ResponseEntity<MoviesData>(video, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getVideo/{category}")
	public ResponseEntity<MoviesData> getCategory (@PathVariable String category){
		MoviesData video = this.movieDataService.getMovieData(category);
		return new ResponseEntity<MoviesData>(video, HttpStatus.OK);
	}
	
	@GetMapping("/getVideoId/{id}")
	public ResponseEntity<MoviesData> getId (@PathVariable Integer id){
		MoviesData video = this.movieDataService.movieById(id);
		return new ResponseEntity<MoviesData>(video, HttpStatus.OK);
	}
	
	@PostMapping("/post/image/{id}")
	public ResponseEntity<MoviesData> uploadImage(@RequestParam("image")MultipartFile image,
			@PathVariable Integer id) throws Exception{
		MoviesData video = this.movieDataService.movieById(id);
		String fileName = this.fileService.uploadImage(path, image);
		video.setImageName(fileName);
		MoviesData updated = this.movieDataService.updateMovieData(video, id);
		
		return new ResponseEntity<MoviesData>(updated, HttpStatus.OK);
	}
	
	@GetMapping(value = "post/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
	public void downloadImage(@PathVariable("imageName")String imageName,
			HttpServletResponse response)throws Exception{
		InputStream resource = this.fileService.getResource(path, imageName);
		response.setContentType(MediaType.IMAGE_JPEG_VALUE);
		StreamUtils.copy(resource, response.getOutputStream());
	}
	
	@PostMapping("/post/video/{id}")
	public ResponseEntity<MoviesData> uploadVideo(@RequestParam("video")MultipartFile image,
			@PathVariable Integer id) throws Exception{
		MoviesData video = this.movieDataService.movieById(id);
		String fileName = this.fileService.uploadVideo(videoPath, image);
		video.setVideoName(fileName);
		MoviesData updated = this.movieDataService.updateMovieData(video, id);
		
		return new ResponseEntity<MoviesData>(updated, HttpStatus.OK);
	}
	 @GetMapping(value = "post/video/{videoName}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	    public void downloadVideo(@PathVariable("videoName") String videoName,
	                              HttpServletResponse response) throws Exception {
	        InputStream resource = this.fileService.getResource(videoPath, videoName);
	        response.setContentType(MediaType.valueOf("video/mp4").toString());
	        response.setHeader("Content-Disposition", "inline; filename=\"" + videoName + "\"");
	        StreamUtils.copy(resource, response.getOutputStream());
	    }
	 
	 @GetMapping("/getAllVideos")
	 public ResponseEntity<List<MoviesData>> allVideos(){
		 List<MoviesData> videos = this.movieDataService.getAllVideos();
		 return new ResponseEntity<List<MoviesData>>(videos, HttpStatus.OK);
	 }

	
}
