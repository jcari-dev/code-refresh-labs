import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import MobileWarning from "./components/MobileWarning";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ChallengePage from "./pages/ChallengePage";
import Why from "./pages/Why";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <div className="flex h-screen">
          {/* Left app rail */}
          <Sidebar />

          {/* Main app column */}
          <div className="flex flex-1 flex-col">
            <Navbar />

            <main className="flex-1 overflow-y-auto bg-slate-900/60 px-6 py-6">
              <div className="mx-auto max-w-6xl">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/category/:categoryId"
                    element={<CategoryPage />}
                  />
                  <Route
                    path="/challenge/:challengeId"
                    element={<ChallengePage />}
                  />
                  <Route path="/why" element={<Why />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
