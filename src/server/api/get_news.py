# -*- coding: utf-8 -*-
from django.http import HttpResponse
import requests

# News API variables
url = "https://newsapi.org/v1/"
api_key = "eef4feb0ab82412aa3be394b50389a51"
source_categories = ["business", "politics", "science-and-nature", "sport", "technology"]

def index(request):
    """ Get news from newsapi
    """
    source_list = get_sources()
    return HttpResponse(source_list, content_type='application/json', charset='utf-8')

def get_sources():
    source_list = []

    for category in source_categories:
        r = requests.get(url + 'sources?category=' + category + '&apiKey=' + api_key)
        source_list.append(r.text)

    return source_list
