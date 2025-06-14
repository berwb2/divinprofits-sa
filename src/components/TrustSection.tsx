
const logos = [
  { name: "Vercel", url: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  { name: "Stripe", url: "https://seeklogo.com/images/S/stripe-logo-14720D4B3C-seeklogo.com.png" },
  { name: "Shopify", url: "https://cdn.shopify.com/assets2/favicon.ico" },
  { name: "Hubspot", url: "https://cdn2.hubspot.net/hubfs/53/tools/website/images/favicon.ico" },
  { name: "Notion", url: "https://www.notion.so/images/favicon.ico" },
];

const TrustSection = () => (
  <section className="py-12 px-2 bg-white/90 relative w-full border-t border-b border-dp-blue/10 overflow-hidden backdrop-blur">
    {/* Floating accent shape */}
    <div className="absolute left-0 top-0 w-60 h-48 bg-gradient-to-br from-dp-blue/5 to-white/80 rounded-full blur-2xl opacity-70 pointer-events-none" />
    <div className="container flex flex-col items-center gap-7 relative z-10">
      <h3 className="font-display font-bold text-xl md:text-2xl text-dp-blue-dark text-center mb-1">
        Trusted by World-Class Brands
      </h3>
      <div className="rounded-2xl bg-white/70 backdrop-blur-2xl px-7 sm:px-11 py-4 flex flex-wrap justify-center items-center gap-8 shadow-glass border border-dp-blue-light/10 animate-fade-in">
        {logos.map((logo, i) => (
          <img
            key={logo.name}
            src={logo.url}
            alt={`${logo.name} logo`}
            className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-2 border-dp-blue-light/10 rounded-lg bg-white/80 shadow"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
