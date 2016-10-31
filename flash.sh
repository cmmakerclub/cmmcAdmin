#!/bin/bash

rm -v dist/static/fonts/*.ttf
rm -v dist/static/img/*.svg
rm -v dist/static/js/app*.js
rm -v dist/static/css/*.css
rm -v dist/static/js/vendor*.js


pushd ~/projects/NatRTCUserMemory/
pio run -t uploadfs
popd

