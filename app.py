from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def hello_world():  # put application's code here
    return 'Hello World!'

# Uses uvicoirn server
# Swagger at following links
#   http://127.0.0.1:8000/redoc
#   http://127.0.0.1:8000/doc
# Video to audio converter tutorial :https://youtu.be/u5x5RZNtOqE
# MoviePy fill tutorial : https://youtu.be/2t0I0URiS40
# Google Cloud Path : https://www.cloudskillsboost.google/paths
