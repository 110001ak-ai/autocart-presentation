"use client";

import { useEffect, useState, useRef } from "react";

export default function DesktopNotice() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Show after short delay on mobile screens
  useEffect(() => {
    if (window.innerWidth < 900) {
      const t = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  // Dismiss on outside click or tap
  useEffect(() => {
    if (!show) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDismissed(true);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [show]);

  if (!show || dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes acFadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);     }
        }
        .ac-notice {
          position: fixed;
          top: 76px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          background: #161c27;
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 2px solid #34c990;
          border-radius: 10px;
          padding: 12px 16px;
          width: 300px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
          animation: acFadeDown 0.35s ease forwards;
        }
        .ac-notice__body {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .ac-notice__icon {
          font-size: 18px;
          line-height: 1.3;
          flex-shrink: 0;
        }
        .ac-notice__copy strong {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #eaecf4;
          margin-bottom: 2px;
        }
        .ac-notice__copy span {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.4;
        }
        .ac-notice__close {
          background: none;
          border: none;
          color: #4b5563;
          font-size: 16px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          flex-shrink: 0;
          align-self: flex-start;
          transition: color 0.15s;
        }
        .ac-notice__close:hover {
          color: #9ca3af;
        }
      `}</style>

      <div className="ac-notice" ref={ref} role="status">
        <div className="ac-notice__body">
          <span className="ac-notice__icon">🖥️</span>
          <div className="ac-notice__copy">
            <strong>Desktop Recommended</strong>
            <span>
              For a better presentation experience, please view this on a laptop
              or desktop.
            </span>
          </div>
        </div>
        <button
          className="ac-notice__close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </>
  );
}
