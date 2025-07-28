// Logo data structure for the infinite scroll carousel
export type LogoItem = {
  id: string;
  name: string;
  image: string;
  alt: string;
};

// Dynamically generate logo items from all files in the logos folder
const logoFileNames = [
  "66d2058e0f2a04e5459162be_Cycling Tom Hire & Tours Logo WHITE-p-500.png",
  "akeld-logo.png",
  "boxofficetheorylogo.png",
  "epsy.png",
  "kc.PNG",
  "thinkbettergroup.PNG"
];

// Function to create a clean name from filename
const createNameFromFilename = (filename: string): string => {
  return filename
    .replace(/\.(png|jpg|jpeg|svg|webp|avif|PNG|JPG|JPEG|SVG|WEBP|AVIF)$/i, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word
    .replace(/^\d+[a-f\d]*\s*/i, '') // Remove leading hash-like strings
    .trim();
};

// Generate logo items dynamically
export const logoItems: LogoItem[] = logoFileNames.map((filename, index) => {
  const cleanName = createNameFromFilename(filename);
  return {
    id: `logo-${index}-${filename.replace(/[^a-zA-Z0-9]/g, '')}`,
    name: cleanName,
    image: `/logos/${filename}`,
    alt: `${cleanName} logo`
  };
});

// Helper function to add new logos - call this to refresh the list
export const refreshLogoItems = (): LogoItem[] => {
  // This would be used if we had a way to dynamically scan the folder
  // For now, manually add new filenames to the logoFileNames array above
  return logoItems;
};