#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i -E 's/src="\/([^"]+\.(png|jpg|mp4|svg))"/src={`${import.meta.env.BASE_URL}\1`}/g' {} +
find src -type f -name "*.tsx" -exec sed -i -E 's/setSelectedImage\("\/([^"]+\.(png|jpg|mp4|svg))"\)/setSelectedImage(`${import.meta.env.BASE_URL}\1`)/g' {} +
