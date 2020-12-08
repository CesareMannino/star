from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse

class StaticViewSitemap(Sitemap):
    changefreq = 'always'
    
    def items(self):
        return['home_view', 'crew1_view', 'starship_view', 'rocketlab_view', 'rocket_compare_view' ]
        
    def location(self, item):
        return reverse(item)
