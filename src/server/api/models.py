# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Source(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    slug = models.CharField(max_length=50)

class Article(models.Model):
    source = models.ForeignKey(Source, on_delete=models.CASCADE)
    title = models.CharField(max_length=500)
    content = models.TextField()
    author = models.CharField(max_length=200)
    url = models.CharField(max_length=250)
    image_url = models.CharField(max_length=250)
    published_at = models.DateTimeField(null=True)
