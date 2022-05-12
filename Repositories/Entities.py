from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from sqlalchemy.sql.expression import true
from sqlalchemy.sql.schema import ForeignKey

Base = declarative_base()

class SysConfig(Base):
    __tablename__ = 'SystemConfig'

    id = Column(Integer, primary_key=True, autoincrement=True)
    keep_file_in_server_time = Column(Integer)

class IconType(Base):
    __tablename__ = 'IconType'

    id = Column(Integer, primary_key=True, autoincrement=True)
    icon_type_name = Column(Integer)
    page_content_relation = relationship("PageContentRelation")
    tv_relation = relationship("TVRelation")
    radio_relation = relationship("RadioRelation")


class PageContent(Base):
    __tablename__ = 'PageContent'

    id = Column(Integer, primary_key=True, autoincrement=True)
    ui_name = Column(String)
    url = Column(String)
    icon = Column(String)
    icon_type = Column(Integer, ForeignKey('IconType.id'), nullable=true)


class TV(Base):  
    __tablename__ = 'TV'

    id = Column(Integer, primary_key=True, autoincrement=True)
    channel_name = Column(String)
    thumbnail_url = Column(String)
    stream_url = Column(String)
    Country = Column(String)
    icon = Column(String)
    icon_type = Column(Integer, ForeignKey('IconType.id'), nullable=true)
    

class Radio(Base):
    __tablename__ = 'Radio'

    id = Column(Integer, primary_key=True, autoincrement=True)
    channel_name = Column(String)
    thumbnail_url = Column(String)
    stream_url = Column(String)
    Country = Column(String)
    icon = Column(String)
    icon_type = Column(Integer, ForeignKey('IconType.id'), nullable=true)


def create_db():
    engine = create_engine('sqlite:///database.sqlite', echo=False)
    Session = sessionmaker(bind=engine)
    session = Session()
    Base.metadata.create_all(engine)