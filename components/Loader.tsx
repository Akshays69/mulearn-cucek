"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <span className="text-6xl font-heading font-extrabold text-primary animate-pulse">
          µ
        </span>
        <p className="text-white text-lg font-sans tracking-widest">
          µLearn CUCEK
        </p>
        <div className="flex gap-1 mt-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
