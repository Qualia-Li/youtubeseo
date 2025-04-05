import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AboutPage: React.FC = () => {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-white border-4 border-black rounded-none text-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 mb-20">
          <div className="text-center">
            <Badge className="mb-6 bg-black text-white hover:bg-black/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              About Us
            </Badge>
            <h1 className="text-5xl font-black tracking-tight mb-6 text-black">
              We're Building the Future of AI-Driven Video Marketing
            </h1>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium mb-12">
              YouTubeSEO.ai helps businesses succeed in the new era of AI search by optimizing video content for both traditional and AI search engines.
            </p>
            
            <div className="flex justify-center">
              <div className="relative h-80 w-80 border-8 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image
                  src="https://public.readdy.ai/ai/img_res/754b8f7dfa8c99e9ca63c79be36fd5ca.jpg"
                  alt="Our mission"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Our Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-xl text-black font-medium mb-6">
                YouTubeSEO.ai was founded in 2023 by a team of AI researchers, digital marketers, and YouTube content creators who recognized a massive shift happening in search technology.
              </p>
              
              <p className="text-xl text-black font-medium mb-6">
                With the rise of AI-powered search engines like Google Bard and Perplexity, we saw that businesses needed new strategies to ensure their content remained visible and valuable in this changing landscape.
              </p>
              
              <p className="text-xl text-black font-medium">
                What started as an internal tool to optimize our own YouTube content quickly became a comprehensive platform that helps thousands of businesses navigate the complexities of AI search optimization.
              </p>
            </div>
            
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src="https://public.readdy.ai/ai/img_res/754b8f7dfa8c99e9ca63c79be36fd5ca.jpg"
                alt="Company founding"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8 text-black text-center">
            Our Mission
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          
          <p className="text-2xl text-black font-bold text-center max-w-3xl mx-auto">
            "To democratize access to cutting-edge AI technology, empowering small businesses to compete effectively in the evolving digital landscape through optimized video content."
          </p>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex justify-center mb-6">
                <Avatar className="h-32 w-32 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a5b31eaf1a813535a6ac9fb700802ab.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">JD</AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-black text-black text-center mb-2">
                Alex Chen
              </h3>
              <p className="text-lg font-bold text-[#fcd40b] text-center mb-4 bg-black px-3 py-1 inline-block mx-auto">
                Co-Founder & CEO
              </p>
              
              <p className="text-lg text-black font-medium text-center">
                Former Google AI researcher with 10+ years of experience in search algorithms and machine learning.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex justify-center mb-6">
                <Avatar className="h-32 w-32 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/bce8644cb7e2c60a9a4b88a589da651f.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">MR</AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-black text-black text-center mb-2">
                Sophia Rodriguez
              </h3>
              <p className="text-lg font-bold text-[#fcd40b] text-center mb-4 bg-black px-3 py-1 inline-block mx-auto">
                Co-Founder & CTO
              </p>
              
              <p className="text-lg text-black font-medium text-center">
                AI engineer specializing in natural language processing and computer vision technologies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex justify-center mb-6">
                <Avatar className="h-32 w-32 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a69cb2a4c807ba6a1525d8410f5d2e8.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">TS</AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-black text-black text-center mb-2">
                Marcus Johnson
              </h3>
              <p className="text-lg font-bold text-[#fcd40b] text-center mb-4 bg-black px-3 py-1 inline-block mx-auto">
                Head of Marketing
              </p>
              
              <p className="text-lg text-black font-medium text-center">
                Digital marketing veteran with expertise in YouTube SEO and content strategy for major brands.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Value 1 */}
            <div className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-white rounded-none border-4 border-black flex items-center justify-center mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Innovation
                </h3>
              </div>
              
              <p className="text-lg text-black font-medium">
                We continuously push the boundaries of what's possible with AI technology, staying ahead of industry trends to deliver cutting-edge solutions.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Accessibility
                </h3>
              </div>
              
              <p className="text-lg text-black font-medium">
                We believe advanced AI tools should be accessible to businesses of all sizes, not just large corporations with massive resources.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Results-Driven
                </h3>
              </div>
              
              <p className="text-lg text-black font-medium">
                We focus on delivering measurable improvements in visibility, traffic, and engagement for our clients rather than vanity metrics.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-white rounded-none border-4 border-black flex items-center justify-center mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Adaptability
                </h3>
              </div>
              
              <p className="text-lg text-black font-medium">
                We embrace change and quickly adapt our strategies and technologies to keep pace with the rapidly evolving search and AI landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Investors & Partners */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Investors & Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <div className="text-3xl font-black">TechFund VC</div>
            </div>
            
            <div className="bg-[#fcd40b] p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <div className="text-3xl font-black">AI Alliance</div>
            </div>
            
            <div className="bg-white p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <div className="text-3xl font-black">Creator Hub</div>
            </div>
            
            <div className="bg-[#fcd40b] p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <div className="text-3xl font-black">SearchX Lab</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white border-4 border-[#fcd40b] rounded-none shadow-[8px_8px_0px_0px_rgba(252,212,11,0.3)] p-8">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-black tracking-tight mb-6 text-white">
                Get in Touch
              </h2>
              
              <p className="text-xl text-white font-medium mb-6">
                Have questions about our company or services? We'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <p className="text-xl font-bold">
                  <span className="text-[#fcd40b]">Email:</span> hello@youtubeseo.ai
                </p>
                <p className="text-xl font-bold">
                  <span className="text-[#fcd40b]">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-xl font-bold">
                  <span className="text-[#fcd40b]">Address:</span> 123 AI Boulevard, San Francisco, CA 94105, USA
                </p>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <Link href="/#">
                <Button className="w-full bg-[#fcd40b] border-4 border-[#fcd40b] rounded-none text-black font-bold text-xl py-6 mt-4 shadow-[8px_8px_0px_0px_rgba(252,212,11,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-20">
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

export default AboutPage; 