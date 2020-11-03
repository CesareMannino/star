from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse

class StaticViewSitemap(Sitemap):
    changefreq = 'always'
    
    def items(self):
        return['home_view']

    def location(self, item):
        return reverse(item)
