from types import resolve_bases
from fastapi import APIRouter
import wget
import moviepy.editor as mp
from datetime import datetime

from sys import path as pylib
import os
pylib += [os.path.abspath(r'../Repositories')]

from models import ConvertionConfigModel
from Entities import SysConfig
from RepositoryBase import RepositoryBase
from IRepositoryBase import IRepositoryBase

downloader = APIRouter(prefix='/dw')


def convert_to_mp3(file_path: str):
    print('Shoot')
    clip = mp.VideoFileClip(file_path)
    audio_file_path: str = file_path.split('.')[0] + file_path.split('.')[1] + '.mp3'
    result = clip.audio.write_audiofile(audio_file_path)
    return result


def download_video(url: str):
    downloaded_file = wget.download(url, out='./static')
    file_path: str = downloaded_file + '_' + str(datetime.timestamp(datetime.now())) + '.mp4'
    os.rename(downloaded_file, file_path)
    return file_path


@downloader.post('/')
def download_mp3(config: ConvertionConfigModel):
    source_file = download_video(config.url)
    if os.path.exists(source_file):
        response = convert_to_mp3(source_file)
        os.remove(source_file)
    else:
        response = None
    return response