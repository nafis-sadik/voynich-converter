import types
from fastapi import APIRouter
from starlette.responses import JSONResponse
import wget
from threading import Thread
import string
import os
import time

from models import YoutubeVideoDetails

downloader = APIRouter(prefix='/dw')

# Tested successfully with https://www.google.com/robots.txt
def delete_file_from_static_folder(file_path: string):
    delete_delay_in_minuets: int = 1
    time.sleep(delete_delay_in_minuets * 60)
    os.remove(file_path)

@downloader.post('/')
def download_video(video: YoutubeVideoDetails):
    downloaded_file = wget.download(video.url, out='./static')
    delete_thread = Thread(target=delete_file_from_static_folder, args=(downloaded_file,))
    if os.path.exists(downloaded_file):
        delete_thread.start()
    else:
        return JSONResponse(content = None)
    return JSONResponse(content = downloaded_file)