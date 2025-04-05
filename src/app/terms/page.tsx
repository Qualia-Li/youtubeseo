import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const TermsPage: React.FC = () => {
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
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-xl">
            <p className="font-medium">
              Last Updated: April 4, 2024
            </p>
            
            <p className="font-medium">
              Welcome to YouTubeSEO.ai. These Terms of Service ("Terms") govern your access to and use of the YouTubeSEO.ai website and services ("Service"). Please read these Terms carefully before using our Service.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            
            <p className="font-medium">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              2. Description of Service
            </h2>
            
            <p className="font-medium">
              YouTubeSEO.ai provides AI-powered YouTube SEO and content creation tools that help users optimize their video content for both traditional and AI search engines. Our service includes keyword research, content generation, video creation, SEO optimization, and performance tracking.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              3. User Accounts
            </h2>
            
            <p className="font-medium">
              To access certain features of our Service, you may be required to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
            </p>
            
            <p className="font-medium">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use strong passwords (e.g., a combination of uppercase and lowercase letters, numbers, and symbols) with your account.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              4. Subscription and Payment
            </h2>
            
            <p className="font-medium">
              Some aspects of the Service may be provided on a subscription basis. By selecting a subscription plan, you agree to pay the subscription fees indicated for that service. Payments will be charged on a pre-pay basis on the day you sign up and will cover the use of that service for the subscription period.
            </p>
            
            <p className="font-medium">
              Subscription fees are non-refundable except as required by law or as explicitly stated in these Terms. We reserve the right to change subscription fees at any time, but will give you reasonable notice before any fee change takes effect.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              5. Content and Intellectual Property
            </h2>
            
            <p className="font-medium">
              Our Service allows you to create and generate content using our AI tools. You retain all rights to the content you create using our Service. However, by using our Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content solely for the purpose of providing and improving our Service.
            </p>
            
            <p className="font-medium">
              All content provided through our Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of YouTubeSEO.ai or its content suppliers and is protected by international copyright laws.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              6. Prohibited Uses
            </h2>
            
            <p className="font-medium">
              You agree not to use the Service:
            </p>
            
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To create content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or similarly objectionable</li>
              <li>To impersonate or attempt to impersonate YouTubeSEO.ai, a YouTubeSEO.ai employee, another user, or any other person or entity</li>
              <li>To engage in any activity that interferes with or disrupts the Service (or the servers and networks connected to the Service)</li>
              <li>To attempt to bypass any measures of the Service designed to prevent or restrict access to the Service, or any portion of the Service</li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              7. Limitation of Liability
            </h2>
            
            <p className="font-medium">
              In no event shall YouTubeSEO.ai, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              8. Changes to Terms
            </h2>
            
            <p className="font-medium">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              9. Contact Us
            </h2>
            
            <p className="font-medium">
              If you have any questions about these Terms, please contact us at support@youtubeseo.ai.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsPage; 