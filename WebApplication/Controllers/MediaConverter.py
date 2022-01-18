from fastapi import APIRouter

media_converter = APIRouter(prefix='/media')


@media_converter.get('/audio/<video_url>')
async def download_audio(video_url: str):
    return f'Download {video_url}!'
