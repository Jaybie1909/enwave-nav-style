// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-8 tracking-tight">
              Welcome to{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                EN-QR-AVE
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience excellence in every detail. We deliver innovative solutions 
              tailored to your unique needs and vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-lg">
                Get Started
              </button>
              <button className="border border-header-border text-foreground hover:bg-header-border/50 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
