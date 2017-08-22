# Pynews - The news website

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/b/arojunior/pynews-ckl/badges/quality-score.png?b=dev&s=f52727d465387063bf4588bc7d72f7760c2b73e0)](https://scrutinizer-ci.com/b/arojunior/pynews-ckl/?branch=dev) [![Build Status](https://scrutinizer-ci.com/b/arojunior/pynews-ckl/badges/build.png?b=dev&s=a2b574777f7f6b890af45aa9846c35adf51c9cc8)](https://scrutinizer-ci.com/b/arojunior/pynews-ckl/build-status/dev)

### Languages

**Backend**
- Python

**Frontend**
- Javascript

### Stack

**Backend**
- Django
- Django Rest Framework

**Frontend**
- React
- Redux

# Installation

**Docker**
```sh
docker-compose up -d
```

**Manual installation** (requires python and nodejs installed locally)
- Create a virtual environment
- Go to src/server
```sh
pip install -r requeriments.txt
python manage.py makemigrations
python manage.py migrate
python manage.py getsources
python manage.py getarticles
python manage.py runserver
```
- In another terminal, navigate to src/client
```sh
npm start
```
- Then open http://localhost:3000 (client)

