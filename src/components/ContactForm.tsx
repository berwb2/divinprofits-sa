
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Phone, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  goals: string;
}

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    projectType: "",
    budget: "",
    goals: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const projectTypes = [
    "New Website Design",
    "Website Redesign",
    "Sales Funnel",
    "Landing Page",
    "Lead Generation System",
    "E-commerce Store",
    "Other"
  ];

  const budgetRanges = [
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
    "Let's Discuss"
  ];

  // Auto-save draft
  useEffect(() => {
    const draft = localStorage.getItem('contactFormDraft');
    if (draft) {
      setFormData(JSON.parse(draft));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactFormDraft', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = "Please select a project type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    localStorage.removeItem('contactFormDraft');
  };

  if (isSubmitted) {
    return (
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl animate-scale-in">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Thank You for Reaching Out!
          </h3>
          <p className="text-white/80 text-lg mb-6">
            Ethan will contact you within 24 hours to schedule your free strategy session.
          </p>
          <p className="text-white/60 text-sm">
            We'll send you a confirmation email shortly with next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl animate-fade-in">
      {/* Form Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Get Your Free Strategy Session
        </h3>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-full h-2 rounded-full transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                    : 'bg-white/20'
                }`}
              />
              {step < 3 && <div className="w-2" />}
            </div>
          ))}
        </div>

        <p className="text-white/70 text-sm">
          Step {currentStep} of 3 • Takes about 2 minutes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="name" className="text-white font-medium mb-2 block">
                Your Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500/50"
                placeholder="Enter your full name"
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-white font-medium mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500/50"
                placeholder="your@email.com"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-white font-medium mb-2 block">
                Phone Number <span className="text-white/50">(Optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500/50"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        )}

        {/* Step 2: Business Info */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="businessName" className="text-white font-medium mb-2 block">
                Business Name <span className="text-white/50">(Optional)</span>
              </Label>
              <Input
                id="businessName"
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500/50"
                placeholder="Your business name"
              />
            </div>

            <div>
              <Label htmlFor="projectType" className="text-white font-medium mb-2 block">
                Project Type *
              </Label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => updateFormData('projectType', e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-white rounded-md focus:border-blue-500 focus:ring-blue-500/50 focus:outline-none"
                required
              >
                <option value="" className="text-gray-900">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="text-gray-900">
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
            </div>

            <div>
              <Label htmlFor="budget" className="text-white font-medium mb-2 block">
                Budget Range <span className="text-white/50">(Optional)</span>
              </Label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => updateFormData('budget', e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-white rounded-md focus:border-blue-500 focus:ring-blue-500/50 focus:outline-none"
              >
                <option value="" className="text-gray-900">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="text-gray-900">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Project Details */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="goals" className="text-white font-medium mb-2 block">
                Tell us about your goals <span className="text-white/50">(Optional)</span>
              </Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => updateFormData('goals', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500/50 min-h-[120px]"
                placeholder="What are you hoping to achieve? Any specific challenges or goals you'd like to discuss?"
                rows={4}
                maxLength={500}
              />
              <p className="text-white/50 text-sm mt-1">
                {formData.goals.length}/500 characters
              </p>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Previous
            </Button>
          )}
          
          <div className="flex-1" />
          
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Next Step
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Book My Free Session"}
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </form>

      {/* Alternative Contact */}
      <div className="mt-8 pt-6 border-t border-white/20 text-center">
        <p className="text-white/70 text-sm mb-4">Prefer to talk directly?</p>
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 mx-auto"
        >
          <Phone size={16} />
          Call Ethan Now
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
