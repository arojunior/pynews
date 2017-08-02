# -*- coding: utf-8 -*-
from django.conf import settings
from api.models import Source, Article
import requests

def get_articles(source):
    r = requests.get(settings.NEWS_API_URL + 'articles?source=' + source + '&apiKey=' + settings.NEWS_API_KEY)
    return r.json()

def save_articles(article_list, source):
    for article in article_list[u'articles']:
        author = article[r'author']
        title = article[r'title']
        content = article[u'description']
        url = article[u'url']
        image_url = article[u'urlToImage']
        published_at = article[u'publishedAt']
        if all([author is not None, content is not None, image_url is not None]):
            a = Article(source=source, author=author, title=title, content=content,url=url, image_url=image_url, published_at=published_at)
            a.save()

def populate_articles():
    source_list = Source.objects.all()
    for source in source_list:
        article_list = get_articles(source.slug)
        save_articles(article_list, source)
