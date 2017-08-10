# -*- coding: utf-8 -*-
from django.conf import settings
from api.models import Source
import requests

def get_sources(category):
    r = requests.get(settings.NEWS_API_URL + 'sources?category=' + category + '&language=en&apiKey=' + settings.NEWS_API_KEY)
    return r.json()

def save_sources(source_list):
    for source in source_list[u'sources']:

        data = {
            'name' : source[r'name'],
            'category' : source[u'category'],
            'slug' : source[u'id']
        }

        s = Source(**data)
        s.save()

def populate_sources():
    Source.objects.all().delete()
    for category in settings.NEWS_API_CATEGORIES:
        source_list = get_sources(category)
        save_sources(source_list)
