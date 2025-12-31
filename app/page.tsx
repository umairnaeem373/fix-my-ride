"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Moon,
  Sun,
  Wrench,
  Star,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import Footer from "@/components/footer";
import {
  containerVariants,
  fadeInUp,
  itemVariants,
  scaleIn,
} from "@/lib/animations";
import FeaturesSection from "@/components/featuresSection";
import ServicesSection from "@/components/servicesSection";
import StoreButtons from "@/components/storeButtons";
import Image from "next/image";
import icon from "./favicon.ico";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { setTheme, theme, systemTheme } = useTheme();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      content:
        "Saved me when my car broke down on the highway. Mechanic arrived in 15 minutes!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content:
        "Professional service at fair prices. I use this app for all my fleet vehicles.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Weekend Driver",
      content:
        "The convenience is unmatched. No more searching for repair shops!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-background/10 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg p-2">
                <Image
                  src={icon}
                  alt="FixMyRide Logo"
                  width={130}
                  height={130}
                  className="mt-5 -ms-5"
                />
              </div>
              <span className="text-xl font-bold mt-5 -ml-12">FixMyRide</span>
            </div>

            <div className="hidden sm:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#services"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <Button size="sm">Get Started</Button>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  if (
                    theme === "dark" ||
                    (theme === "system" && systemTheme === "dark")
                  ) {
                    setTheme("light");
                  } else {
                    setTheme("dark");
                  }
                }}
                variant="outline"
                size="icon"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <button
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t bg-background"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-sm font-medium hover:text-primary"
              >
                Features
              </a>
              <a
                href="#services"
                className="block text-sm font-medium hover:text-primary"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block text-sm font-medium hover:text-primary"
              >
                Reviews
              </a>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Badge className="w-fit" variant="secondary">
                  <Zap className="w-3 text-primary h-3 mr-1" />
                  Get help in minutes
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Mechanics On-Demand,
                <span className="text-primary"> Anytime</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground"
              >
                Request a certified mechanic to your location in seconds. No
                more waiting, no more hassle.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <StoreButtons/>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-8 pt-4"
              >
                <div>
                  <div className="text-3xl font-bold">15k+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">2k+</div>
                  <div className="text-sm text-muted-foreground">
                    Expert Mechanics
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold flex items-center gap-2">4.9 <Star className="text-primary fill-primary animate-pulse"/></div>
                  <div className="text-sm text-muted-foreground">
                    Average Rating
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative md:ms-16 lg:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
              <Card className="relative overflow-hidden border-2">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-background p-8 flex items-center justify-center">
                    <HexagonBackground className="absolute inset-0 opacity-100" />
                    <div className="relative items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute  inset-0 bg-primary/5 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Wrench className="w-48 h-48 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Loved by Thousands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers and experience hassle-free
                vehicle maintenance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-background text-foreground placeholder:text-foreground flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  size="lg"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
