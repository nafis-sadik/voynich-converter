from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
import WebApplication.Controllers

from WebApplication.Controllers.VideoController import router

# Create the app
app = FastAPI(
    title='Voynich Converter',
    version='1.0.0'
)

# Add origins in this array to allow them only
origins = [
    "http://localhost",
    "http://localhost:8080",
]

# Add middlewares, origin also comes as middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount specific folders
app.mount("/static", StaticFiles(directory="static"), name="static")

# Enable routing
app.include_router(router)

