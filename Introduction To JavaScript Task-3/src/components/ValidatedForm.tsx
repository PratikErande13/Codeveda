import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ValidatedForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        toast({
          title: "Success!",
          description: "Your form has been submitted successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold text-foreground">
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-smooth",
              "bg-background focus:outline-none",
              errors.name && touched.name
                ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            )}
            placeholder="John Doe"
          />
          {touched.name && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {errors.name ? (
                <AlertCircle className="w-5 h-5 text-destructive" />
              ) : (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
          )}
        </div>
        {errors.name && touched.name && (
          <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-foreground">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-smooth",
              "bg-background focus:outline-none",
              errors.email && touched.email
                ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            )}
            placeholder="john@example.com"
          />
          {touched.email && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {errors.email ? (
                <AlertCircle className="w-5 h-5 text-destructive" />
              ) : (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
          )}
        </div>
        {errors.email && touched.email && (
          <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-smooth resize-none",
              "bg-background focus:outline-none",
              errors.message && touched.message
                ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            )}
            placeholder="Your message here..."
          />
          {touched.message && (
            <div className="absolute right-3 top-3">
              {errors.message ? (
                <AlertCircle className="w-5 h-5 text-destructive" />
              ) : (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
          )}
        </div>
        {errors.message && touched.message && (
          <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 px-6 rounded-xl font-semibold transition-smooth",
          "gradient-primary text-primary-foreground shadow-glow",
          "hover:opacity-90 active:scale-[0.98]",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Submitting..." : "Submit Form"}
      </button>
    </form>
  );
};
