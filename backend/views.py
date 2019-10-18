from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.template.loader import get_template
from django.conf import settings

template_name = 'index.html' # if settings.DEBUG == True else get_template('index.html')
index = never_cache(TemplateView.as_view(template_name=template_name))