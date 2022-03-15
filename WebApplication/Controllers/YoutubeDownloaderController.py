from fastapi import APIRouter
from pytube import YouTube

from WebApplication.Model.YoutubeVideoDetails import YoutubeVideoDetails

youtube = APIRouter(prefix='/yt')

@youtube.post('/')
async def cache_video(video_details: YoutubeVideoDetails):
    try:
        video: YouTube = YouTube(video_details.url)
        print('video.title', video is None)
        video_details.title = video.title
        video_details.author = video.author
        video_details.description = video.description
        video_details.rating = video.rating
        video_details.length = video.length
        video_details.views = video.views
        video_details.thumbnail = video.thumbnail_url
        return video_details
    except Exception as e:
        return str(e)

@youtube.get('/video/{video_url:str}')
async def download_video(video_url: str):
    return f'Download {video_url}!'


@youtube.post('/audio/{video_url:str}')
async def download_audio(audio_url: str):
    return f'Download {audio_url}!'
