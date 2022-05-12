from fastapi import APIRouter
import fastapi
from starlette.responses import JSONResponse
from Entities import create_db

from sys import path as pylib
import os
pylib += [os.path.abspath(r'../Repositories')]

app = APIRouter(prefix='/app')

@app.get('/CreateDatabase')
def create_database():
    create_db()
    response='success'
    return JSONResponse(response)
