import { useState } from "react";
import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { Mail, Send, MapPin, Phone, Github, Linkedin, } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/suhaib36", username: "suhaib36" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/suhaib-ishrat-521a30244", username: "Suhaib Ishrat" },
  
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 📬",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PixelFrame title="CONTACT" icon={<Mail size={20} />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground">
            Ring the doorbell! I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="animate-fade-in-up animation-delay-100">
            <PixelCard hover={false}>
              <h2 className="font-pixel text-xs text-primary mb-6">SEND A MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-retro text-lg text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted border-2 border-border p-3 font-retro text-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div>
                  <label className="block font-retro text-lg text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted border-2 border-border p-3 font-retro text-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block font-retro text-lg text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-muted border-2 border-border p-3 font-retro text-lg text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-pixel text-xs hover:bg-primary/90 transition-all hover:scale-[1.02] pixel-shadow"
                >
                  <Send size={16} />
                  SEND MESSAGE
                </button>
              </form>
            </PixelCard>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="animate-fade-in-up animation-delay-200">
              <PixelCard>
                <h2 className="font-pixel text-xs text-primary mb-6">FIND ME HERE</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-retro text-lg text-foreground">Location</p>
                      <p className="font-retro text-muted-foreground">Greater Noida, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-retro text-lg text-foreground">Email</p>
                      <p className="font-retro text-muted-foreground">suhaib.ishrat36@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                      <Phone className="text-secondary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-retro text-lg text-foreground">Phone</p>
                      <p className="font-retro text-muted-foreground">+91 8265812632</p>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animation-delay-300">
              <PixelCard>
                <h2 className="font-pixel text-xs text-primary mb-6">SOCIAL LINKS</h2>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-4 p-3 bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <social.icon
                        size={24}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                      <div>
                        <p className="font-retro text-lg text-foreground">{social.label}</p>
                        <p className="font-retro text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </PixelCard>
            </div>

            {/* Availability Status */}
            <div className="animate-fade-in-up animation-delay-400">
              <PixelCard className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-pixel text-xs text-foreground">OPEN FOR WORK</span>
                </div>
                <p className="font-retro text-muted-foreground">
                  Currently accepting freelance and full-time opportunities!
                </p>
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </PixelFrame>
  );
};

export default Contact;
