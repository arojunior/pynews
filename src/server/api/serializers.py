from api.models import Article, Source
from rest_framework import serializers

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ('id', 'name', 'category', 'slug')

class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='source.category')
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'url', 'author', 'image_url',
        'category', 'published_at')
