# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Article, Source

admin.site.register(Article)
admin.site.register(Source)
