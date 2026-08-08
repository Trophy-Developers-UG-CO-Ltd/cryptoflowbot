"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const screenshots = [
  {
    src: "/images/screenshotearnings00.jpeg",
    alt: "CryptoFlow Bot earnings dashboard showing total earnings and cumulative trading activity",
    label: "Earnings Overview",
  },
  {
    src: "/images/screenshotearnings01.jpeg",
    alt: "CryptoFlow Bot daily earnings breakdown",
    label: "Daily Breakdown",
  },
  {
    src: "/images/screenshotearnings02.jpeg",
    alt: "CryptoFlow Bot earnings dashboard showing trading statistics and performance history",
    label: "Trading Performance",
  },
];

export default function EarningsTicker() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(
    0,
    screenshots.length - slidesPerView
  );

  /*
   * Responsive slides per view:
   * 3 desktop
   * 2 tablet
   * 1 mobile
   */
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 700) {
        setSlidesPerView(1);
        return;
      }

      if (window.innerWidth < 1100) {
        setSlidesPerView(2);
        return;
      }

      setSlidesPerView(3);
    };

    updateSlidesPerView();

    window.addEventListener(
      "resize",
      updateSlidesPerView
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateSlidesPerView
      );
    };
  }, []);

  /*
   * Keep current slide within valid range
   * after responsive breakpoint changes.
   */
  useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  const scrollToSlide = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      const cards =
        viewport.querySelectorAll<HTMLElement>(
          ".earningsScreensCard"
        );

      const target = cards[index];

      if (!target) {
        return;
      }

      viewport.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });

      setActiveIndex(index);
    },
    []
  );

  const nextSlide = useCallback(() => {
    if (maxIndex === 0) {
      return;
    }

    const next =
      activeIndex >= maxIndex
        ? 0
        : activeIndex + 1;

    scrollToSlide(next);
  }, [
    activeIndex,
    maxIndex,
    scrollToSlide,
  ]);

  const previousSlide = useCallback(() => {
    if (maxIndex === 0) {
      return;
    }

    const previous =
      activeIndex <= 0
        ? maxIndex
        : activeIndex - 1;

    scrollToSlide(previous);
  }, [
    activeIndex,
    maxIndex,
    scrollToSlide,
  ]);

  /*
   * Auto-slide only where there are hidden slides.
   * Desktop shows all 3, therefore no unnecessary motion.
   */
  useEffect(() => {
    if (
      isPaused ||
      maxIndex === 0
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isPaused,
    maxIndex,
    nextSlide,
  ]);

  /*
   * Synchronize active dot when the user manually
   * swipes the carousel.
   */
  const handleScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const cards =
      viewport.querySelectorAll<HTMLElement>(
        ".earningsScreensCard"
      );

    if (!cards.length) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        viewport.scrollLeft -
          card.offsetLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(
      Math.min(closestIndex, maxIndex)
    );
  };

  return (
    <section
      className="earningsScreensSection"
      aria-labelledby="earnings-screens-title"
    >
      <div className="container">
        <div className="earningsScreensHeader">
          <div className="earningsScreensHeading">
            <span className="earningsScreensEyebrow">
              PLATFORM EARNINGS SCREENS
            </span>

            <h2 id="earnings-screens-title">
              See the Trading Activity
            </h2>

            <p>
              Explore earnings and trading
              activity screens from the
              CryptoFlow Bot platform.
            </p>
          </div>

          {maxIndex > 0 && (
            <div
              className="earningsScreensControls"
              aria-label="Earnings screenshot controls"
            >
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="earningsScreensOuter"
        onMouseEnter={() =>
          setIsPaused(true)
        }
        onMouseLeave={() =>
          setIsPaused(false)
        }
      >
        <div
          ref={viewportRef}
          className="earningsScreensViewport"
          onScroll={handleScroll}
        >
          <div className="earningsScreensTrack">
            {screenshots.map(
              (screenshot, index) => (
                <article
                  className="earningsScreensCard"
                  key={screenshot.src}
                >
                  <div className="earningsScreensCardTop">
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <strong>
                      {screenshot.label}
                    </strong>

                    <i>
                      <span />
                      PLATFORM SCREEN
                    </i>
                  </div>

                  <div className="earningsScreensImage">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={720}
                      height={1280}
                      sizes="
                        (max-width: 699px) 88vw,
                        (max-width: 1099px) 45vw,
                        31vw
                      "
                      className="earningsScreensImageAsset"
                    />
                  </div>

                  <div className="earningsScreensCardBottom">
                    <ShieldCheck size={15} />

                    <span>
                      CryptoFlow Bot platform
                      screenshot
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container">
        {maxIndex > 0 && (
          <div
            className="earningsScreensDots"
            aria-label="Screenshot pagination"
          >
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Show screenshot set ${
                  index + 1
                }`}
                aria-current={
                  activeIndex === index
                    ? "true"
                    : undefined
                }
                className={
                  activeIndex === index
                    ? "isActive"
                    : ""
                }
                onClick={() =>
                  scrollToSlide(index)
                }
              />
            ))}
          </div>
        )}

        <p className="earningsScreensDisclosure">
          Screenshots show historical platform
          activity and are not a guarantee of
          future trading results or profits.
        </p>
      </div>
    </section>
  );
}
