"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  MessageCircle,
  UserPlus,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="menuButton"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={30} />
      </button>

      {isOpen && (
        <div
          className="mobileMenuOverlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMenu();
            }
          }}
        >
          <nav
            id="mobile-navigation"
            className="mobileMenuPanel"
            aria-label="Mobile navigation"
          >
            <div className="mobileMenuHeader">
              <strong>CRYPTO FLOW BOT</strong>

              <button
                type="button"
                className="mobileMenuClose"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={25} />
              </button>
            </div>

            <div className="mobileMenuLinks">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mobileMenuActions">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mobileMenuWhatsapp"
                onClick={closeMenu}
              >
                <MessageCircle size={20} />
                Join Community
              </a>

              <a
                href={siteConfig.links.register}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mobileMenuRegister"
                onClick={closeMenu}
              >
                <UserPlus size={20} />
                Register Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
