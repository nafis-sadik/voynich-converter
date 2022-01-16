from sqlalchemy import Column, Integer, String, create_engine, DateTime, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()


class MediaTable(Base):
    __tablename__ = 'MediaTable'

    id = Column(Integer, primary_key=True, autoincrement=True)
    source_file = Column(String)
    destination_file = Column(String)
    create_time = Column(DateTime)
    clear_time = Column(DateTime)


class CustomerTable(Base):
    __tablename__ = 'CustomerTable'

    id = Column(Integer, primary_key=True, autoincrement=True)
    all_data = Column(String)
    visit_time = Column(DateTime)


if __name__ == '__main__':
    engine = create_engine('sqlite:///database.sqlite', echo=False)
    Session = sessionmaker(bind=engine)
    session = Session()
    Base.metadata.create_all(engine)
