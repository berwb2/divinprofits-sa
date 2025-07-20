// Logo data structure for the infinite scroll carousel
export type LogoItem = {
  id: string;
  name: string;
  image: string;
  alt: string;
};

// All logos from the logos folder
export const logoItems: LogoItem[] = [
 
  {
    id: "agent-c",
    name: "Agent C",
    image: "/logos/65a921ad64e60f80820b0388_agent c logo.webp",
    alt: "Agent C logo"
  },
 
 
  {
    id: "cycling-tom",
    name: "Cycling Tom",
    image: "/logos/66d2058e0f2a04e5459162be_Cycling Tom Hire & Tours Logo WHITE-p-500.png",
    alt: "Cycling Tom Hire & Tours logo"
  },
  {
    id: "colored-logo-2",
    name: "Colored Logo",
    image: "/logos/679b1c2c15531716e73afc5c_Logo Colored.avif",
    alt: "Colored logo"
  },
  {
    id: "asset-1",
    name: "Asset 1",
    image: "/logos/Asset-1.svg",
    alt: "Asset 1 logo"
  },

 
  {
    id: "akeld",
    name: "Akeld",
    image: "/logos/akeld-logo.png",
    alt: "Akeld logo"
  }
];
