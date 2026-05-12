import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BGPattern } from "@/components/ui/bg-pattern";
import { UIComponent } from "@/components/ui/claude-style-ai-input";

export default function Home() {
  const programs = [
    {
      num: 1,
      title: "Locally Weighted Regression",
      link: "/lwr",
      pattern: "grid" as const,
    },
    {
      num: 2,
      title: "Linear & Polynomial Regression",
      link: "/regression",
      pattern: "diagonal-stripes" as const,
    },
    {
      num: 3,
      title: "Decision Tree",
      link: "/decision-tree",
      pattern: "horizontal-lines" as const,
    },
    {
      num: 4,
      title: "Naive Bayes",
      link: "/naive-bayes",
      pattern: "vertical-lines" as const,
    },
    {
      num: 5,
      title: "K-Means Clustering",
      link: "/kmeans",
      pattern: "grid" as const,
    },
  ];

  return (
    <main className="h-screen w-full overflow-hidden bg-[#050505] flex flex-col items-center">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 overflow-hidden h-[calc(100vh-64px)]">
        {/* Left Section: Welcome Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
            Welcome to ML Lab
          </h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl leading-relaxed">
            Explore advanced machine learning algorithms with interactive components, real-time code executions, and AI-assisted insights in a pure dark mode experience.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {programs.map((p, index) => (
              <Link href={p.link} key={index}>
                <div className="relative overflow-hidden h-28 flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-[#111] hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg hover:shadow-indigo-500/10 hover:border-zinc-700">
                  <BGPattern variant={p.pattern} mask="fade-edges" fill="#27272a" />
                  <div className="flex items-center gap-2 z-10 w-full px-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                      {p.num}
                    </div>
                    <p className="text-zinc-300 font-medium text-sm text-center flex-1 leading-tight">{p.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Claude Chat Input */}
        <div className="w-full md:w-1/2 flex flex-col justify-center animate-fade-in relative z-10 h-full">
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <UIComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
