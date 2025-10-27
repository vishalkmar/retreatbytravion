"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const services = ["Wellness", "Corporate Offsites", "Community Tours", "MICE"];

const RetreatInquiryForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    company: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919540111307";
    const messageLines = [
      `*New Retreat Inquiry*`,
      `-------------------------`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Company:* ${formData.company || "Not provided"}`,
      `*Service Interested In:* ${formData.service}`,
      `-------------------------`,
      `*Message:*`,
      `Hello! I'm interested in planning a ${formData.service} retreat. Please contact me to discuss the details.`,
    ];

    const message = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form & close modal
    setFormData({ name: "", phone: "", email: "", service: "", company: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Plan Your Retreat</h2>
          <p className="text-gray-600 mt-2">Share your details and we'll get back to you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name *"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
          />

          <InputField
            label="Phone No. *"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone number"
            required
          />

          <InputField
            label="Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
          />

          <SelectField
            label="Service *"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            options={services}
            required
          />

          <InputField
            label="Company Name"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your company name (optional)"
          />

          <Button
            type="submit"
            variant="hero"
            className="w-full mt-6"
            disabled={
              !formData.name ||
              !formData.phone ||
              !formData.email ||
              !formData.service
            }
          >
            <Send className="w-4 h-4 mr-2" />
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RetreatInquiryForm;

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required = false }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
      <option value="">Select a service</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
