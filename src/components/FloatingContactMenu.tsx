import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Bot, Facebook, Music2, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface FloatingContactMenuProps {
  onOpenChat: () => void;
  onOpenBoq: () => void;
  lang: 'en' | 'ne';
}

interface ArcItem {
  id: string;
  label: string;
  icon: React.ElementType;
  bgClass: string;
  x: number;
  y: number;
  action: () => void;
}

export const FloatingContactMenu: React.FC<FloatingContactMenuProps> = ({
  onOpenChat,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/977015925757?text=${encodeURIComponent(
    lang === 'ne'
      ? 'नमस्ते D&K Hardware and Sanitary, मलाई सामानको जानकारी चाहिएको थियो।'
      : 'Hello D&k Hardware and Sanitary, I would like to inquire about hardware and sanitary supplies.'
  )}`;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Arc layout matching the radial curve in Binayak Suppliers screenshot
  const arcItems: ArcItem[] = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      bgClass: 'bg-[#25D366] hover:bg-[#20ba59] text-white',
      x: 14,
      y: -108,
      action: () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: Facebook,
      bgClass: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      x: -32,
      y: -96,
      action: () => {
        window.open('https://facebook.com', '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'ai-bot',
      label: lang === 'ne' ? 'एआई सहायक' : 'AI Assistant',
      icon: Bot,
      bgClass: 'bg-[#2563eb] hover:bg-blue-700 text-white',
      x: -66,
      y: -64,
      action: () => {
        setIsOpen(false);
        onOpenChat();
      },
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      icon: Music2,
      bgClass: 'bg-black hover:bg-neutral-900 text-white',
      x: -82,
      y: -18,
      action: () => {
        window.open('https://tiktok.com', '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'phone',
      label: lang === 'ne' ? 'सिधा फोन' : 'Call 01-5925757',
      icon: Phone,
      bgClass: 'bg-[#f97316] hover:bg-orange-600 text-white',
      x: -80,
      y: 30,
      action: () => {
        window.location.href = BUSINESS_INFO.phoneTel;
      },
    },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center select-none"
    >
      {/* Radial Fan-Out Arc Items */}
      <AnimatePresence>
        {isOpen &&
          arcItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                id={`floating-action-${item.id}`}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: item.x,
                  y: item.y,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  delay: index * 0.035,
                }}
                onClick={() => {
                  item.action();
                }}
                title={item.label}
                aria-label={item.label}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:scale-110 active:scale-95 z-40 ${item.bgClass}`}
              >
                <Icon className="w-5 h-5 fill-current" />
              </motion.button>
            );
          })}
      </AnimatePresence>

      {/* Main Floating Trigger Button - Slate round button without green indicator dot */}
      <button
        id="floating-menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#1e293b] hover:bg-slate-700 active:bg-slate-800 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-500/30 z-50"
        aria-label="Toggle contact menu"
        title={isOpen ? 'Close menu' : 'Contact us'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 stroke-[2.2]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
