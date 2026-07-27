#!/bin/bash
sed -i -E 's/className="hidden md:flex items-center gap-2/className="hidden xl:flex items-center gap-2/g' src/components/Navbar.tsx
sed -i -E 's/className="md:hidden w-8 h-8 flex items-center justify-center border border-bee-border text-bee-yellow bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0 ml-1"/className="xl:hidden w-8 h-8 flex items-center justify-center border border-bee-border text-bee-yellow bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0 ml-1"/g' src/components/Navbar.tsx
sed -i -E 's/className="md:hidden w-8 h-8 flex items-center justify-center border border-bee-border bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0"/className="lg:hidden w-8 h-8 flex items-center justify-center border border-bee-border bg-bee-gray hover:bg-bee-yellow hover:text-bee-black transition-all shrink-0"/g' src/components/Navbar.tsx

