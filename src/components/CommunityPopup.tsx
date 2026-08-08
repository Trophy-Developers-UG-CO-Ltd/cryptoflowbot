"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Send,
  UsersRound,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const SHOW_AFTER = 3000;
const AUTO_CLOSE_AFTER = 15000;

export default function CommunityPopup() {
  const [visible, setVisible] = useState(false);

  /*
   * Show automatically 3 seconds after every page reload.
   * No sessionStorage/localStorage.
   */
  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setVisible(true);
    }, SHOW_AFTER);

    return () => {
      window.clearTimeout(showTimer);
    };
  }, []);

  /*
   * Auto-close after 15 seconds.
   */
  useEffect(() => {
    if (!visible) {
      return;
    }

    const closeTimer = window.setTimeout(() => {
      setVisible(false);
    }, AUTO_CLOSE_AFTER);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(closeTimer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [visible]);

  /*
   * During SSR and before the timer fires,
   * render nothing.
   */
  if (!visible || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="cfPopupV2Overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setVisible(false);
        }
      }}
    >
      <section
        className="cfPopupV2"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cf-community-popup-title"
      >
        <button
          type="button"
          className="cfPopupV2Close"
          aria-label="Close community popup"
          onClick={() => setVisible(false)}
        >
          <X size={20} />
        </button>

        <div className="cfPopupV2Logo">
          <Image
            src="/images/logo.png"
            alt="CryptoFlow Bot"
            width={84}
            height={84}
          />
        </div>

        <div className="cfPopupV2Eyebrow">
          <UsersRound size={14} />
          <span>CRYPTOFLOW BOT COMMUNITY</span>
        </div>

        <h2 id="cf-community-popup-title">
          Join Our Community
        </h2>

        <p className="cfPopupV2Text">
          Connect with the CryptoFlow Bot community for updates,
          setup guidance and 24/7 community support.
        </p>

        <div className="cfPopupV2Points">
          <span>Updates</span>
          <i />
          <span>Setup Guidance</span>
          <i />
          <span>24/7 Support</span>
        </div>

        <div className="cfPopupV2Actions">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cfPopupV2Whatsapp"
            onClick={() => setVisible(false)}
          >
            <MessageCircle size={22} />

            <span>
              <strong>Join WhatsApp Community</strong>
              <small>Connect with the CryptoFlow Bot community</small>
            </span>
          </a>

          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="cfPopupV2Telegram"
            onClick={() => setVisible(false)}
          >
            <Send size={18} />
            Join Telegram
          </a>
        </div>

        <button
          type="button"
          className="cfPopupV2Later"
          onClick={() => setVisible(false)}
        >
          Maybe later
        </button>

        <div className="cfPopupV2Progress">
          <span />
        </div>
      </section>
    </div>,
    document.body
  );
}
