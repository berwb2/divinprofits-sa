
const logos = [
  { name: "Vercel", url: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  { name: "Stripe", url: "https://seeklogo.com/images/S/stripe-logo-14720D4B3C-seeklogo.com.png" },
  { name: "Shopify", url: "https://cdn.shopify.com/assets2/favicon.ico" },
  { name: "Hubspot", url: "https://cdn2.hubspot.net/hubfs/53/tools/website/images/favicon.ico" },
  { name: "Notion", url: "https://www.notion.so/images/favicon.ico" },
];

const TrustSection = () => (
  <section className="py-12 px-2 bg-white/80 backdrop-blur border-t border-b border-blue-100">
    <div className="container flex flex-col items-center gap-6">
      <h3 className="font-display font-bold text-xl text-dp-blue-dark text-center">
        Trusted by Leading Brands & Startups
      </h3>
      <div className="flex flex-wrap gap-7 items-center justify-center mt-2">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.url}
            alt={`${logo.name} logo`}
            className="h-10 w-auto object-contain opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
