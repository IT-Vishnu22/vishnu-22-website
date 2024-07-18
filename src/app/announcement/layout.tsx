"use client";

import AuthProvider from "../AuthProvider";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <AuthProvider>
        <div className="relative h-full w-full md:mx-auto md:max-w-[390px]">
          {children}
        </div>
      </AuthProvider>
    </section>
  );
}
