# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from api.models import Article, Source
from rest_framework import viewsets
from api.serializers import ArticleSerializer, SourceSerializer

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-published_at')
    serializer_class = ArticleSerializer

class SourceViewSet(viewsets.ModelViewSet):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer
