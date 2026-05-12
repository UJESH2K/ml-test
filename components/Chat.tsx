"use client";

import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "assistant"; text: string }[]>([
    { from: "assistant", text: "Hi — this is a local chat panel. Ask about the code or copy snippets." },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((s) => [...s, { from: "user", text }] );
    setInput("");

    // Simulated assistant response
    setTimeout(() => {
      setMessages((s) => [...s, { from: "assistant", text: `Assistant: I received "${text}"` }]);
    }, 700);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {open ? (
        <div className="w-80 h-96 bg-[#070708] border border-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800 bg-[#0f0f10]">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <FiMessageCircle />
              <span className="font-medium">ML Lab Chat</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white"><FiX /></button>
          </div>

          <div ref={listRef} className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] p-2 rounded-md ${m.from === "user" ? "bg-[#0f1720] ml-auto text-right" : "bg-[#0b0b0b]"}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-800 bg-[#080809] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(); }}
              className="flex-1 bg-transparent border border-gray-800 rounded px-2 py-1 text-sm outline-none text-gray-200"
              placeholder="Type a message..."
            />
            <button onClick={send} className="bg-indigo-600 px-3 py-1 rounded text-white flex items-center gap-2"><FiSend /></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
          <FiMessageCircle size={20} />
        </button>
      )}
    </div>
  );
}
