import { Clock, MapPin, Shield, Star, Wrench, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description:
      "Get help anytime, anywhere. Our mechanics are always ready to assist you.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "GPS Tracking",
    description:
      "Track your mechanic in real-time as they head to your location.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Verified Experts",
    description:
      "All mechanics are certified professionals with verified credentials.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Payment",
    description: "Safe and secure payment options with transparent pricing.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Response",
    description: "Get matched with nearby mechanics in seconds.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Full Service",
    description: "From minor repairs to major fixes, we handle it all.",
  },
];
type Props = {};

const FeaturesSection = (props: Props) => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Why Choose FixMyRide?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of vehicle maintenance with our cutting-edge
            features
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-lg hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
