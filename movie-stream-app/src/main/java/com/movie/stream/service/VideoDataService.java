package com.movie.stream.service;

import java.util.List;

import com.movie.stream.entity.VideoData;

public interface VideoDataService {
	
	VideoData createVideoData(VideoData videoData);
	
	VideoData updateVideoData(VideoData videoData, Integer id) throws Exception;
	
	VideoData getVideoData(String category);
	
	VideoData videoById(Integer id);

	List<VideoData> getAllVideos();
	
}
