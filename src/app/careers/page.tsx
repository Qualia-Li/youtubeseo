import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/Footer";

const CareersPage: React.FC = () => {
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
              Careers
            </Badge>
            <h1 className="text-5xl font-black tracking-tight mb-6 text-black">
              Join Our Team of AI Innovators
            </h1>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium mb-12">
              Help us revolutionize how businesses approach video SEO in the age of AI. We're looking for passionate people who want to make an impact.
            </p>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
                  <span className="text-4xl mb-4">🚀</span>
                  <p className="text-xl font-bold">Fast-Growing Startup</p>
                </div>
                <div className="bg-white p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
                  <span className="text-4xl mb-4">🧠</span>
                  <p className="text-xl font-bold">Cutting-Edge AI Tech</p>
                </div>
                <div className="bg-white p-6 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
                  <span className="text-4xl mb-4">💪</span>
                  <p className="text-xl font-bold">Remote-First Culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Why Join YouTubeSEO.ai?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src="https://public.readdy.ai/ai/img_res/cf73d0ee2cd5d5daaf9b0dfbb0a3900b.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-[#fcd40b] rounded-none border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Meaningful Work</h3>
                  <p className="text-lg text-black font-medium">
                    Build technology that helps thousands of small businesses reach new audiences and thrive in the digital economy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-[#fcd40b] rounded-none border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Cutting-Edge Tech</h3>
                  <p className="text-lg text-black font-medium">
                    Work with the latest AI models, NLP techniques, and video generation technologies in a fast-moving field.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-[#fcd40b] rounded-none border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Growth Opportunities</h3>
                  <p className="text-lg text-black font-medium">
                    As we scale, you'll have opportunities to take on new challenges and grow your career in multiple directions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-[#fcd40b] rounded-none border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Remote-First</h3>
                  <p className="text-lg text-black font-medium">
                    Work from anywhere with our globally distributed team. We value results, not hours spent in an office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Benefits & Perks
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Competitive Salary</h3>
              <p className="text-lg text-black font-medium">
                We offer top-of-market compensation with equity options to share in our success.
              </p>
            </Card>
            
            <Card className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-white rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Health Benefits</h3>
              <p className="text-lg text-black font-medium">
                Comprehensive health, dental, and vision insurance for you and your dependents.
              </p>
            </Card>
            
            <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Wellness Program</h3>
              <p className="text-lg text-black font-medium">
                Monthly wellness stipend, mental health resources, and flexible time off.
              </p>
            </Card>
            
            <Card className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-white rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Learning Budget</h3>
              <p className="text-lg text-black font-medium">
                Annual budget for courses, books, conferences, and other learning opportunities.
              </p>
            </Card>
            
            <Card className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Home Office Setup</h3>
              <p className="text-lg text-black font-medium">
                Stipend to create your ideal workspace, including the latest tech equipment.
              </p>
            </Card>
            
            <Card className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all p-6">
              <div className="h-16 w-16 bg-white rounded-none border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">Team Retreats</h3>
              <p className="text-lg text-black font-medium">
                Regular in-person gatherings to connect, collaborate, and celebrate our achievements.
              </p>
            </Card>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-6 text-black border-b-4 border-[#fcd40b] pb-4 inline-block">
            Open Positions
          </h2>
          
          <div className="space-y-8 mt-12">
            {/* Position 1 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h3 className="text-2xl font-black text-black">Senior AI Engineer</h3>
                <Badge className="bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4 md:mt-0 inline-flex">
                  Remote
                </Badge>
              </div>
              
              <p className="text-lg text-black font-medium mb-6">
                We're looking for an experienced AI engineer to help us advance our video generation and SEO optimization algorithms.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Requirements:</h4>
                <ul className="list-disc pl-8 space-y-2 font-medium text-lg">
                  <li>5+ years of experience in ML/AI engineering</li>
                  <li>Expertise in NLP, computer vision, and generative AI</li>
                  <li>Experience with video processing and generation</li>
                  <li>Strong Python skills and familiarity with ML frameworks</li>
                </ul>
              </div>
              
              <Button className="bg-black border-4 border-black rounded-none text-white font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap">
                Apply Now
              </Button>
            </div>
            
            {/* Position 2 */}
            <div className="bg-[#fcd40b] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h3 className="text-2xl font-black text-black">Product Manager</h3>
                <Badge className="bg-black text-white hover:bg-black/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4 md:mt-0 inline-flex">
                  Remote
                </Badge>
              </div>
              
              <p className="text-lg text-black font-medium mb-6">
                Join our product team to shape the future of our platform and help businesses succeed with AI-powered video marketing.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Requirements:</h4>
                <ul className="list-disc pl-8 space-y-2 font-medium text-lg">
                  <li>3+ years of product management experience</li>
                  <li>Background in AI/ML products or digital marketing tools</li>
                  <li>Strong analytical and problem-solving skills</li>
                  <li>Excellent communication and stakeholder management</li>
                </ul>
              </div>
              
              <Button className="bg-black border-4 border-black rounded-none text-white font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap">
                Apply Now
              </Button>
            </div>
            
            {/* Position 3 */}
            <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h3 className="text-2xl font-black text-black">Full-Stack Engineer</h3>
                <Badge className="bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4 md:mt-0 inline-flex">
                  Remote
                </Badge>
              </div>
              
              <p className="text-lg text-black font-medium mb-6">
                Help build and scale our platform with a focus on delivering a great user experience for our customers.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-black mb-2">Requirements:</h4>
                <ul className="list-disc pl-8 space-y-2 font-medium text-lg">
                  <li>4+ years of full-stack development experience</li>
                  <li>Proficiency in React, Node.js, and modern web technologies</li>
                  <li>Experience with cloud services (AWS/GCP)</li>
                  <li>Understanding of scalable architecture and performance optimization</li>
                </ul>
              </div>
              
              <Button className="bg-black border-4 border-black rounded-none text-white font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap">
                Apply Now
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl text-black font-medium mb-8">
              Don't see a role that matches your skills? We're always looking for talented people!
            </p>
            <Button className="bg-[#fcd40b] border-4 border-black rounded-none text-black font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-[#fcd40b] transition-all cursor-pointer whitespace-nowrap">
              Send General Application
            </Button>
          </div>
        </div>

        {/* Our Hiring Process */}
        <div className="bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-8 text-black text-center">
            Our Hiring Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-20 w-20 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Application Review</h3>
              <p className="text-lg text-black font-medium">
                We review your resume and cover letter
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Initial Interview</h3>
              <p className="text-lg text-black font-medium">
                30-min video call with the hiring manager
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Technical Assessment</h3>
              <p className="text-lg text-black font-medium">
                Role-specific skills evaluation
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl">4️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Final Interview</h3>
              <p className="text-lg text-black font-medium">
                Meet the team and discuss next steps
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white border-4 border-[#fcd40b] rounded-none shadow-[8px_8px_0px_0px_rgba(252,212,11,0.3)] p-8">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight mb-6 text-white">
              Questions About Working at YouTubeSEO.ai?
            </h2>
            
            <p className="text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
              We're here to help! Reach out to our talent team with any questions about our open positions or application process.
            </p>
            
            <Button className="bg-[#fcd40b] border-4 border-[#fcd40b] rounded-none text-black font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(252,212,11,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
              Email Our Talent Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareersPage; 