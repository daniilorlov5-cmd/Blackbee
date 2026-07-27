#!/bin/bash
set -e
for img in public/*.png; do
  if file "$img" | grep -q "JPEG"; then
    echo "Converting $img to true PNG format..."
    ffmpeg -y -i "$img" -vframes 1 "${img}.tmp.png" > /dev/null 2>&1
    mv "${img}.tmp.png" "$img"
  fi
done
echo "Conversion complete!"
