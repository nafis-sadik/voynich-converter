from WebApplication.Controllers import router
from WebApplication.Model.ItemModel import Item


@router.get('/Video/<video_name>')
async def hello_world(video_name: str):
    return f'I ❤ {video_name}!'


@router.post('/Video')
async def hello_buddy(item: Item):
    item.name = 'Carew Old Rum'
    item.price = 1100
    return item
