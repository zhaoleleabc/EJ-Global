#!/bin/bash

# Move the custom Nginx configuration to the correct location
sudo cp /var/www/ej-eco/deploy/nginx/nginx.conf /etc/nginx/sites-available/default
sudo cp /var/www/ej-eco/deploy/nginx/nginx.conf /etc/nginx/sites-enabled/default

# Start Nginx services
nginx -g 'daemon off;'
sudo nginx -s reload
