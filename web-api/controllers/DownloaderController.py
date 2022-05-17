from fastapi import APIRouter
from fastapi.responses import FileResponse
from pydantic.types import confloat
import wget
import threading
import time
import moviepy.editor as mp
from datetime import datetime

from sys import path as pylib
import os
pylib += [os.path.abspath(r'../Repositories')]

from models import ConvertionConfigModel

downloader = APIRouter(prefix='/dw')

def delayed_file_remove(path: str, delay_in_mins: int):
    time.sleep(delay_in_mins * 10)
    os.remove(path)


def convert_to_mp3(file_path: str, start_time: int, end_time: int):
    clip = mp.VideoFileClip(file_path)
    if end_time == 0:
        end_time = clip.duration
    clip = clip.subclip(start_time, end_time)
    audio_file_path: str = './' + file_path.split('.')[0] + file_path.split('.')[1] + '.mp3'
    clip.audio.write_audiofile(audio_file_path)
    clip.close()
    return audio_file_path


def download_file(url: str):
    downloaded_file = wget.download(url, out='./static')
    source_file = source_file_path(downloaded_file)
    os.rename(downloaded_file, source_file)
    return source_file

def source_file_path(downloaded_file):
    file_path: str = downloaded_file + '_' + str(datetime.timestamp(datetime.now())) + '.mp4'
    return file_path


@downloader.post('/mp3')
def download_mp3(config: ConvertionConfigModel):
    source_file = download_file(config.url)
    if os.path.exists(source_file):
        audio_file_path = convert_to_mp3(source_file, config.start_time, config.end_time)
        os.remove(source_file)
        delete_audio_thread = threading.Thread(target=delayed_file_remove, args=(audio_file_path, 1))
        delete_audio_thread.start()
        return FileResponse(audio_file_path)
    else:
        response = None
    return response