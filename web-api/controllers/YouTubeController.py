from fastapi import APIRouter
from pytube import YouTube

from models import YoutubeVideoDetails

youtube = APIRouter(prefix='/yt')


@youtube.post('/')
async def cache_video(video_details: YoutubeVideoDetails):
    try:
        video: YouTube = YouTube(video_details.url)
        video_details.title = video.title
        video_details.author = video.author
        video_details.description = video.description
        video_details.rating = video.rating
        video_details.length = video.length
        video_details.views = video.views
        video_details.thumbnail = video.thumbnail_url
        video_details.streams = video.streams.order_by('resolution').desc()
        return video_details
    except Exception as e:
        return str(e)