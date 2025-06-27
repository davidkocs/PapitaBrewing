import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-papita-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Contact Us</h2>
            <p className="text-xl papita-yellow max-w-3xl mx-auto">
              Come hang out with us! Our taproom is open and welcoming. 
              Bring your friends, bring your family, bring your appetite for great beer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-display font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt papita-yellow mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold">St. Charles, MO</div>
                  </div>
                </div>

                
                <div className="flex items-center">
                  <i className="fas fa-envelope papita-yellow mr-4 text-xl"></i>
                  <div>
                    <a href="mailto:david.kocs@papitabrewing.com" className="font-semibold hover:underline">david.kocs@papitabrewing.com</a>
                    <div className="papita-yellow">We'd love to hear from you</div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold papita-blue mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</Label>
                    <Input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-papita-blue" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</Label>
                    <Input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-papita-blue" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-papita-blue" 
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</Label>
                  <Textarea 
                    rows={4} 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-papita-blue" 
                    placeholder="Tell us more..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-papita-red hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
