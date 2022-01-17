from WebApplication import app


@app.get('/')
async def hello_world():  # put application's code here
    return 'Hello World!'


@app.get('/Convert/<name>')
async def hello_buddy(name: str):  # put application's code here
    return {f'Hello {name}!'}