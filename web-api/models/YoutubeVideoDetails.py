from typing import Optional

from pydantic import BaseModel


class YoutubeVideoDetails(BaseModel):
    url: str
    title: Optional[str]
    author: Optional[str]
    description: Optional[str]
    rating: Optional[str]
    length: Optional[str]
    views: Optional[str]
    thumbnail: Optional[str]
    streams: object