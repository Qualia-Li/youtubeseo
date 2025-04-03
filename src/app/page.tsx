// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcd40b] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-black text-black">
                YouTubeSEO.ai
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                How It Works
              </a>
              <a
                href="#ai-benefits"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                AI Benefits
              </a>
              <a
                href="#testimonials"
                className="text-black hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
              >
                Testimonials
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-white border-4 border-black rounded-none text-black font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all whitespace-nowrap"
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

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl py-10">
            <Badge className="mb-4 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              AI-Powered YouTube SEO
            </Badge>
            <h1 className="text-5xl font-black tracking-tight mb-6 text-black">
              Dominate YouTube SEO with AI-Powered Content Creation
            </h1>
            <p className="text-2xl text-black mb-8 font-medium">
              Discover untapped long-tail keywords, automatically create
              engaging YouTube videos, and optimize for both traditional and AI
              search engines like Google and Perplexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-[#fcd40b] border-4 border-black rounded-none text-black font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
                Boost Your YouTube Presence
              </Button>
              <Button
                variant="outline"
                className="bg-white border-4 border-black rounded-none text-black font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <Avatar className="border-4 border-black h-14 w-14 cursor-pointer rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a5b31eaf1a813535a6ac9fb700802ab.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-black h-14 w-14 cursor-pointer rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/bce8644cb7e2c60a9a4b88a589da651f.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">MR</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-black h-14 w-14 cursor-pointer rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a69cb2a4c807ba6a1525d8410f5d2e8.jpg" className="rounded-none" />
                  <AvatarFallback className="rounded-none">TS</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-8 text-lg text-black font-bold">
                <span className="font-black text-xl">2,500+</span>{" "}
                small business owners trust us
              </div>
            </div>
          </div>
          <div className="absolute -right-10 top-20 hidden md:block">
            <div className="w-[400px] h-[400px] bg-[#fcd40b] border-8 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-12">
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-[#fcd40b] text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-4xl font-black">300%</p>
              <p className="text-black font-bold mt-2">Average View Increase</p>
            </div>
            <div className="text-center bg-white text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-4xl font-black">10x</p>
              <p className="text-black font-bold mt-2">Content Creation Speed</p>
            </div>
            <div className="text-center bg-[#fcd40b] text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-4xl font-black">85%</p>
              <p className="text-black font-bold mt-2">AI Search Visibility</p>
            </div>
            <div className="text-center bg-white text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-4xl font-black">2,500+</p>
              <p className="text-black font-bold mt-2">Happy Creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              Key Features
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6">
              Revolutionize Your YouTube Strategy
            </h2>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium">
              Our AI-powered platform automates the entire YouTube content
              creation process, from keyword research to video production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all bg-[#fcd40b]">
              <div className="h-20 w-20 bg-white rounded-none border-4 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl mr-1">🔍</span>
                <i className="fas fa-search text-3xl text-black"></i>
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">
                Long-tail Keyword Discovery
              </h3>
              <p className="text-xl text-black mb-8 font-medium">
                Uncover thousands of high-potential, low-competition keywords
                that your competitors are missing. Our AI analyzes search
                patterns across YouTube and Google.
              </p>
              <div className="mt-auto">
                <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <Image
                    src="https://public.readdy.ai/ai/img_res/8e79301944065e1b7c3a8fc76c454bac.jpg"
                    alt="Keyword Discovery"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all bg-white">
              <div className="h-20 w-20 bg-[#fcd40b] rounded-none border-4 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl mr-1">🎬</span>
                <i className="fas fa-film text-3xl text-black"></i>
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">
                Automated Video Creation
              </h3>
              <p className="text-xl text-black mb-8 font-medium">
                Transform keywords into engaging videos programmatically. Our
                platform generates scripts, visuals, voiceovers, and edits that
                feel authentic and deliver real value.
              </p>
              <div className="mt-auto">
                <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <Image
                    src="https://public.readdy.ai/ai/img_res/5741e0b29842cb830bcec9914af1308a.jpg"
                    alt="Automated Video Creation"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all bg-[#fcd40b]">
              <div className="h-20 w-20 bg-white rounded-none border-4 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl mr-1">🤖</span>
                <i className="fas fa-robot text-3xl text-black"></i>
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">
                AI Search Engine Optimization
              </h3>
              <p className="text-xl text-black mb-8 font-medium">
                Specially optimized for both traditional and AI search engines
                like Google and Perplexity. Get discovered in the new era of
                search with our proprietary algorithms.
              </p>
              <div className="mt-auto">
                <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <Image
                    src="https://public.readdy.ai/ai/img_res/4c6898a238b6401d031f0738b482adc8.jpg"
                    alt="AI SEO Optimization"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 bg-[#fcd40b]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-black text-white hover:bg-black/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              Process
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6 text-black">
              How It Works
            </h2>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium">
              Our streamlined 5-step process takes you from keyword research to
              optimized videos with minimal effort.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-4 bg-black hidden md:block border-l-4 border-r-4 border-black"></div>

            <div className="space-y-20">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-black text-white rounded-none border-4 border-black flex items-center justify-center font-black text-xl mr-4">
                          1
                        </div>
                        <h3 className="text-3xl font-black text-black">Keyword Analysis</h3>
                      </div>
                      <p className="text-xl text-black font-medium">
                        Our AI scans YouTube, Google, and other platforms to
                        identify high-potential long-tail keywords with low
                        competition but significant search volume.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-8 mt-0 h-16 w-16 rounded-none bg-black border-4 border-black hidden md:flex items-center justify-center z-10">
                      <span className="text-3xl mr-1">🔍</span>
                      <i className="fas fa-search text-2xl text-white"></i>
                    </div>
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/images/landing/keyword_analysis.png"
                        alt="Keyword Analysis"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-black text-white rounded-none border-4 border-black flex items-center justify-center font-black text-xl mr-4">
                          2
                        </div>
                        <h3 className="text-3xl font-black text-black">
                          Content Generation
                        </h3>
                      </div>
                      <p className="text-xl text-black font-medium">
                        Based on the keywords, our AI generates comprehensive
                        scripts and storyboards that deliver genuine value to
                        viewers while optimizing for search algorithms.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="absolute top-0 right-0 -mr-8 mt-0 h-16 w-16 rounded-none bg-black border-4 border-black hidden md:flex items-center justify-center z-10">
                      <span className="text-3xl mr-1">📄</span>
                      <i className="fas fa-file-alt text-2xl text-white"></i>
                    </div>
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/images/landing/content_generation.png"
                        alt="Content Generation"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-black text-white rounded-none border-4 border-black flex items-center justify-center font-black text-xl mr-4">
                          3
                        </div>
                        <h3 className="text-3xl font-black text-black">Video Creation</h3>
                      </div>
                      <p className="text-xl text-black font-medium">
                        Our system automatically creates professional-quality
                        videos with natural-sounding voiceovers, relevant
                        visuals, and engaging animations tailored to your brand.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-8 mt-0 h-16 w-16 rounded-none bg-black border-4 border-black hidden md:flex items-center justify-center z-10">
                      <span className="text-3xl mr-1">🎥</span>
                      <i className="fas fa-video text-2xl text-white"></i>
                    </div>
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/images/landing/video_creation.png"
                        alt="Video Creation"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-black text-white rounded-none border-4 border-black flex items-center justify-center font-black text-xl mr-4">
                          4
                        </div>
                        <h3 className="text-3xl font-black text-black">SEO Optimization</h3>
                      </div>
                      <p className="text-xl text-black font-medium">
                        We optimize titles, descriptions, tags, and metadata for
                        both traditional and AI search engines, ensuring maximum
                        discoverability across platforms.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="absolute top-0 right-0 -mr-8 mt-0 h-16 w-16 rounded-none bg-black border-4 border-black hidden md:flex items-center justify-center z-10">
                      <span className="text-3xl mr-1">📈</span>
                      <i className="fas fa-chart-line text-2xl text-white"></i>
                    </div>
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/images/landing/seo_optimization.png"
                        alt="SEO Optimization"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 bg-black text-white rounded-none border-4 border-black flex items-center justify-center font-black text-xl mr-4">
                          5
                        </div>
                        <h3 className="text-3xl font-black text-black">
                          Performance Tracking
                        </h3>
                      </div>
                      <p className="text-xl text-black font-medium">
                        Monitor your videos' performance with detailed
                        analytics, including AI search engine rankings, viewer
                        engagement metrics, and content optimization
                        suggestions.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-8 mt-0 h-16 w-16 rounded-none bg-black border-4 border-black hidden md:flex items-center justify-center z-10">
                      <span className="text-3xl mr-1">📊</span>
                      <i className="fas fa-chart-bar text-2xl text-white"></i>
                    </div>
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/images/landing/performance_tracking.png"
                        alt="Performance Tracking"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Engine Benefits */}
      <section id="ai-benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              AI Advantage
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6 text-black">
              Optimized for the Future of Search
            </h2>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium">
              Our platform is specifically designed to help your content excel
              in both traditional and AI-powered search engines.
            </p>
          </div>

          <Tabs defaultValue="google" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10 border-4 border-black rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <TabsTrigger
                value="google"
                className="text-xl py-4 rounded-none data-[state=active]:bg-[#fcd40b] data-[state=active]:text-black font-bold cursor-pointer whitespace-nowrap border-r-4 border-black data-[state=active]:shadow-none"
              >
                <i className="fab fa-google mr-2"></i> Google AI
              </TabsTrigger>
              <TabsTrigger
                value="perplexity"
                className="text-xl py-4 rounded-none data-[state=active]:bg-[#fcd40b] data-[state=active]:text-black font-bold cursor-pointer whitespace-nowrap data-[state=active]:shadow-none"
              >
                <i className="fas fa-brain mr-2"></i> Perplexity AI
              </TabsTrigger>
            </TabsList>
            <TabsContent value="google" className="mt-0">
              <div className="bg-white rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 border-r-4 border-black">
                    <h3 className="text-3xl font-black mb-8 text-black">
                      Google AI Search Benefits
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Enhanced Visibility
                          </span>{" "}
                          in AI-generated search results and video carousels
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Content Structured
                          </span>{" "}
                          specifically for Google&apos;s AI understanding algorithms
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Semantic Optimization
                          </span>{" "}
                          that aligns with Google&apos;s knowledge graph
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Featured Snippet Targeting
                          </span>{" "}
                          for maximum visibility in AI-powered results
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <div className="bg-[#fcd40b] p-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center mb-4">
                          <div className="h-16 w-16 rounded-none overflow-hidden mr-4 border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <Image
                              src="https://public.readdy.ai/ai/img_res/54e6d19a38bb8341f0828c331db8ebdb.jpg"
                              alt="Sarah Johnson"
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-black text-xl">Sarah Johnson</p>
                            <p className="text-lg font-bold">
                              Marketing Director
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-black font-medium">
                          &quot;Increased my channel views by 300% in 3 months! The
                          long-tail keyword discovery tool found niches I never would
                          have considered, and the automated video creation saved me
                          countless hours of work.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white p-8 flex items-center justify-center">
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="https://public.readdy.ai/ai/img_res/e6fb0927821739f5adae9c38ea0c95f6.jpg"
                        alt="Google AI Search Results"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="perplexity" className="mt-0">
              <div className="bg-white rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 border-r-4 border-black">
                    <h3 className="text-3xl font-black mb-8 text-black">
                      Perplexity AI Advantages
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Direct Citations
                          </span>{" "}
                          in Perplexity&apos;s AI-generated answers and summaries
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Content Structured
                          </span>{" "}
                          for optimal extraction by conversational AI systems
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Question-Answer Format
                          </span>{" "}
                          that aligns perfectly with Perplexity&apos;s search
                          patterns
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <i className="fas fa-check text-black"></i>
                        </div>
                        <p className="text-xl text-black font-medium">
                          <span className="font-black">
                            Authority Signals
                          </span>{" "}
                          that increase likelihood of being referenced in AI
                          responses
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <div className="bg-[#fcd40b] p-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center mb-4">
                          <div className="h-16 w-16 rounded-none overflow-hidden mr-4 border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <Image
                              src="https://public.readdy.ai/ai/img_res/9ba43cc8d05141f0005fc7a201fb85cd.jpg"
                              alt="Michael Chen"
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-black text-xl">Michael Chen</p>
                            <p className="text-lg font-bold">
                              Tech Educator
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-black font-medium">
                          &quot;Finally cracked the YouTube algorithm thanks to their
                          keyword strategy! My videos now appear in both Google and
                          Perplexity AI search results, bringing in viewers I never
                          had access to before.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white p-8 flex items-center justify-center">
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="https://public.readdy.ai/ai/img_res/27f64543697097c6a59b99f98a2aeec5.jpg"
                        alt="Perplexity AI References"
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              Success Stories
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-2xl text-white max-w-3xl mx-auto font-medium">
              Join thousands of small business owners who have transformed their
              YouTube presence with our AI-powered platform.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="bg-[#fcd40b] text-black p-8 rounded-none border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-20 w-20 mr-4 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/2826586122a831758e7086ffb63191ae.jpg" className="rounded-none" />
                      <AvatarFallback className="rounded-none">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-black text-2xl">Jessica Davis</h4>
                      <p className="text-xl font-bold">Travel Vlogger</p>
                    </div>
                  </div>
                  <div className="mb-6 flex">
                    <i className="fas fa-star text-2xl"></i>
                    <i className="fas fa-star text-2xl"></i>
                    <i className="fas fa-star text-2xl"></i>
                    <i className="fas fa-star text-2xl"></i>
                    <i className="fas fa-star text-2xl"></i>
                  </div>
                  <p className="text-xl text-black flex-grow font-medium">
                    "Increased my channel views by 300% in 3 months! The
                    long-tail keyword discovery tool found niches I never would
                    have considered, and the automated video creation saved me
                    countless hours of work."
                  </p>
                  <div className="mt-8 pt-6 border-t-4 border-black">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-3xl">+300%</p>
                        <p className="text-black text-lg font-bold">
                          Channel Growth
                        </p>
                      </div>
                      <div>
                        <p className="font-black text-3xl">15K</p>
                        <p className="text-black text-lg font-bold">
                          New Subscribers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="bg-white text-black p-8 rounded-none border-4 border-[#fcd40b] shadow-[8px_8px_0px_0px_rgba(252,212,11,0.5)] h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-20 w-20 mr-4 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/e1a50c85087b0c997e5fb8a44a612ed7.jpg" className="rounded-none" />
                      <AvatarFallback className="rounded-none">RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-black text-2xl">Robert Kim</h4>
                      <p className="text-xl font-bold">Tech Reviewer</p>
                    </div>
                  </div>
                  <div className="mb-6 flex">
                    <i className="fas fa-star text-2xl text-[#fcd40b]"></i>
                    <i className="fas fa-star text-2xl text-[#fcd40b]"></i>
                    <i className="fas fa-star text-2xl text-[#fcd40b]"></i>
                    <i className="fas fa-star text-2xl text-[#fcd40b]"></i>
                    <i className="fas fa-star text-2xl text-[#fcd40b]"></i>
                  </div>
                  <p className="text-xl text-black flex-grow font-medium">
                    "Finally cracked the YouTube algorithm thanks to their
                    keyword strategy! My videos now appear in both Google and
                    Perplexity AI search results, bringing in viewers I never
                    had access to before."
                  </p>
                  <div className="mt-8 pt-6 border-t-4 border-black">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-3xl">+215%</p>
                        <p className="text-black text-lg font-bold">
                          Search Traffic
                        </p>
                      </div>
                      <div>
                        <p className="font-black text-3xl">8.5x</p>
                        <p className="text-black text-lg font-bold">
                          Revenue Increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-10">
              <CarouselPrevious className="static transform-none mx-4 bg-white border-4 border-black rounded-none text-black font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap" />
              <CarouselNext className="static transform-none mx-4 bg-[#fcd40b] border-4 border-black rounded-none text-black font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap" />
            </div>
          </Carousel>

          <div className="mt-20 text-center">
            <p className="text-2xl text-white mb-10 font-bold">
              Trusted by small business owners from leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-10 items-center">
              <div className="flex items-center text-[#fcd40b] hover:text-white transition-colors cursor-pointer border-4 border-[#fcd40b] px-6 py-4 shadow-[4px_4px_0px_0px_rgba(252,212,11,0.5)]">
                <i className="fab fa-youtube text-4xl mr-3"></i>
                <span className="text-2xl font-black">CreatorStudio</span>
              </div>
              <div className="flex items-center text-white hover:text-[#fcd40b] transition-colors cursor-pointer border-4 border-white px-6 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                <i className="fas fa-graduation-cap text-4xl mr-3"></i>
                <span className="text-2xl font-black">EduTech</span>
              </div>
              <div className="flex items-center text-[#fcd40b] hover:text-white transition-colors cursor-pointer border-4 border-[#fcd40b] px-6 py-4 shadow-[4px_4px_0px_0px_rgba(252,212,11,0.5)]">
                <i className="fas fa-shopping-bag text-4xl mr-3"></i>
                <span className="text-2xl font-black">RetailGiant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              Pricing
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6 text-black">
              Simple, Transparent Pricing
            </h2>
            <p className="text-2xl text-black max-w-3xl mx-auto font-medium">
              Choose the plan that's right for your YouTube channel. All plans
              include our core AI-powered features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-2 text-black">Starter</h3>
                <p className="text-xl text-black font-bold">Perfect for new creators</p>
              </div>
              <div className="mb-8">
                <span className="text-6xl font-black text-black">$49</span>
                <span className="text-2xl font-bold text-black">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">5 videos per month</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">100 keyword searches</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Basic AI optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Standard video quality</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Email support</span>
                </li>
              </ul>
              <Button className="w-full py-6 bg-black text-white border-4 border-black rounded-none font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#fcd40b] flex flex-col relative hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all transform-gpu scale-105 z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-xl font-black border-4 border-black">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-2 text-black">Professional</h3>
                <p className="text-xl text-black font-bold">For growing channels</p>
              </div>
              <div className="mb-8">
                <span className="text-6xl font-black text-black">$129</span>
                <span className="text-2xl font-bold text-black">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">20 videos per month</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Unlimited keyword searches</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Advanced AI optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">HD video quality</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Priority support</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Performance analytics</span>
                </li>
              </ul>
              <Button className="w-full py-6 bg-black text-white border-4 border-black rounded-none font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-2 text-black">Enterprise</h3>
                <p className="text-xl text-black font-bold">For established creators</p>
              </div>
              <div className="mb-8">
                <span className="text-6xl font-black text-black">$349</span>
                <span className="text-2xl font-bold text-black">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">50 videos per month</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Unlimited keyword searches</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Premium AI optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">4K video quality</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-none bg-[#fcd40b] border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <span className="text-xl font-medium text-black">Advanced analytics & API access</span>
                </li>
              </ul>
              <Button className="w-full py-6 bg-black text-white border-4 border-black rounded-none font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#fcd40b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-5xl font-black mb-8 text-black">
                Ready to Transform Your YouTube Strategy?
              </h2>
              <p className="text-2xl text-black mb-10 font-medium">
                Join thousands of small business owners who are leveraging AI to
                dominate YouTube and next-generation search engines.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-black text-white border-4 border-black rounded-none font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-black border-4 border-black rounded-none font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="fas fa-calendar-alt mr-2"></i> Schedule Demo
                </Button>
              </div>
              <div className="mt-10 flex items-center">
                <div className="mr-4 flex">
                  <i className="fas fa-shield-alt text-black text-3xl"></i>
                </div>
                <p className="text-xl text-black font-bold">
                  14-day money-back guarantee, no questions asked
                </p>
              </div>
            </div>
            <div className="md:w-5/12">
              <Card className="bg-white border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-black mb-8 text-black">
                    Get Started Today
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white border-4 border-black text-black placeholder:text-gray-500 py-6 rounded-none text-xl font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="bg-white border-4 border-black text-black placeholder:text-gray-500 py-6 rounded-none text-xl font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="YouTube Channel URL (optional)"
                        className="bg-white border-4 border-black text-black placeholder:text-gray-500 py-6 rounded-none text-xl font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                    <Button className="w-full bg-black text-white border-4 border-black rounded-none font-bold text-xl py-6 mt-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
                      Start Your Free Trial
                    </Button>
                  </div>
                  <div className="mt-6 text-center text-lg font-medium text-black">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="font-bold border-b-4 border-[#fcd40b] hover:bg-[#fcd40b] cursor-pointer"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-bold border-b-4 border-[#fcd40b] hover:bg-[#fcd40b] cursor-pointer"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#fcd40b] text-black hover:bg-[#fcd40b]/80 font-bold border-2 border-black text-lg px-4 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
              FAQ
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-6 text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our YouTube SEO platform.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-xl font-semibold">
                  &quot;How does the automated video creation work?&quot;
                </h3>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </div>
              <div className="mt-4 text-gray-600">
                Our AI analyzes your target keywords and generates a
                comprehensive script that delivers value to viewers. It then
                automatically creates visuals, adds voiceovers using
                natural-sounding AI voices, and edits everything together into a
                professional video optimized for YouTube and AI search engines.
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-xl font-semibold">
                  What makes your keyword research different?
                </h3>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </div>
              <div className="mt-4 text-gray-600">
                Our AI doesn&apos;t just find popular keywords—it identifies valuable
                long-tail keywords with high intent but low competition. We also
                analyze which keywords are most likely to be featured in AI
                search results from Google and Perplexity, giving you an edge in
                the evolving search landscape.
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-xl font-semibold">
                  How do you optimize for AI search engines?
                </h3>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </div>
              <div className="mt-4 text-gray-600">
                We structure your content to be easily understood and referenced
                by AI systems. This includes creating clear semantic
                relationships, using question-answer formats that match AI query
                patterns, and embedding signals that increase the likelihood of
                your content being cited in AI-generated responses.
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-xl font-semibold">
                  Can I customize the videos to match my brand?
                </h3>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </div>
              <div className="mt-4 text-gray-600">
                Absolutely! You can customize colors, fonts, intro/outro
                sequences, and even the AI voice to match your brand identity.
                Our Professional and Enterprise plans offer more extensive
                customization options, including custom templates and brand
                kits.
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-xl font-semibold">
                  &quot;How long does it take to create a video?&quot;
                </h3>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </div>
              <div className="mt-4 text-gray-600">
                &quot;Most videos are ready within 2-4 hours after you approve the
                keyword and topic. For more complex videos or those requiring
                extensive customization, it may take up to 24 hours. Our
                Enterprise plan includes priority processing for faster
                turnaround times.&quot;
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="text-3xl font-black text-[#fcd40b] mb-8">
                YouTubeSEO.ai
              </div>
              <p className="text-xl text-white mb-8 font-medium">
                AI-powered YouTube SEO and content creation platform optimized
                for both traditional and AI search engines.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="h-12 w-12 bg-[#fcd40b] text-black rounded-none border-2 border-[#fcd40b] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(252,212,11,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="h-12 w-12 bg-[#fcd40b] text-black rounded-none border-2 border-[#fcd40b] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(252,212,11,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="h-12 w-12 bg-[#fcd40b] text-black rounded-none border-2 border-[#fcd40b] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(252,212,11,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-2xl mb-8 text-white">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-2xl mb-8 text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-medium text-white hover:text-[#fcd40b] hover:underline transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-2xl mb-8 text-white">Subscribe</h3>
              <p className="text-xl text-white mb-6 font-medium">
                Get the latest news and articles to your inbox every month.
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="bg-white border-4 border-black text-black placeholder:text-gray-500 py-6 rounded-none text-xl font-medium border-r-0"
                />
                <Button className="bg-[#fcd40b] border-4 border-black text-black font-black text-xl rounded-none px-6 whitespace-nowrap hover:bg-[#fcd40b]/80 cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t-4 border-[#fcd40b] flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl text-white mb-6 md:mb-0 font-bold">
              © 2024 YouTubeSEO.ai. All rights reserved.
            </div>
            <div className="flex space-x-12">
              <a
                href="#"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
