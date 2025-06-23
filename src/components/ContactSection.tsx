
import React, { useState, useEffect } from "react";
import { Mail, Phone, Calendar, MapPin, ArrowRight, Star, Users, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dp-blue-dark via-dp-blue to-dp-blue-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center opacity-50" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-dp-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-3/4 -right-4 w-96 h-96 bg-dp-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-dp-accent to-dp-orange bg-clip-text text-transparent">
              Grow Your Business?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Let's build systems that drive traffic, capture leads, and close more clients
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
