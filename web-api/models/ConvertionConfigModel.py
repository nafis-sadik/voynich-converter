from typing import Optional

from pydantic import BaseModel


class ConvertionConfigModel(BaseModel):
    url: str
    file_name: Optional[str]
    start_time: Optional[int]
    end_time: Optional[int]