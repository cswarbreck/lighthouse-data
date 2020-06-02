rm sites.json
echo $(jq -R -s -c 'split("\n")' < sites.txt) > sites.json