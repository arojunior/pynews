FROM python:3.4
ENV PYTHONUNBUFFERED 1
RUN mkdir /src
WORKDIR /src
COPY ./src/server /src/
RUN pip install -r requeriments.txt \
    && python manage.py makemigrations \
    && python manage.py migrate \
    && python manage.py getsources \
    && python manage.py getarticles
