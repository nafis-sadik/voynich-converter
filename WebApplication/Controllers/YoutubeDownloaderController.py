from fastapi import APIRouter

youtube = APIRouter(prefix='/yt')


@youtube.get('/video/<video_url>')
async def download_video(video_url: str):
    return f'Download {video_url}!'


@youtube.post('/audio/<audio_url>')
async def download_audio(audio_url: str):
    return f'Download {audio_url}!'
