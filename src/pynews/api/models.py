# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    author = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    url = models.CharField(max_length=2048)
    image_url = models.TextField(null=True)
    published_date = models.DateTimeField()
