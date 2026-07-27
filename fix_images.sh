#!/bin/bash
for img in public/*.png; do
  type=$(file "$img")
  if echo "$type" | grep -q "JPEG"; then
    new_name="${img%.png}.jpg"
    mv "$img" "$new_name"
    base_old=$(basename "$img")
    base_new=$(basename "$new_name")
    find src -type f -name "*.tsx" -exec sed -i "s/$base_old/$base_new/g" {} +
    echo "Renamed $base_old to $base_new"
  fi
done
