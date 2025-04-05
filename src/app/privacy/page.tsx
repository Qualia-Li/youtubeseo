import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-16">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcd40b] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-black text-black">
                YouTubeSEO.ai
              </Link>
            </div>
            <div className="hidden lg:flex space-x-8">
              <Link
                href="/#features"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                How It Works
              </Link>
              <Link
                href="/#ai-benefits"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                AI Benefits
              </Link>
              <Link
                href="/#testimonials"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                Testimonials
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:flex bg-white border-4 border-black rounded-none text-black font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all whitespace-nowrap"
              >
                Log In
              </Button>
              <Button className="bg-black border-4 border-black rounded-none text-white font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-white border-4 border-black rounded-none text-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Button>
        </Link>

        <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
          <h1 className="text-5xl font-black tracking-tight mb-8 text-black border-b-4 border-[#fcd40b] pb-4">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-xl">
            <p className="font-medium">
              Last Updated: April 4, 2024
            </p>
            
            <p className="font-medium">
              This Privacy Policy describes how YouTubeSEO.ai ("we", "our", or "us") collects, uses, and shares your personal information when you use our website and services. Your privacy is important to us, and we are committed to protecting your personal information.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              1. Information We Collect
            </h2>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">Personal Information</h3>
            <p className="font-medium">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>Contact information (such as name, email address, and phone number)</li>
              <li>Account credentials (such as username and password)</li>
              <li>Payment information (such as credit card details and billing address)</li>
              <li>Profile information (such as profile picture and company details)</li>
              <li>User preferences and settings</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-6 mb-3">Usage Information</h3>
            <p className="font-medium">
              We automatically collect certain information about your interaction with our website and services, including:
            </p>
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>Log data (such as IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data)</li>
              <li>Device information (such as device ID, device type, and operating system)</li>
              <li>Usage patterns (such as features used, content viewed, and interactions with our services)</li>
              <li>Performance data and error reports</li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            
            <p className="font-medium">
              We use your personal information for various purposes, including:
            </p>
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>Providing and improving our services</li>
              <li>Processing payments and managing your account</li>
              <li>Communicating with you about our services, updates, and promotional offers</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Analyzing usage patterns and trends to enhance user experience</li>
              <li>Protecting against, identifying, and preventing fraud and other unauthorized or illegal activities</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              3. How We Share Your Information
            </h2>
            
            <p className="font-medium">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li><span className="font-bold">Service Providers:</span> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services</li>
              <li><span className="font-bold">Business Partners:</span> Companies with whom we jointly offer products or services</li>
              <li><span className="font-bold">Legal Authorities:</span> When required by law, to protect our rights, or in response to a legal process</li>
              <li><span className="font-bold">Business Transfers:</span> In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
            </ul>
            
            <p className="font-medium">
              We do not sell your personal information to third parties.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              4. Cookies and Similar Technologies
            </h2>
            
            <p className="font-medium">
              We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our website. These technologies help us provide you with a better experience, improve our service, and personalize content and advertisements.
            </p>
            
            <p className="font-medium">
              You can manage your cookie preferences through your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              5. Data Security
            </h2>
            
            <p className="font-medium">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              6. Your Rights
            </h2>
            
            <p className="font-medium">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw your consent</li>
            </ul>
            
            <p className="font-medium">
              To exercise these rights, please contact us at privacy@youtubeseo.ai.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              7. Children's Privacy
            </h2>
            
            <p className="font-medium">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              8. Changes to This Privacy Policy
            </h2>
            
            <p className="font-medium">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              9. Contact Us
            </h2>
            
            <p className="font-medium">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="font-medium mt-4">
              Email: privacy@youtubeseo.ai<br />
              Address: 123 AI Boulevard, San Francisco, CA 94105, USA
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPage; 