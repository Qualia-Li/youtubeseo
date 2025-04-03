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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                YouTubeSEO.ai
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#ai-benefits"
                className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer whitespace-nowrap"
              >
                AI Benefits
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer whitespace-nowrap"
              >
                Testimonials
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="!rounded-button whitespace-nowrap"
              >
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/98e0b177911cae33ff608fb9645438ee.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl py-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              AI-Powered YouTube SEO
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Dominate YouTube SEO with AI-Powered Content Creation
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover untapped long-tail keywords, automatically create
              engaging YouTube videos, and optimize for both traditional and AI
              search engines like Google and Perplexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg py-6 px-8 !rounded-button whitespace-nowrap cursor-pointer">
                Boost Your YouTube Presence
              </Button>
              <Button
                variant="outline"
                className="text-lg py-6 px-8 border-indigo-600 text-indigo-600 hover:bg-indigo-50 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a5b31eaf1a813535a6ac9fb700802ab.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/bce8644cb7e2c60a9a4b88a589da651f.jpg" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/5a69cb2a4c807ba6a1525d8410f5d2e8.jpg" />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-4 text-sm text-gray-600">
                <span className="font-medium text-indigo-600">2,500+</span>{" "}
                content creators trust us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">300%</p>
              <p className="text-gray-600 mt-2">Average View Increase</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">10x</p>
              <p className="text-gray-600 mt-2">Content Creation Speed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">85%</p>
              <p className="text-gray-600 mt-2">AI Search Visibility</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">2,500+</p>
              <p className="text-gray-600 mt-2">Happy Creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              Key Features
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Revolutionize Your YouTube Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform automates the entire YouTube content
              creation process, from keyword research to video production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <div className="h-14 w-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-search text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Long-tail Keyword Discovery
              </h3>
              <p className="text-gray-600 mb-6">
                Uncover thousands of high-potential, low-competition keywords
                that your competitors are missing. Our AI analyzes search
                patterns across YouTube and Google.
              </p>
              <div className="mt-auto">
                <Image
                  src="https://public.readdy.ai/ai/img_res/8e79301944065e1b7c3a8fc76c454bac.jpg"
                  alt="Keyword Discovery"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-48 object-cover object-top"
                />
              </div>
            </Card>

            <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-film text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Automated Video Creation
              </h3>
              <p className="text-gray-600 mb-6">
                Transform keywords into engaging videos programmatically. Our
                platform generates scripts, visuals, voiceovers, and edits that
                feel authentic and deliver real value.
              </p>
              <div className="mt-auto">
                <Image
                  src="https://public.readdy.ai/ai/img_res/5741e0b29842cb830bcec9914af1308a.jpg"
                  alt="Automated Video Creation"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-48 object-cover object-top"
                />
              </div>
            </Card>

            <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <div className="h-14 w-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-robot text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                AI Search Engine Optimization
              </h3>
              <p className="text-gray-600 mb-6">
                Specially optimized for both traditional and AI search engines
                like Google and Perplexity. Get discovered in the new era of
                search with our proprietary algorithms.
              </p>
              <div className="mt-auto">
                <Image
                  src="https://public.readdy.ai/ai/img_res/4c6898a238b6401d031f0738b482adc8.jpg"
                  alt="AI SEO Optimization"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-48 object-cover object-top"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              Process
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-step process takes you from keyword research to
              optimized videos with minimal effort.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          1
                        </div>
                        <h3 className="text-2xl font-bold">Keyword Analysis</h3>
                      </div>
                      <p className="text-gray-600">
                        Our AI scans YouTube, Google, and other platforms to
                        identify high-potential long-tail keywords with low
                        competition but significant search volume.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-6 mt-2 h-12 w-12 rounded-full bg-indigo-600 border-4 border-white hidden md:flex items-center justify-center">
                      <i className="fas fa-search text-white"></i>
                    </div>
                    <Image
                      src="https://public.readdy.ai/ai/img_res/806083f75003a1d01881cd80dce0dbdc.jpg"
                      alt="Keyword Analysis"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          2
                        </div>
                        <h3 className="text-2xl font-bold">
                          Content Generation
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Based on the keywords, our AI generates comprehensive
                        scripts and storyboards that deliver genuine value to
                        viewers while optimizing for search algorithms.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="absolute top-0 right-0 -mr-6 mt-2 h-12 w-12 rounded-full bg-indigo-600 border-4 border-white hidden md:flex items-center justify-center">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                    <Image
                      src="https://public.readdy.ai/ai/img_res/3251bddfbeed2086f579092889855dc2.jpg"
                      alt="Content Generation"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          3
                        </div>
                        <h3 className="text-2xl font-bold">Video Creation</h3>
                      </div>
                      <p className="text-gray-600">
                        Our system automatically creates professional-quality
                        videos with natural-sounding voiceovers, relevant
                        visuals, and engaging animations tailored to your brand.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-6 mt-2 h-12 w-12 rounded-full bg-indigo-600 border-4 border-white hidden md:flex items-center justify-center">
                      <i className="fas fa-video text-white"></i>
                    </div>
                    <Image
                      src="https://public.readdy.ai/ai/img_res/7917a7df5057f45ca0d99ec9a40ea470.jpg"
                      alt="Video Creation"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          4
                        </div>
                        <h3 className="text-2xl font-bold">SEO Optimization</h3>
                      </div>
                      <p className="text-gray-600">
                        We optimize titles, descriptions, tags, and metadata for
                        both traditional and AI search engines, ensuring maximum
                        discoverability across platforms.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="absolute top-0 right-0 -mr-6 mt-2 h-12 w-12 rounded-full bg-indigo-600 border-4 border-white hidden md:flex items-center justify-center">
                      <i className="fas fa-chart-line text-white"></i>
                    </div>
                    <Image
                      src="https://public.readdy.ai/ai/img_res/d87b0ed2cc0d4fa9173a49c33b8fc23d.jpg"
                      alt="SEO Optimization"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          5
                        </div>
                        <h3 className="text-2xl font-bold">
                          Performance Tracking
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Monitor your videos' performance with detailed
                        analytics, including AI search engine rankings, viewer
                        engagement metrics, and content optimization
                        suggestions.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute top-0 left-0 -ml-6 mt-2 h-12 w-12 rounded-full bg-indigo-600 border-4 border-white hidden md:flex items-center justify-center">
                      <i className="fas fa-chart-bar text-white"></i>
                    </div>
                    <Image
                      src="https://public.readdy.ai/ai/img_res/bff7d9739a36e0bbe601a9cf256e959d.jpg"
                      alt="Performance Tracking"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Engine Benefits */}
      <section id="ai-benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              AI Advantage
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Optimized for the Future of Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed to help your content excel
              in both traditional and AI-powered search engines.
            </p>
          </div>

          <Tabs defaultValue="google" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="google"
                className="text-lg py-3 !rounded-button cursor-pointer whitespace-nowrap"
              >
                <i className="fab fa-google mr-2"></i> Google AI
              </TabsTrigger>
              <TabsTrigger
                value="perplexity"
                className="text-lg py-3 !rounded-button cursor-pointer whitespace-nowrap"
              >
                <i className="fas fa-brain mr-2"></i> Perplexity AI
              </TabsTrigger>
            </TabsList>
            <TabsContent value="google" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Google AI Search Benefits
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Enhanced Visibility
                          </span>{" "}
                          in AI-generated search results and video carousels
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Content Structured
                          </span>{" "}
                          specifically for Google&apos;s AI understanding algorithms
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Semantic Optimization
                          </span>{" "}
                          that aligns with Google&apos;s knowledge graph
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Featured Snippet Targeting
                          </span>{" "}
                          for maximum visibility in AI-powered results
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <div className="flex items-center mb-2">
                          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src="https://public.readdy.ai/ai/img_res/54e6d19a38bb8341f0828c331db8ebdb.jpg"
                              alt="Sarah Johnson"
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Sarah Johnson</p>
                            <p className="text-sm text-gray-500">
                              Marketing Director
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 italic">
                          &quot;Increased my channel views by 300% in 3 months! The
                          long-tail keyword discovery tool found niches I never would
                          have considered, and the automated video creation saved me
                          countless hours of work.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-indigo-50 p-8 flex items-center justify-center">
                    <Image
                      src="https://public.readdy.ai/ai/img_res/e6fb0927821739f5adae9c38ea0c95f6.jpg"
                      alt="Google AI Search Results"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-md max-w-full"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="perplexity" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Perplexity AI Advantages
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-purple-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Direct Citations
                          </span>{" "}
                          in Perplexity&apos;s AI-generated answers and summaries
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-purple-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Content Structured
                          </span>{" "}
                          for optimal extraction by conversational AI systems
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-purple-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Question-Answer Format
                          </span>{" "}
                          that aligns perfectly with Perplexity&apos;s search
                          patterns
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                          <i className="fas fa-check text-purple-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Authority Signals
                          </span>{" "}
                          that increase likelihood of being referenced in AI
                          responses
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="flex items-center mb-2">
                          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src="https://public.readdy.ai/ai/img_res/9ba43cc8d05141f0005fc7a201fb85cd.jpg"
                              alt="Michael Chen"
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Michael Chen</p>
                            <p className="text-sm text-gray-500">
                              Tech Educator
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 italic">
                          &quot;Finally cracked the YouTube algorithm thanks to their
                          keyword strategy! My videos now appear in both Google and
                          Perplexity AI search results, bringing in viewers I never
                          had access to before.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-purple-50 p-8 flex items-center justify-center">
                    <Image
                      src="https://public.readdy.ai/ai/img_res/27f64543697097c6a59b99f98a2aeec5.jpg"
                      alt="Perplexity AI References"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-md max-w-full"
                    />
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
        className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 cursor-pointer">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Join thousands of content creators who have transformed their
              YouTube presence with our AI-powered platform.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-14 w-14 mr-4 border-2 border-indigo-300">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/2826586122a831758e7086ffb63191ae.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">Jessica Davis</h4>
                      <p className="text-indigo-200">Travel Vlogger</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <p className="italic text-indigo-100 flex-grow">
                    "Increased my channel views by 300% in 3 months! The
                    long-tail keyword discovery tool found niches I never would
                    have considered, and the automated video creation saved me
                    countless hours of work."
                  </p>
                  <div className="mt-6 pt-6 border-t border-indigo-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-2xl">+300%</p>
                        <p className="text-indigo-200 text-sm">
                          Channel Growth
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-2xl">15K</p>
                        <p className="text-indigo-200 text-sm">
                          New Subscribers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-14 w-14 mr-4 border-2 border-indigo-300">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/e1a50c85087b0c997e5fb8a44a612ed7.jpg" />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">Robert Kim</h4>
                      <p className="text-indigo-200">Tech Reviewer</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <p className="italic text-indigo-100 flex-grow">
                    "Finally cracked the YouTube algorithm thanks to their
                    keyword strategy! My videos now appear in both Google and
                    Perplexity AI search results, bringing in viewers I never
                    had access to before."
                  </p>
                  <div className="mt-6 pt-6 border-t border-indigo-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-2xl">+215%</p>
                        <p className="text-indigo-200 text-sm">
                          Search Traffic
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-2xl">8.5x</p>
                        <p className="text-indigo-200 text-sm">
                          Revenue Increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-14 w-14 mr-4 border-2 border-indigo-300">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/2a3657051df129a1c45c9a0d4e778452.jpg" />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">Alicia Patel</h4>
                      <p className="text-indigo-200">Educational Content</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <p className="italic text-indigo-100 flex-grow">
                    "Automated video creation saved me countless hours! As an
                    educator, I can now create comprehensive tutorials for every
                    subtopic in my field. The AI ensures each video delivers
                    real value while optimizing for search."
                  </p>
                  <div className="mt-6 pt-6 border-t border-indigo-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-2xl">10x</p>
                        <p className="text-indigo-200 text-sm">
                          Content Output
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-2xl">+178%</p>
                        <p className="text-indigo-200 text-sm">Watch Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-14 w-14 mr-4 border-2 border-indigo-300">
                      <AvatarImage src="https://public.readdy.ai/ai/img_res/a7da86bbf6663b8fdb51a085565a2a4a.jpg" />
                      <AvatarFallback>DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">David Martinez</h4>
                      <p className="text-indigo-200">Fitness Channel</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <p className="italic text-indigo-100 flex-grow">
                    "The AI optimization for Perplexity was a game-changer. My
                    fitness videos now appear as top recommendations when people
                    ask AI about specific workouts. This new traffic source has
                    transformed my business."
                  </p>
                  <div className="mt-6 pt-6 border-t border-indigo-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-2xl">+250%</p>
                        <p className="text-indigo-200 text-sm">AI Referrals</p>
                      </div>
                      <div>
                        <p className="font-bold text-2xl">12K</p>
                        <p className="text-indigo-200 text-sm">
                          New Subscribers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static transform-none mx-2 !rounded-button whitespace-nowrap cursor-pointer" />
              <CarouselNext className="static transform-none mx-2 !rounded-button whitespace-nowrap cursor-pointer" />
            </div>
          </Carousel>

          <div className="mt-16 text-center">
            <p className="text-lg text-indigo-200 mb-8">
              Trusted by content creators from leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-youtube text-3xl mr-2"></i>
                <span className="text-xl font-semibold">CreatorStudio</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <i className="fas fa-graduation-cap text-3xl mr-2"></i>
                <span className="text-xl font-semibold">EduTech</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <i className="fas fa-shopping-bag text-3xl mr-2"></i>
                <span className="text-xl font-semibold">RetailGiant</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <i className="fas fa-utensils text-3xl mr-2"></i>
                <span className="text-xl font-semibold">FoodNetwork</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <i className="fas fa-dumbbell text-3xl mr-2"></i>
                <span className="text-xl font-semibold">FitLife</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              Pricing
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for your YouTube channel. All plans
              include our core AI-powered features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for new creators</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>5 videos per month</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>100 keyword searches</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Basic AI optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Standard video quality</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full py-6 !rounded-button whitespace-nowrap cursor-pointer">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border-2 border-indigo-600 shadow-lg hover:shadow-xl transition-shadow rounded-2xl flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-600">For growing channels</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$129</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>20 videos per month</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Unlimited keyword searches</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Advanced AI optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>HD video quality</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Performance analytics</span>
                </li>
              </ul>
              <Button className="w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600">For established creators</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$349</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>50 videos per month</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Unlimited keyword searches</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Premium AI optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>4K video quality</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Advanced analytics & API access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Custom branding</span>
                </li>
              </ul>
              <Button className="w-full py-6 !rounded-button whitespace-nowrap cursor-pointer">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your YouTube Strategy?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of content creators who are leveraging AI to
                dominate YouTube and next-generation search engines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-indigo-900 hover:bg-indigo-100 text-lg py-6 px-8 !rounded-button whitespace-nowrap cursor-pointer">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-calendar-alt mr-2"></i> Schedule Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="mr-4 flex">
                  <i className="fas fa-shield-alt text-indigo-300 text-xl"></i>
                </div>
                <p className="text-indigo-200">
                  14-day money-back guarantee, no questions asked
                </p>
              </div>
            </div>
            <div className="md:w-5/12">
              <Card className="bg-white/10 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Get Started Today
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 py-6 !rounded-button"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 py-6 !rounded-button"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="YouTube Channel URL (optional)"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 py-6 !rounded-button"
                      />
                    </div>
                    <Button className="w-full bg-white text-indigo-900 hover:bg-indigo-100 py-6 mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                      Start Your Free Trial
                    </Button>
                  </div>
                  <div className="mt-6 text-center text-sm text-indigo-200">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="underline hover:text-white cursor-pointer"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="underline hover:text-white cursor-pointer"
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
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
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                YouTubeSEO.ai
              </div>
              <p className="text-gray-400 mb-6">
                AI-powered YouTube SEO and content creation platform optimized
                for both traditional and AI search engines.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Get the latest news and articles to your inbox every month.
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 !rounded-button rounded-r-none"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700 !rounded-button rounded-l-none whitespace-nowrap cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © 2025 YouTubeSEO.ai. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
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
