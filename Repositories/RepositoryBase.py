from abc import ABC

import sqlalchemy
from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker

from IRepositoryBase import IRepositoryBase


class RepositoryBase(IRepositoryBase, ABC):
    entity_type = None

    def __init__(self, entity: type) -> None:
        self.engine = create_engine('sqlite:///:database:', echo=False)
        session_maker = sessionmaker(bind=self.engine)
        self.session = session_maker()
        RepositoryBase.entity_type = entity

    def get_version(self):
        return sqlalchemy.__version__

    def create_database(self):
        raise NotImplementedError

    def add(self, data: entity_type) -> None:
        self.session.add(data)
        self.session.commit()

    def delete(self, data: entity_type) -> None:
        self.session.delete(data)
        self.session.commit()

    def commit(self) -> None:
        self.session.commit()

    def get_all(self) -> list:
        return self.session.query(RepositoryBase.entity_type).all()

    def get_count(self) -> int:
        return self.session.query(RepositoryBase.entity_type).count()

    def get(self, query) -> list:
        return self.session.query(RepositoryBase.entity_type).filter(query).all()

    def max(self, col_map) -> int:
        return self.session.query(func.max(col_map)).scalar()