#!/bin/bash

# Script to optimize images by converting to WebP
# Usage: ./scripts/optimize-image.sh <path-to-image>

# Check if an input file is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <path-to-image>"
  exit 1
fi

INPUT_FILE="$1"

# Check if file exists
if [ ! -f "$INPUT_FILE" ]; then
  echo "Error: File '$INPUT_FILE' not found."
  exit 1
fi

# Get directory and filename without extension
DIR=$(dirname "$INPUT_FILE")
FILENAME=$(basename -- "$INPUT_FILE")
FILENAME_NO_EXT="${FILENAME%.*}"

# Output file path
OUTPUT_FILE="$DIR/$FILENAME_NO_EXT.webp"

echo "Processing: $INPUT_FILE -> $OUTPUT_FILE"

# Check for conversion tools
if command -v convert &> /dev/null; then
  # Use ImageMagick
  # -quality 80: Good balance of quality and size
  # -define webp:lossless=false: Ensure lossy compression for better optimization (default)
  convert "$INPUT_FILE" -quality 80 -define webp:lossless=false "$OUTPUT_FILE"
  EXIT_CODE=$?
elif command -v cwebp &> /dev/null; then
  # Use cwebp (Google WebP tools)
  cwebp -q 80 "$INPUT_FILE" -o "$OUTPUT_FILE"
  EXIT_CODE=$?
else
  echo "Error: No conversion tool found. Please install 'imagemagick' or 'webp' (cwebp)."
  echo "On Ubuntu/Debian: sudo apt install imagemagick"
  echo "On MacOS: brew install imagemagick"
  exit 1
fi

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ Success: Created $OUTPUT_FILE"
  # Optional: Delete original if needed (commented out for safety)
  # rm "$INPUT_FILE"
else
  echo "❌ Error: Conversion failed."
  exit $EXIT_CODE
fi
