#!/bin/bash

drupal_root=$1
repo_name=$2

cd $drupal_root
git remote add origin https://github.com/chaegumi/${repo_name}.git
git add -A
git commit -m "Initial commit"
git push -u origin main