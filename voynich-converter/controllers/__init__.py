import os
import glob
from fastapi import APIRouter

from controllers.YouTubeController import youtube

router = APIRouter()
router.include_router(youtube)

__all__ = [os.path.basename(file_path)[:-3] for file_path in glob.glob(os.path.dirname(__file__) + "/*.py")]