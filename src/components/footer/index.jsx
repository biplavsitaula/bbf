import React from "react";

function Footer() {
  const quickLinks = [
    { label: "Career", link: "/career" },
    { label: "Guide", link: "/guide" },
    { label: "Documentation", link: "/api-documentation" },
  ];
  const help = [
    { label: "Support", link: "/support" },
    { label: "Terms & Conditions", link: "terms" },
    { label: "FAQ", link: "/faq" },
  ];
  return (
    <footer className="px-6 py-10 flex flex-wrap justify-center gap-24 items-start">
      <div className="mr-auto">
        <div className="flex items-center gap-3">
          <img src={"/gts-logo.svg"} />
          <h2 className="font-bold text-4xl">BBF</h2>
        </div>
        <div>
          <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl underline">Quick Links</h3>
        <ul>
          {quickLinks.map((content) => (
            <li>{content.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl underline">Support</h3>
        <ul>
          {help.map((content) => (
            <li>{content.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl underline">Quick Links</h3>
        <ul>
          {quickLinks.map((content) => (
            <li>{content.label}</li>
          ))}
        </ul>
      </div>
      <div className="sm:ml-auto">
        <h3 className="text-xl mb-2">Subscribe to our newsletter.</h3>
        <form>
          <input
            placeholder="you@example.com"
            className="outline px-1 rounded py-2"
          />
          <button
            className=" bg-[#fed349] text-black px-2 rounded py-2"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
