import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CookiesPage: React.FC = () => {
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
            Cookie Policy
          </h1>
          
          <div className="space-y-6 text-xl">
            <p className="font-medium">
              Last Updated: April 4, 2024
            </p>
            
            <p className="font-medium">
              This Cookie Policy explains how YouTubeSEO.ai ("we", "our", or "us") uses cookies and similar technologies on our website. This policy is designed to help you understand what cookies are, how we use them, and your choices regarding their use.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              1. What Are Cookies?
            </h2>
            
            <p className="font-medium">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              2. How We Use Cookies
            </h2>
            
            <p className="font-medium">
              We use cookies for the following purposes:
            </p>
            
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>
                <span className="font-bold">Essential Cookies:</span> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </li>
              <li>
                <span className="font-bold">Performance Cookies:</span> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the functionality of our website.
              </li>
              <li>
                <span className="font-bold">Functionality Cookies:</span> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.
              </li>
              <li>
                <span className="font-bold">Targeting/Advertising Cookies:</span> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.
              </li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              3. Third-Party Cookies
            </h2>
            
            <p className="font-medium">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These cookies may include:
            </p>
            
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>Google Analytics cookies to help us analyze how users use our site</li>
              <li>Social media cookies from platforms like Facebook, Twitter, and LinkedIn to enable social sharing features</li>
              <li>Advertising cookies from our advertising partners</li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              4. Managing Cookies
            </h2>
            
            <p className="font-medium">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Below are links to instructions on how to manage cookies in common web browsers:
            </p>
            
            <ul className="list-disc pl-8 space-y-2 font-medium">
              <li>
                <Link href="https://support.google.com/chrome/answer/95647" className="text-blue-600 underline hover:text-blue-800">
                  Google Chrome
                </Link>
              </li>
              <li>
                <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 underline hover:text-blue-800">
                  Mozilla Firefox
                </Link>
              </li>
              <li>
                <Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 underline hover:text-blue-800">
                  Safari
                </Link>
              </li>
              <li>
                <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-600 underline hover:text-blue-800">
                  Microsoft Edge
                </Link>
              </li>
            </ul>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              5. Cookie Consent
            </h2>
            
            <p className="font-medium">
              When you first visit our website, you will be shown a cookie banner requesting your consent to set non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              6. Changes to This Cookie Policy
            </h2>
            
            <p className="font-medium">
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
            
            <h2 className="text-3xl font-black text-black border-l-8 border-[#fcd40b] pl-4 mt-8 mb-4">
              7. Contact Us
            </h2>
            
            <p className="font-medium">
              If you have any questions or concerns about our use of cookies, please contact us at:
            </p>
            
            <p className="font-medium mt-4">
              Email: privacy@youtubeseo.ai<br />
              Address: 123 AI Boulevard, San Francisco, CA 94105, USA
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl text-white mb-6 md:mb-0 font-bold">
              © 2024 YouTubeSEO.ai. All rights reserved.
            </div>
            <div className="flex space-x-12">
              <Link
                href="/terms"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Privacy
              </Link>
              <Link
                href="/about-us"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookiesPage; 