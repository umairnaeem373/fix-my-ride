import React from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations';
import { AlertTriangle, Battery, CircleDot, Disc, Disc2, Droplets, Settings } from 'lucide-react';

type Props = {}

  const services = [
    {
      name: "Emergency Breakdown",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "24/7 roadside assistance",
      color: "bg-red-500/10 group-hover:bg-red-500/20",
    },
    {
      name: "Oil Change",
      icon: <Droplets className="w-6 h-6" />,
      description: "Quick & efficient service",
      color: "bg-blue-500/10 group-hover:bg-blue-500/20",
    },
    {
      name: "Battery Replacement",
      icon: <Battery className="w-6 h-6" />,
      description: "Fast battery diagnosis",
      color: "bg-green-500/10 group-hover:bg-green-500/20",
    },
    {
      name: "Tire Service",
      icon: <Disc2 className="w-6 h-6" />,
      description: "Repair & replacement",
      color: "bg-orange-500/10 group-hover:bg-orange-500/20",
    },
    {
      name: "Engine Diagnostics",
      icon: <Settings className="w-6 h-6" />,
      description: "Advanced scanning tools",
      color: "bg-purple-500/10 group-hover:bg-purple-500/20",
    },
    {
      name: "Brake Repair",
      icon: <Disc className="w-6 h-6" />,
      description: "Complete brake system",
      color: "bg-pink-500/10 group-hover:bg-pink-500/20",
    },
  ];

const ServicesSection = (props: Props) => {
  return (
          <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">
              Services
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Complete Vehicle Care</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we've got you
              covered
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center rounded-lg p-3 ${service.color}`}
                    >
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default ServicesSection