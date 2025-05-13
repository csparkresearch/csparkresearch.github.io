#!/bin/bash

TARGET_SIZE="100x100"

for image in *.jpg *.jpeg *.png; do
  if [ -f "$image" ]; then
    filename=$(basename "$image")
    name_without_ext="${filename%.*}"

    output_file="${name_without_ext}.jpg"

    echo "Processing '$image' -> '$output_file'"
    ffmpeg -i "$image" -vf "scale=${TARGET_SIZE}" -y "$output_file" 2>/dev/null

    # Remove the original file
    rm "$image"
  fi
done

echo "Finished processing images."
