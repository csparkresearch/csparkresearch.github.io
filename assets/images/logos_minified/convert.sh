#!/bin/bash

TARGET_WIDTH=120

for image in *.jpg *.jpeg *.png; do
  if [ -f "$image" ]; then
    filename=$(basename "$image")
    name_without_ext="${filename%.*}"
    output_file="${name_without_ext}.jpg"

    echo "Processing '$image' -> '$output_file'"
    ffmpeg -i "$image" -vf "scale=${TARGET_WIDTH}:-1" -y "$output_file" 2>/dev/null

    # Remove the original file
    rm "$image"
  fi
done

echo "Finished processing images."
