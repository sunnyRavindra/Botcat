#!/bin/bash

Project_name="Cloud-DevOps-Large-Enterprise-Practical-Guide"
Project_name_readme_file="1-Project-name.md"
Index_readme_file="2-index.md"
output=""
# Enter Project name at the start
$(echo -e "# $Project_name \n" > $Project_name_readme_file)

# Iterate through each file in the current directory
for file in *; do
    if [[ -f "$file" && "$file" != "1-Project-name.md" && "$file" != "2-index.md" && "$file" != "readme.sh" ]]; then

while IFS= read -r line; do

    if [[ $line == "## "* ]]; then
        # output+="$line\n" | tr -d '##'
        output+="- [$line]($line)\n"
    fi

    if [[ $line == "### "* ]]; then
        output+="  - [$line]($line)\n"
    fi

done < "$file"

string=$(echo -e $output | tr -d '#')

IFS=$'\n' read -r -d '' -a lines <<< "$string"

# Iterate over each line and remove the space after '['
new_lines=()

for line in "${lines[@]}"; do
    index=$(echo "$line" | awk '{print index($0, "[")}')
    if (( index > 0 && index < ${#line} - 1 )); then
        line="${line:0:index}${line:index+1}"
    fi
    new_lines+=("$line")
done

# Join the modified lines back into a single string
new_string=$(IFS=$'\n'; echo "${new_lines[*]}")

# Split the string into lines
IFS=$'\n' read -r -d '' -a lines <<< "$new_string"

# Iterate over each line and replace "( " with "(#"
new_lines=()
for line in "${lines[@]}"; do
    new_line=${line//"( "/"(#"}
    new_lines+=("$new_line")
done

new_string=$(IFS=$'\n'; echo "${new_lines[*]}")
    fi
done
# Print the updated string
echo "$new_string" > ./2-index.md

sudo cat ./1-Project-name.md > ../README.md
sudo cat ./2-index.md >> ../README.md

for file in *; do
    if [[ -f "$file" && "$file" != "1-Project-name.md" && "$file" != "2-index.md" && "$file" != "readme.sh" ]]; then
        cat $file >> ../README.md
    fi
done

sed -i 's/ -\[/  - \[/' ../README.md
