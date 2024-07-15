import Navbar from "@/components/Navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}
