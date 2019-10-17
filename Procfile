release: python manage.py migrate && yarn build
web: gunicorn backend.wsgi --log-file -