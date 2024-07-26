#!/usr/bin/env sh

set -e

npm run docs:build

cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:PengYong-py/site.git main:gh-pages

cd -
