import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call since there is no backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <main className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Let's Connect
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a question, a story to share, or interested in a collaboration? I'd love to hear from you. Fill out the form or reach out directly via email.
            </p>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Email Me At</p>
                  <a href="mailto:jadarlee932@icloud.com" className="text-lg font-serif font-medium hover:text-primary transition-colors">
                    jadarlee932@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl shadow-black/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-foreground">Name</label>
                  <Input 
                    {...register("name")} 
                    placeholder="Your name" 
                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-foreground">Email</label>
                  <Input 
                    {...register("email")} 
                    placeholder="your.email@example.com" 
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-foreground">Subject</label>
                <Input 
                  {...register("subject")} 
                  placeholder="What is this regarding?" 
                  className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-foreground">Message</label>
                <Textarea 
                  {...register("message")} 
                  placeholder="Hello Jada, I'd like to talk about..." 
                  className={errors.message ? "border-destructive focus-visible:ring-destructive min-h-[160px]" : "min-h-[160px]"}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
