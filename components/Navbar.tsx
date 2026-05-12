import Link from "next/link";
import { Cpu, Home, Network, GitBranch, GitMerge, LayoutGrid, BrainCircuit } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "LWR", href: "/lwr", icon: GitMerge },
    { name: "Regression", href: "/regression", icon: GitBranch },
    { name: "Decision Tree", href: "/decision-tree", icon: Network },
    { name: "Naive Bayes", href: "/naive-bayes", icon: BrainCircuit },
    { name: "KMeans", href: "/kmeans", icon: LayoutGrid },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0b0b0b]/80 border-b border-gray-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white font-bold tracking-tight text-lg leading-tight group-hover:text-indigo-400 transition-colors">ML Lab</span>
            <span className="text-[10px] uppercase font-semibold text-indigo-400/80 tracking-wider leading-tight">Next.js • UI</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center bg-[#1a1a1a]/50 p-1.5 rounded-full border border-gray-800/60 shadow-inner">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full transition-all duration-300 hover:bg-gray-800/50 flex items-center gap-2 group"
              >
                <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu place-holder if ever needed */}
        <div className="md:hidden flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
            <LayoutGrid className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
