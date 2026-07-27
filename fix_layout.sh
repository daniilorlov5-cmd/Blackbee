#!/bin/bash
# Remove absolute inset-0 from all img tags in ArtObjectsPage
sed -i 's/absolute inset-0 //g' src/pages/ArtObjectsPage.tsx

# Change aspect-square to explicit height
sed -i 's/aspect-square md:aspect-\[4\/3\] lg:aspect-\[16\/10\]/h-\[500px\] sm:h-\[600px\] lg:h-\[700px\]/g' src/pages/ArtObjectsPage.tsx

