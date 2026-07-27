#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i -E 's/\$\{import\.meta\.env\.BASE_URL\}/\//g' {} +
find src -type f -name "*.tsx" -exec sed -i -E 's/src=`\/([^`]+)`/src="\/\1"/g' {} +
find src -type f -name "*.tsx" -exec sed -i -E 's/setSelectedImage\(`\/([^`]+)`\)/setSelectedImage("\/\1")/g' {} +
