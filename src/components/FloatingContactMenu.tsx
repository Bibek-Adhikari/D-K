import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Phone, 
  Facebook, 
  MessageSquare,
  X,
  Bot,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

const TiktokIcon = ({ size, color, fill }: { size: number; color?: string; fill?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill || color || "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/9779851056522?text=Namaste%20D%26K%20Hardware%20and%20Sanitary%2C%20I%20have%20an%20inquiry...",
  facebook: "https://www.facebook.com",
  tiktok: "https://www.tiktok.com",
  phone: BUSINESS_INFO.phoneTel
};

// On desktop: compact radial arc spreading upper-left
// Spread from 75° → 225°
const DESKTOP_ANGLES = [75, 105, 135, 165, 195, 225];
const DESKTOP_RADIUS = 100; // px from button center

// On mobile: straight vertical column going up
const MOBILE_STEP = 58; // px per item

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

interface FloatingContactMenuProps {
  onOpenChat: () => void;
  lang: 'en' | 'ne';
}

export const FloatingContactMenu: React.FC<FloatingContactMenuProps> = ({
  onOpenChat,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const menuItems = [
    { id: 'whatsapp', icon: MessageCircle, color: '#25D366', href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp 9851056522', fillIcon: true },
    { id: 'facebook', icon: Facebook, color: '#1877F2', href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { id: 'bot', icon: Bot, color: '#2563EB', onClick: () => { onOpenChat(); setIsOpen(false); }, label: 'AI Chat' },
    { id: 'tiktok', icon: TiktokIcon, color: '#010101', href: SOCIAL_LINKS.tiktok, label: 'TikTok', fillIcon: true },
    { id: 'phone', icon: Phone, color: '#F97316', href: 'tel:9851056522', label: lang === 'ne' ? '९८५१०५६५२२' : 'Call 9851056522' },
  ];

  // Main button size
  const BTN = 60;
  // Social button size
  const ICON_BTN = isMobile ? 44 : 42;

  return (
    <>
      {/*
        Key fix for laptop: the wrapper must NOT clip children.
        We use overflow: visible so buttons can spread outward past the wrapper bounds.
        The wrapper is just a positioning anchor at bottom-right.
      */}
      <div
        className="fixed z-[60]"
        style={{
          bottom: isMobile ? 20 : 32,
          right: isMobile ? 16 : 32,
          width: BTN,
          height: BTN,
          // overflow must be visible — this is what was causing the clipping!
          overflow: 'visible',
        }}
      >
        {/* Social items — positioned absolutely relative to this wrapper */}
        <AnimatePresence>
          {isOpen && menuItems.map((item, index) => {
            let tx: number;
            let ty: number;

            if (isMobile) {
              // Straight up
              tx = 0;
              ty = -(MOBILE_STEP * (index + 1));
            } else {
              // Radial arc: spread upper-left of the button
              const rad = degToRad(DESKTOP_ANGLES[index]);
              tx = Math.cos(rad) * DESKTOP_RADIUS;
              ty = -Math.sin(rad) * DESKTOP_RADIUS;
            }

            const sharedStyle: React.CSSProperties = {
              width: ICON_BTN,
              height: ICON_BTN,
              backgroundColor: item.color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              flexShrink: 0,
            };

            const iconEl = <item.icon size={isMobile ? 19 : 22} color="white" fill={item.fillIcon ? 'white' : 'none'} />;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: tx, y: ty }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 340,
                  damping: 24,
                  delay: index * 0.045,
                }}
                className="group absolute"
                style={{
                  // Center relative to the wrapper (which is BTN × BTN)
                  top: (BTN - ICON_BTN) / 2,
                  left: (BTN - ICON_BTN) / 2,
                  // overflow visible so tooltip shows
                  overflow: 'visible',
                }}
              >
                {/* Tooltip */}
                <span
                  className="
                    absolute pointer-events-none z-10
                    bg-gray-900/90 text-white text-xs font-semibold px-2 py-1 rounded-lg
                    whitespace-nowrap shadow-lg
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150
                  "
                  style={
                    isMobile
                      ? { right: '110%', top: '50%', transform: 'translateY(-50%)' }
                      : { bottom: '110%', left: '50%', transform: 'translateX(-50%)' }
                  }
                >
                  {item.label}
                </span>

                {/* The icon button */}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={sharedStyle}
                    aria-label={item.label}
                    className="hover:scale-125 active:scale-95 transition-transform block cursor-pointer"
                  >
                    {iconEl}
                  </a>
                ) : (
                  <button
                    onClick={item.onClick}
                    style={sharedStyle}
                    aria-label={item.label}
                    className="hover:scale-125 active:scale-95 transition-transform cursor-pointer"
                  >
                    {iconEl}
                  </button>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setIsOpen(o => !o)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full h-full rounded-full text-white flex items-center justify-center transition-colors relative z-10 cursor-pointer"
          style={{
            backgroundColor: isOpen ? '#1e293b' : '#1d4ed8',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
          aria-label="Toggle contact menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <MessageSquare size={28} fill="currentColor" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};
