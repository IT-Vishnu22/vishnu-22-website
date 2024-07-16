export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="bg-green-1 h-screen">
        {children}
      </section>
    );
  }