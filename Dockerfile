FROM python:3.4
ENV PYTHONUNBUFFERED 1
RUN mkdir /src
WORKDIR /src
COPY ./src/server /src/

# Django dependencies

RUN pip install -r requeriments.txt \
    && python manage.py makemigrations \
    && python manage.py migrate \
    && python manage.py getsources \
    && python manage.py getarticles

# Cron job to update articles periodically

RUN apt-get update && apt-get -y install cron
