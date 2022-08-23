#!/usr/bin/env bash

for i in public/data/*.json; do


# hard spaces in file as thousands separator
echo "Endre til 'hard space' i fil $i"
sed -i 's/\ 1\ 000\ /\ 1\ 000\ /g' $i

# en dash between years
echo "Endre til 'en dash' i fil $i"
sed -i 's/\ 2019-2021/\ 2019–2021/g' $i

done
