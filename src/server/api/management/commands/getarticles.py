from django.core.management.base import BaseCommand, CommandError
from api.repositories import articles

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write('Getting articles... wait for it...')
        articles.populate_articles()
        self.stdout.write(self.style.SUCCESS("It's done."))
