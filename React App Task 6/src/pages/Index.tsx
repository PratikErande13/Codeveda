import Calculator from "@/components/Calculator/Calculator";

const Index = () => {
  return (
    <>
      {/* Background mesh gradient */}
      <div className="mesh-gradient" />
      
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 tracking-tight">
            React Calculator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Built with Components, Props & State
          </p>
        </header>

        {/* Calculator */}
        <Calculator />
      </main>
    </>
  );
};

export default Index;
