# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from api.models import Article, Source
from rest_framework import viewsets
from api.serializers import ArticleSerializer, SourceSerializer

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-published_at')[:6]
    serializer_class = ArticleSerializer

    def get_queryset(self):
        queryset = Article.objects.all().order_by('-published_at')
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(source__category=category)
        return queryset[:6]

class SourceViewSet(viewsets.ModelViewSet):
    queryset = Source.objects.all()
    serializer_class = SourceSerializer
