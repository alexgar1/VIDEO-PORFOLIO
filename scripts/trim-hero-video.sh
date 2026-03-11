#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 <input-video> [output-video] [duration-seconds]"
  echo "Example: $0 \"video-source/original.mp4\" \"video/000-hero-45s.mp4\" 45"
  exit 1
fi

input_video="$1"
output_video="${2:-video/000-hero-45s.mp4}"
duration_seconds="${3:-45}"

mkdir -p "$(dirname "$output_video")"

ffmpeg -y \
  -i "$input_video" \
  -t "$duration_seconds" \
  -an \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -movflags +faststart \
  "$output_video"

echo "Created: $output_video"
ls -lh "$output_video"
