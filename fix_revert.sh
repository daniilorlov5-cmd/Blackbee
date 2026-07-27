#!/bin/bash
for img in public/*.jpg; do
  new_name="${img%.jpg}.png"
  mv "$img" "$new_name"
  base_old=$(basename "$img")
  base_new=$(basename "$new_name")
  find src -type f -name "*.tsx" -exec sed -i "s/$base_old/$base_new/g" {} +
  echo "Renamed $base_old to $base_new"
done
