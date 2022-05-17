import os
import glob
from fastapi import APIRouter

from controllers.YouTubeController import youtube
from controllers.DownloaderController import downloader
from controllers.AppController import app
from controllers.SearchTrendController import search_trend

router = APIRouter()
router.include_router(youtube)
router.include_router(downloader)
router.include_router(app)
router.include_router(search_trend)

__all__ = [os.path.basename(file_path)[:-3] for file_path in glob.glob(os.path.dirname(__file__) + "/*.py")]