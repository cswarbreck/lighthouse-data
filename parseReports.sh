rm dates.json
cd ./report/
rm reports.txt
for d in */ ; do
  echo "$d" >> reports.txt
done
sed -i '' -e '$ d' reports.txt
cd ..
echo $(jq -R -s -c 'split("\n")' < ./report/reports.txt) > dates.json
rm ./report/reports.txt