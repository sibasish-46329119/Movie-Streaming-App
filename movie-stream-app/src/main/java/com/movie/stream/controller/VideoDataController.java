package com.movie.stream.controller;

import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StreamUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import jakarta.servlet.http.HttpServletResponse;

import com.movie.stream.entity.VideoData;
import com.movie.stream.service.FileService;
import com.movie.stream.service.VideoDataService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/videoData")
public class VideoDataController {
	
	@Autowired
	private VideoDataService videoDataService;
	
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	@Value("${project.video}")
	private String videoPath;
	
	@PostMapping("/addVideo")
	public ResponseEntity<VideoData> createVideo(@RequestBody VideoData videoData){
		VideoData video = this.videoDataService.createVideoData(videoData);	
		return new ResponseEntity<VideoData>(video, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getVideo/{category}")
	public ResponseEntity<VideoData> getCategory (@PathVariable String category){
		VideoData video = this.videoDataService.getVideoData(category);
		return new ResponseEntity<VideoData>(video, HttpStatus.OK);
	}
	
	@GetMapping("/getVideoId/{id}")
	public ResponseEntity<VideoData> getId (@PathVariable Integer id){
		VideoData video = this.videoDataService.videoById(id);
		return new ResponseEntity<VideoData>(video, HttpStatus.OK);
	}
	
	@PostMapping("/post/image/{id}")
	public ResponseEntity<VideoData> uploadImage(@RequestParam("image")MultipartFile image,
			@PathVariable Integer id) throws Exception{
		VideoData video = this.videoDataService.videoById(id);
		String fileName = this.fileService.uploadImage(path, image);
		video.setImageName(fileName);
		VideoData updated = this.videoDataService.updateVideoData(video, id);
		
		return new ResponseEntity<VideoData>(updated, HttpStatus.OK);
	}
	
	@GetMapping(value = "post/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
	public void downloadImage(@PathVariable("imageName")String imageName,
			HttpServletResponse response)throws Exception{
		InputStream resource = this.fileService.getResource(path, imageName);
		response.setContentType(MediaType.IMAGE_JPEG_VALUE);
		StreamUtils.copy(resource, response.getOutputStream());
	}
	
	@PostMapping("/post/video/{id}")
	public ResponseEntity<VideoData> uploadVideo(@RequestParam("video")MultipartFile image,
			@PathVariable Integer id) throws Exception{
		VideoData video = this.videoDataService.videoById(id);
		String fileName = this.fileService.uploadVideo(videoPath, image);
		video.setVideoName(fileName);
		VideoData updated = this.videoDataService.updateVideoData(video, id);
		
		return new ResponseEntity<VideoData>(updated, HttpStatus.OK);
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
	 public ResponseEntity<List<VideoData>> allVideos(){
		 List<VideoData> videos = this.videoDataService.getAllVideos();
		 return new ResponseEntity<List<VideoData>>(videos, HttpStatus.OK);
	 }

}
