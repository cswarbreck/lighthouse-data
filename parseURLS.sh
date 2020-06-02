rm sites.json
touch sites.json
echo "[" >> sites.json
while read p; do
  echo "\"$p\"," >> sites.json
done <sites.txt
echo "]" >> sites.json
# sed 's/,([^,]*$)/\1/' sites.json