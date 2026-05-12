import { ClaudeChatInput } from "@/components/ui/claude-style-ai-input";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-[#060606] to-[#0b0b0b] text-white antialiased">
        <div className="min-h-screen pb-24">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-3xl mx-auto">
            <ClaudeChatInput />
          </div>
        </div>
      </body>
    </html>
  );
}
