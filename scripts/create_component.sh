#!/usr/bin/env bash

NAME=$1

if [ -z "$NAME" ]; then
  echo "❌ Please provide a component name"
  echo "Usage: ./scripts/create-component.sh avatar"
  exit 1
fi

PASCAL_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${NAME:0:1})${NAME:1}"
BASE_DIR="src/components/$NAME"

mkdir -p "$BASE_DIR"

touch \
  "$BASE_DIR/${NAME}Variants.ts" \
  "$BASE_DIR/${PASCAL_NAME}.tsx" \
  "$BASE_DIR/${PASCAL_NAME}.test.tsx" \
  "$BASE_DIR/${PASCAL_NAME}.Stories.tsx" \
  "$BASE_DIR/index.ts"

echo "✅ Component '$NAME' created successfully"
