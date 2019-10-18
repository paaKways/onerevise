from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.template.loader import get_template

index = never_cache(TemplateView.as_view(template_name=get_template('index.html')))