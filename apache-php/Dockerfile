FROM php:8.2-apache

# Installer extensions PHP nécessaires
RUN apt-get update && apt-get install -y libpq-dev unzip git && docker-php-ext-install pdo pdo_pgsql pgsql pdo_mysql mysqli && apt-get clean && rm -rf /var/lib/apt/lists/*

# Activer mod_rewrite pour Flight
RUN a2enmod rewrite

# Copier le code source
COPY src/ /var/www/html/

# Droits
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80