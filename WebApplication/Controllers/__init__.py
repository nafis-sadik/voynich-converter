import os
import glob
from fastapi import APIRouter

from WebApplication.Controllers.MediaConverter import media_converter
from WebApplication.Controllers.YoutubeDownloaderController import youtube

router = APIRouter()
router.include_router(youtube)
router.include_router(media_converter)

__all__ = [os.path.basename(file_path)[:-3] for file_path in glob.glob(os.path.dirname(__file__) + "/*.py")]