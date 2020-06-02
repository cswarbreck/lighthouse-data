rm reports.json
touch reports.json
cd ./report/
echo "[" >> ../reports.json
for d in */ ; do
  echo $i
  echo "\"$d\"," >> ../reports.json
done
echo "]" >> ../reports.json
cd ..