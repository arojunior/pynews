# -*- coding: utf-8 -*-
from django.conf import settings
from api.models import Source
import requests

def get_sources(category):
    r = requests.get(settings.NEWS_API_URL + 'sources?category=' + category + '&apiKey=' + settings.NEWS_API_KEY)
    return r.json()

def save_sources(source_list):
    for source in source_list[u'sources']:
        name = source[r'name']
        category = source[u'category']
        slug = source[u'id']
        s = Source(name=name, category=category, slug=slug)
        s.save()

def populate_sources():
    for category in settings.NEWS_API_CATEGORIES:
        source_list = get_sources(category)
        save_sources(source_list)