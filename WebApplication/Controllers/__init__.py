import os
import glob
from fastapi import APIRouter

router = APIRouter(prefix='/api')

__all__ = [os.path.basename(file_path)[:-3] for file_path in glob.glob(os.path.dirname(__file__) + "/*.py")]