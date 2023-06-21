#!/bin/bash

Project_name="Cloud-DevOps-Large-Enterprise-Practical-Guide"
Project_name_readme_file="1:Project-name.md"
Index_readme_file="2:index.md"
cd ~/code/Cloud-DevOps-Large-Enterprise-Practical-Guide/organizer/
output=""

for file in *; do
    if [[ -f "$file" && "$file" != "$Project_name_readme_file" && "$file" != "$Index_readme_file" && "$file" != "readme.sh" ]]; then

while IFS= read -r line; do

    if [[ $line == "## "* ]]; then
        output+="- [$line]($line)\n"
    fi

    if [[ $line == "### "* ]]; then
        output+="   - [$line]($line)\n"
    fi

done < "$file"

string=$(echo -e $output | tr -d '#')
IFS=$'\n' read -r -d '' -a lines <<< "$string"

new_lines=()

for line in "${lines[@]}"; do
    index=$(echo "$line" | awk '{print index($0, "[")}')
    if (( index > 0 && index < ${#line} - 1 )); then
        line="${line:0:index}${line:index+1}"
    fi
    new_lines+=("$line")
done

new_string=$(IFS=$'\n'; echo "${new_lines[*]}")

IFS=$'\n' read -r -d '' -a lines <<< "$new_string"

new_lines=()
for line in "${lines[@]}"; do
    new_line=${line//"( "/"(#"}
    new_lines+=("$new_line")
done

new_string=$(IFS=$'\n'; echo "${new_lines[*]}")
    fi
done

echo "$new_string" > ./2:index.md

cat ./1:Project-name.md > ../README.md
cat ./2:index.md >> ../README.md

for file in *; do
    if [[ -f "$file" && "$file" != "$project_name_readme_file" && "$file" != "$Index_readme_file" && "$file" != "readme.sh" ]]; then
        cat $file >> ../README.md
    fi
done

sed -i 's/ - \[/  - \[/' ../README.md
