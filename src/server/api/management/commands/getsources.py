from django.core.management.base import BaseCommand, CommandError
from api.repositories import sources

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write('Getting sources... wait for it...')
        sources.populate_sources()
        self.stdout.write(self.style.SUCCESS("It's done."))
