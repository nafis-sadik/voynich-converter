from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

__version__ = '0.1'

from starlette.staticfiles import StaticFiles

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

import WebApplication.Controllers
