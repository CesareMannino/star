from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from django.utils import timezone

class StaticViewSitemap(Sitemap):
    changefreq = 'daily'
       
    def items(self):
        return['home_view', 'crew1_view', 'starship_view', 'rocketlab_view', 'rocket_compare_view' ]
        
    def location(self, item):
        return reverse(item)

    def lastmod(self, item):
        return timezone.now()
