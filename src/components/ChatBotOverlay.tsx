import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, Phone, Sparkles, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { translations } from '../constants/translations';
import { askGeminiStoreAssistant, checkAiHealth, ChatMessage } from '../services/storeAssistant';

interface ChatBotOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ne';
}

interface EnrichedChatMessage extends ChatMessage {
  source?: 'gemini-3.8-flash' | 'store-knowledge-fallback';
}

export const ChatBotOverlay: React.FC<ChatBotOverlayProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang];
  const [messages, setMessages] = useState<EnrichedChatMessage[]>([
    { role: 'bot', content: t.chat.greeting }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const [isGeminiActive, setIsGeminiActive] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check backend Gemini AI connectivity on open
  useEffect(() => {
    if (isOpen) {
      checkAiHealth().then((res) => {
        setIsGeminiActive(res.geminiConfigured);
      });
    }
  }, [isOpen]);

  // Update greeting when language switches
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([{ role: 'bot', content: t.chat.greeting }]);
    }
  }, [lang, t.chat.greeting]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const speakText = (text: string) => {
    if (!isSpeechEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'ne' ? 'ne-NP' : 'en-US';
      window.speechSynthesis.speak(utterance);
    } catch {
      // Ignore speech synthesis errors gracefully
    }
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    const userMessage: EnrichedChatMessage = { role: 'user', content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setIsTyping(true);

    try {
      const res = await askGeminiStoreAssistant(text, lang, nextMessages);
      if (res.geminiConfigured !== undefined) {
        setIsGeminiActive(res.geminiConfigured);
      }
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: res.reply, source: res.source }
      ]);
      setIsTyping(false);
      speakText(res.reply);
    } catch {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      {/* Chat Window Container */}
      <div className="relative z-10 w-full sm:w-[420px] max-h-[85vh] h-[580px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in text-gray-900 dark:text-white">
        
        {/* Header */}
        <div className="p-4 bg-[#1e3a8a] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white shadow-md relative">
              <Bot className="w-5 h-5" />
              {isGeminiActive && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              )}
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-1.5">
                <span>{t.chat.title}</span>
                {isGeminiActive ? (
                  <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                    <Sparkles className="w-2.5 h-2.5" /> Gemini 3.8 Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-blue-500/30 text-blue-200 border border-blue-400/30 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                    Smart Assistant
                  </span>
                )}
              </div>
              <div className="text-[11px] text-white/80">
                {isGeminiActive 
                  ? (lang === 'ne' ? 'गुगल जेमिनाई एआई सक्रिय' : 'Powered by Gemini AI')
                  : t.chat.subtitle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Text-to-speech toggle */}
            <button
              onClick={() => setIsSpeechEnabled(!isSpeechEnabled)}
              title={isSpeechEnabled ? 'Disable voice' : 'Enable voice'}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isSpeechEnabled ? <Volume2 className="w-4 h-4 text-[#f97316]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-950 text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'bot' && (
                <div className="w-7 h-7 rounded-xl bg-[#1e3a8a]/10 dark:bg-blue-950/60 text-[#1e3a8a] dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-[#f97316] text-white font-medium rounded-br-none'
                    : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-800 dark:text-slate-200 rounded-bl-none'
                }`}
              >
                {msg.content}
                {msg.source === 'gemini-3.8-flash' && (
                  <div className="mt-1.5 pt-1 border-t border-gray-100 dark:border-slate-800 flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Gemini 3.8 Flash</span>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-[#f97316]/15 text-[#f97316] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-2.5 rounded-2xl w-max shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
              <span>{lang === 'ne' ? 'टाइप गर्दैछ...' : (isGeminiActive ? 'Gemini AI generating response...' : 'Searching store knowledge...')}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 overflow-x-auto">
          <div className="flex gap-1.5 whitespace-nowrap scrollbar-none">
            {t.chat.quickPrompts.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(chip)}
                className="text-[11px] bg-white dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 hover:text-[#f97316] border border-gray-200 dark:border-slate-700 px-3 py-1 rounded-full transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#f97316]" />
                <span>{chip}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.chat.placeholder}
            className="flex-1 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 focus:border-[#f97316] text-gray-900 dark:text-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder-gray-400 outline-none transition-colors"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="bg-[#f97316] hover:bg-orange-600 disabled:opacity-40 text-white p-2.5 rounded-xl transition-colors cursor-pointer shadow-md shadow-orange-500/20"
            aria-label="Send message"
          >
            <Send className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* WhatsApp Banner */}
        <div className="px-4 py-2 bg-gray-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-600 dark:text-slate-400">
          <span>{t.chat.callInstead}</span>
          <a
            href="https://wa.me/9779851056522"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>9851056522</span>
          </a>
        </div>

      </div>
    </div>
  );
};
