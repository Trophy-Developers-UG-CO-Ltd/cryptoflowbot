"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  Send,
  UsersRound,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "cryptoflow-community-popup-dismissed";

export default function CommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);

    if (dismissed === "true") {
      return;
    }

    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        return;
      }

      const scrollPercentage =
        (window.scrollY / documentHeight) * 100;

      if (scrollPercentage >= 3) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="communityPopupOverlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <section
        className="communityPopup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="community-popup-title"
      >
        <button
          type="button"
          className="communityPopupClose"
          onClick={closePopup}
          aria-label="Close community popup"
        >
          <X size={20} />
        </button>

        <div className="communityPopupIcon">
          <UsersRound size={34} />
        </div>

        <span className="communityPopupEyebrow">
          CRYPTOFLOW BOT COMMUNITY
        </span>

        <h2 id="community-popup-title">
          Join Our Community
        </h2>

        <p>
          Connect with the CryptoFlow Bot community for updates,
          setup guidance, platform discussions and announcements.
        </p>

        <div className="communityPopupBenefits">
          <span>Community updates</span>
          <i />
          <span>Setup guidance</span>
          <i />
          <span>Announcements</span>
        </div>

        <div className="communityPopupActions">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="communityPopupWhatsapp"
            onClick={closePopup}
          >
            <MessageCircle size={21} />

            <span>
              <strong>Join WhatsApp Community</strong>
              <small>Connect with the community</small>
            </span>
          </a>

          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="communityPopupTelegram"
            onClick={closePopup}
          >
            <Send size={19} />
            Join Telegram
          </a>
        </div>

        <button
          type="button"
          className="communityPopupLater"
          onClick={closePopup}
        >
          Maybe later
        </button>
      </section>
    </div>
  );
}
