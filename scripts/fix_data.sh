#!/usr/bin/env bash

for i in public/data/*.csv; do

# Convert to utf-8
if [[ `file -i $i`  == *iso-8859-1* ]]; then 
  iconv -f WINDOWS-1252 -t UTF8 $i > tmp
  mv tmp $i
fi

# Remove hard spaces in file (thousands separator)
sed -i 's/\ //g' $i

done
