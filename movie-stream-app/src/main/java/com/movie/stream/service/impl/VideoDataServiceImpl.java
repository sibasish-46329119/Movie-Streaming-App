package com.movie.stream.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.stream.entity.VideoData;
import com.movie.stream.exception.ResourceNotFoundException;
import com.movie.stream.repo.VideoDataRepo;
import com.movie.stream.service.VideoDataService;

@Service
public class VideoDataServiceImpl implements VideoDataService {
	
	@Autowired
	private VideoDataRepo videoDataRepo;

	@Override
	public VideoData createVideoData(VideoData videoData) {
		// TODO Auto-generated method stub
		
		VideoData addVideo = this.videoDataRepo.save(videoData);
		addVideo.setImageName("default.png");
		addVideo.setVideoName("default.mp4");
		return addVideo;
	}

	@Override
	public VideoData updateVideoData(VideoData videoData, Integer id) {
		// TODO Auto-generated method stub
		
		VideoData updateVideo = this.videoDataRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("VideoData", "id", id));
		updateVideo.setDescription(videoData.getDescription());
		updateVideo.setCategory(videoData.getCategory());

		VideoData updatedVideo = this.videoDataRepo.save(updateVideo);
		return updatedVideo;
	}

	@Override
	public VideoData getVideoData(String category) {
		// TODO Auto-generated method stub
		
		VideoData getVideo = this.videoDataRepo.findByCategory(category).orElseThrow(()-> new ResourceNotFoundException("VideoData", "id", 0));
		return getVideo;
	}

	@Override
	public VideoData videoById (Integer id) {
		VideoData getVideo = this.videoDataRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("VideoData", "id", 0));
		return getVideo;
	}
	
	@Override
	public List<VideoData> getAllVideos(){
		List<VideoData> allVideo = this.videoDataRepo.findAll();
		return allVideo;
	}

}
