import requests
from fastapi import APIRouter

search_trend = APIRouter(prefix='/st')


@search_trend.get('/google')
def google_search_trend(keyword: str):
    url: str = 'http://google.com/complete/search?output=toolbar&gl=en&q=' + keyword
    r = requests.get(url)
    return r.text
    
@search_trend.get('/youtube')
def youtube_search_trend(keyword: str):
    url: str = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=' + keyword
    r = requests.get(url)
    import json
    return json.dumps(r.text)
    #visit https://dev.to/adrienshen/hacking-together-your-own-youtube-suggest-api-c0o