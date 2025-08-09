import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-background/50">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Enhance. Engrave.{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Engage.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              From preserving your most cherished memories to powering modern business
              needs, En-Qr-Ave. delivers dynamic, customized QR code solutions—whether
              for loved ones or your livelihood.
            </p>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* QR Demo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              See How En-Qr-Ave Works
            </h2>
            <p className="text-muted-foreground mb-8">
              Scan this QR code or click below to see a sample business portfolio page
            </p>
            <div className="bg-background rounded-2xl p-8 shadow-soft border">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://en-qr-ave.com/sample-business-portfolio"
                alt="Sample Business Portfolio QR Code"
                className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-lg shadow-soft"
              />
              <Button 
                size="lg"
                onClick={() =>
                  window.open(
                    "https://en-qr-ave.com/sample-business-portfolio",
                    "_blank"
                  )
                }
                className="transform transition-all duration-300 hover:scale-105"
              >
                View Sample Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart QR Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Smart QR Solutions for Life & Legacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Family memories capture", desc: "Capture Every Moment" },
              {
                title: "Business networking with QR",
                desc: "Professional Connections",
              },
              { title: "Life events collage", desc: "Life Celebrations" },
              {
                title: "Capture every moment scrapbook",
                desc: "Memory Keepsakes",
              },
              { title: "Wedding memories forever", desc: "Forever Starts Here" },
              { title: "Peacebook Life memories", desc: "Remember Moments" },
            ].map(({ title, desc }) => (
              <Card key={title} className="group hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why En-Qr-Ave Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Why En-Qr-Ave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Capture Life's Moments",
                desc: "En-Qr-Ave. helps you preserve every special occasion, big or small. From family milestones to personal achievements, store it all in one easy-to-access space.",
              },
              {
                title: "Share What Matters",
                desc: "En-Qr-Ave. lets you share memories in a unique way. Give loved ones a digital token that connects them instantly to photos, videos, and stories – anytime, anywhere.",
              },
              {
                title: "For Every Chapter of Life",
                desc: "Whether it's a wedding, newborn, business, or beloved pet, En-Qr-Ave. offers custom token cards designed to hold memories for every stage and celebration in life.",
              },
              {
                title: "Dynamic QR Codes",
                desc: "Update content without reprinting codes",
              },
              {
                title: "Lightning Fast",
                desc: "Instant generation and real-time analytics",
              },
              {
                title: "Premium Quality",
                desc: "High-resolution codes on premium cards",
              },
            ].map(({ title, desc }) => (
              <Card key={title} className="group hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Button 
            size="lg"
            onClick={() => alert("Explore Services clicked")}
            className="transform transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            Get Yours Now! Explore Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
