#!/bin/sh

find ./sass -type css -exec sed -i 's/@import "../node_modules/bootstrap/@import "../node_modules/bootstrap/g' {} \;
