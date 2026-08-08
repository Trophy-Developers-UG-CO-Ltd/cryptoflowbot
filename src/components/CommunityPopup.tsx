"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Send,
  UsersRound,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const AUTO_CLOSE_DELAY = 12000;

export default function CommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const hasOpened = useRef(false);
  const autoCloseTimer = useRef<number | null>(null);

  useEffect(() => {
    const target = document.getElementById("about");

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !hasOpened.current
        ) {
          hasOpened.current = true;
          setIsOpen(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    autoCloseTimer.current = window.setTimeout(() => {
      setIsOpen(false);
    }, AUTO_CLOSE_DELAY);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      if (autoCloseTimer.current) {
        window.clearTimeout(autoCloseTimer.current);
      }

      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closePopup = () => {
    if (autoCloseTimer.current) {
      window.clearTimeout(autoCloseTimer.current);
    }

    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="communityPopupOverlay"
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
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="communityPopupLogo">
          <Image
            src="/images/logo.png"
            alt="CryptoFlow Bot"
            width={82}
            height={82}
          />
        </div>

        <span className="communityPopupEyebrow">
          <UsersRound size={14} />
          CRYPTOFLOW BOT COMMUNITY
        </span>

        <h2 id="community-popup-title">
          Join Our Community
        </h2>

        <p className="communityPopupIntro">
          Connect with the CryptoFlow Bot community for platform updates,
          setup guidance, discussions and important announcements.
        </p>

        <div className="communityPopupHighlights">
          <span>Updates</span>
          <i />
          <span>Setup Guidance</span>
          <i />
          <span>Community Support</span>
        </div>

        <div className="communityPopupActions">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="communityPopupWhatsapp"
            onClick={closePopup}
          >
            <MessageCircle size={23} />

            <span>
              <strong>Join WhatsApp Community</strong>
              <small>Connect with CryptoFlow Bot users</small>
            </span>
          </a>

          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="communityPopupTelegram"
            onClick={closePopup}
          >
            <Send size={18} />
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

        <div className="communityPopupTimer">
          <span />
        </div>
      </section>
    </div>
  );
}
