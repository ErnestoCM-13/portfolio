#!/bin/bash

#Clear public folder content
rm -rf public/assets/*
rm -f public/css/*
rm -f public/js/*
rm -f public/index.html public/index-es.html public/index-en.html

echo "Copying files..."

# Assets
mkdir -p public/assets/img
#mkdir -pf public/assets/icons
cp src/assets/img/* public/assets/img/
#cp src/assets/icons/* public/assets/icons/
cp src/assets/* public/assets/

# CSS
mkdir -p public/css
cp src/css/*.css public/css/

# JS
mkdir -p public/js
cp src/js/*.js public/js/

# HTML
cp src/index.html public/
cp src/index-en.html public/
cp src/index-es.html public/

echo "Build compleated. files copied to /public"