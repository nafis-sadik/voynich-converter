from fastapi import APIRouter
#import fastapi
#from starlette.responses import JSONResponse

#from sys import path as pylib
#import os
#pylib += [os.path.abspath(r'../Repositories')]

#from Entities import create_db

app = APIRouter(prefix='/app')

#@app.get('/CreateDatabase')
#def create_database():
#    create_db()
#    response='success'
#    return JSONResponse(response)
