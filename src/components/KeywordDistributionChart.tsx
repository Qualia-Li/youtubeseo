"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';

// Types for our keywords
type KeywordType = {
  id: number;
  text: string;
  searchVolume: number;
  competition: string;
  type: 'short-tail' | 'mid-tail' | 'long-tail';
  buyIntent: number; // 1-10 scale
  example: string;
};

// Sample keyword data
const keywordData: KeywordType[] = [
  {
    id: 1,
    text: "mattresses",
    searchVolume: 450000,
    competition: "Very High",
    type: "short-tail",
    buyIntent: 3,
    example: "General product category with low purchase intent"
  },
  {
    id: 2,
    text: "memory foam mattress",
    searchVolume: 165000,
    competition: "High",
    type: "short-tail",
    buyIntent: 5,
    example: "More specific but still competitive"
  },
  {
    id: 3,
    text: "best memory foam mattress",
    searchVolume: 74000,
    competition: "High",
    type: "mid-tail",
    buyIntent: 7,
    example: "Higher intent but still competitive"
  },
  {
    id: 4,
    text: "best memory foam mattress for back pain",
    searchVolume: 18000,
    competition: "Medium",
    type: "mid-tail",
    buyIntent: 8,
    example: "Problem-specific with high purchase intent"
  },
  {
    id: 5,
    text: "best cooling memory foam mattress under $1000",
    searchVolume: 5400,
    competition: "Medium-Low",
    type: "long-tail",
    buyIntent: 9,
    example: "Price-conscious buyer with specific needs"
  },
  {
    id: 6,
    text: "best organic memory foam mattress for hot sleepers queen size",
    searchVolume: 1200,
    competition: "Low",
    type: "long-tail",
    buyIntent: 10,
    example: "Very specific needs with extremely high purchase intent"
  },
  {
    id: 7,
    text: "chair",
    searchVolume: 380000,
    competition: "Very High",
    type: "short-tail",
    buyIntent: 2,
    example: "Extremely general term with low intent"
  },
  {
    id: 8,
    text: "ergonomic chair",
    searchVolume: 140000,
    competition: "High",
    type: "short-tail",
    buyIntent: 4,
    example: "More specific but still broad category"
  },
  {
    id: 9,
    text: "ergonomic office chair",
    searchVolume: 60000,
    competition: "High",
    type: "mid-tail",
    buyIntent: 6,
    example: "Higher intent with specific use case"
  },
  {
    id: 10,
    text: "ergonomic chair for back pain",
    searchVolume: 22000,
    competition: "Medium",
    type: "mid-tail",
    buyIntent: 8,
    example: "Problem-specific with high purchase intent"
  },
  {
    id: 11,
    text: "ergonomic chair for tall people under $200",
    searchVolume: 3200,
    competition: "Low",
    type: "long-tail",
    buyIntent: 9,
    example: "Very specific requirements with high purchase intent"
  },
  {
    id: 12,
    text: "best adjustable ergonomic chair for home office under $300 for tall people",
    searchVolume: 890,
    competition: "Very Low",
    type: "long-tail",
    buyIntent: 10,
    example: "Extremely specific with clear purchase intent and budget"
  }
];

// Colors for our chart
const chartColors = {
  shortTail: {
    fill: "#f87171", // red-400
    stroke: "#b91c1c", // red-700
    text: "#7f1d1d", // red-900
  },
  midTail: {
    fill: "#60a5fa", // blue-400
    stroke: "#1d4ed8", // blue-700
    text: "#1e3a8a", // blue-900
  },
  longTail: {
    fill: "#fcd34d", // amber-300
    stroke: "#b45309", // amber-700
    text: "#78350f", // amber-900
  }
};

// Simpler fallback chart that doesn't rely on complex SVG rendering
const StaticKeywordChart = () => {
  // For client-side interactivity
  const [hoveredKeyword, setHoveredKeyword] = useState<KeywordType | null>(null);
  
  return (
    <div className="w-full h-[700px] relative mt-10">
      <div className="absolute -left-16 top-1/2 transform -rotate-90 font-bold text-lg">
        Keyword Total Value
      </div>
      
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 font-bold text-lg">
        Number of Keywords
      </div>
      
      <div className="w-full h-full relative bg-white border-4 border-black">
        
        {/* Main Curve - Volume vs Keywords with better visibility */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none">
            {/* Main curve path */}
            <path 
              d="M0,20 C200,100 300,500 1000,760" 
              fill="none" 
              stroke="black" 
              strokeWidth="6" 
              strokeDasharray="none"
              className="opacity-80"
            />
            
            {/* Fill under the curve */}
            <path 
              d="M0,20 C200,100 300,500 1000,760 L1000,800 L0,800 Z" 
              fill="url(#volumeGradient)" 
              className="opacity-20"
            />
            
            {/* Gradient for fill */}
            <defs>
              <linearGradient id="volumeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="25%" stopColor="#f87171" />
                <stop offset="40%" stopColor="#60a5fa" />
                <stop offset="60%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#fcd34d" />
              </linearGradient>
            </defs>
            
            {/* Human Creator Cost Line */}
            <line 
              x1="0" y1="300" 
              x2="1000" y2="300" 
              stroke="#ef4444" 
              strokeWidth="4" 
              strokeDasharray="15,5"
            />
            <text x="20" y="290" fill="#b91c1c" fontWeight="bold" fontSize="16">
              Human Creator Cost
            </text>
            
            {/* AI Creator Cost Line - lower */}
            <line 
              x1="0" y1="650" 
              x2="1000" y2="650" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeDasharray="15,5"
            />
            <text x="20" y="640" fill="#1d4ed8" fontWeight="bold" fontSize="16">
              AI Creator Cost
            </text>
            
            {/* Profit Zone - highlighted area between curve and human cost for tail */}
            <path 
              d="M0,20 C100,70 180,150 300,300 L300,300 L0,300 Z" 
              fill="#ef4444" 
              className="opacity-30"
            />
            <text x="100" y="200" fill="#b91c1c" fontWeight="bold" fontSize="16">
              Profit Zone for
            </text>
            <text x="100" y="225" fill="#b91c1c" fontWeight="bold" fontSize="16">
              Human Creators
            </text>
            
            {/* Clickable Keyword Points for Short Tail */}
            <circle 
              cx="50" cy="60" r="10" 
              fill="#b91c1c" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[0])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            <circle 
              cx="150" cy="130" r="10" 
              fill="#b91c1c" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[1])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            {/* Clickable Keyword Points for Mid Tail */}
            <circle 
              cx="300" cy="300" r="10" 
              fill="#1d4ed8" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[2])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            <circle 
              cx="450" cy="450" r="10" 
              fill="#1d4ed8" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[3])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            <circle 
              cx="550" cy="550" r="10" 
              fill="#1d4ed8" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[9])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            {/* Clickable Keyword Points for Long Tail */}
            <circle 
              cx="650" cy="600" r="10" 
              fill="#b45309" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[4])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            <circle 
              cx="750" cy="650" r="10" 
              fill="#b45309" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[5])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            <circle 
              cx="850" cy="700" r="10" 
              fill="#b45309" 
              className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
              onMouseEnter={() => setHoveredKeyword(keywordData[11])}
              onMouseLeave={() => setHoveredKeyword(null)}
            />
            
            {/* Keyword Popup on Hover */}
            {hoveredKeyword && (
              <g>
                <rect 
                  x="350" y="100" 
                  width="300" height="150" 
                  fill="white" 
                  stroke="black" 
                  strokeWidth="2"
                  rx="5" ry="5"
                />
                <text x="365" y="130" fontWeight="bold" fontSize="16">
                  "{hoveredKeyword.text}"
                </text>
                <text x="365" y="160" fontSize="14">
                  {hoveredKeyword.searchVolume.toLocaleString()} monthly searches
                </text>
                <text x="365" y="185" fontSize="14">
                  Competition: {hoveredKeyword.competition}
                </text>
                <text x="365" y="210" fontSize="14">
                  Purchase Intent: {hoveredKeyword.buyIntent}/10
                </text>
                <text x="365" y="235" fontSize="12" fill="#4b5563">
                  Click for more details
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
      
      {/* Axes */}
      <div className="absolute left-0 top-0 h-full border-l-4 border-black"></div>
      <div className="absolute left-0 bottom-0 w-full border-b-4 border-black"></div>
      
      {/* Y-Axis marks */}
      <div className="absolute left-[-10px] top-0 font-bold">High</div>
      <div className="absolute left-[-10px] bottom-[-10px] font-bold">Low</div>
      
      {/* X-Axis marks */}
      <div className="absolute left-0 bottom-[-30px] font-bold">Low</div>
      <div className="absolute right-0 bottom-[-30px] font-bold">High</div>
      
      {/* Legend */}
      <div className="absolute top-5 right-5 bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-sm font-bold mb-2">Chart Legend</div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-black mr-2"></div>
          <span className="text-xs">Keyword Total Value</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-red-500 mr-2 border-dashed border-t-2"></div>
          <span className="text-xs">Human Creator Cost</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-blue-500 mr-2 border-dashed border-t-2"></div>
          <span className="text-xs">AI Creator Cost</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-red-700 mr-2 rounded-full"></div>
          <span className="text-xs">Short-tail Keywords</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-blue-700 mr-2 rounded-full"></div>
          <span className="text-xs">Mid-tail Keywords</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-amber-700 mr-2 rounded-full"></div>
          <span className="text-xs">Long-tail Keywords</span>
        </div>
      </div>
    </div>
  );
};

// Interactive Keyword Card
const KeywordInfoCard = ({ hoveredKeyword }: { hoveredKeyword: KeywordType | null }) => {
  if (!hoveredKeyword) {
    return (
      <div className="text-center">
        <h3 className="font-bold text-xl mb-2">Click on Keyword Points for Details</h3>
        <p className="text-base">Hover over the colored dots on the curve to see keyword examples</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold text-lg">Keyword:</h3>
        <p className="text-xl font-black">{hoveredKeyword.text}</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">Search Stats:</h3>
        <p>Monthly Searches: <span className="font-bold">{hoveredKeyword.searchVolume.toLocaleString()}</span></p>
        <p>Competition: <span className="font-bold">{hoveredKeyword.competition}</span></p>
        <p>Purchase Intent: <span className="font-bold">{hoveredKeyword.buyIntent}/10</span></p>
      </div>
      <div>
        <h3 className="font-bold text-lg">Why It Matters:</h3>
        <p>{hoveredKeyword.example}</p>
      </div>
    </div>
  );
};

const KeywordDistributionChart = () => {
  // For demo purposes we'll show a static point's data
  const [activeKeyword, setActiveKeyword] = useState<KeywordType | null>(null);
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white my-10">
        <div className="mb-6">
          <h2 className="text-4xl font-black text-center mb-2">Keyword Distribution</h2>
          <p className="text-xl text-center text-gray-700 font-medium">
            Our AI targets valuable long-tail keywords with high purchase intent that most creators ignore
          </p>
        </div>
        
        {/* Always render a static chart that works without complex calculations */}
        <StaticKeywordChart />
        
        {/* Keyword Info */}
        <div 
          className="mt-16 border-4 border-black p-5 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          onClick={() => {
            if (!activeKeyword) {
              setActiveKeyword(keywordData[5]); // Show an example long-tail keyword
            } else if (activeKeyword.id === 5) {
              setActiveKeyword(keywordData[11]); // Cycle to another example
            } else {
              setActiveKeyword(null); // Reset
            }
          }}
        >
          {mounted ? (
            <KeywordInfoCard hoveredKeyword={activeKeyword} />
          ) : (
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Click Here to See Example Keywords</h3>
              <p className="text-base">See how AI-generated videos can capture high-intent long-tail keywords that most creators ignore</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-[#fcd40b] p-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black text-2xl mb-4">How Our AI Makes the Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold">1</span>
              </div>
              <p className="text-lg font-medium">
                <span className="font-black">Identifies valuable long-tail keywords</span> with high purchase intent that most creators ignore
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold">2</span>
              </div>
              <p className="text-lg font-medium">
                <span className="font-black">Creates targeted videos</span> for each specific keyword at scale, something impossible for human creators
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold">3</span>
              </div>
              <p className="text-lg font-medium">
                <span className="font-black">Ranks easily in search results</span> due to low competition but captures users with high buying intent
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-none bg-white border-2 border-black flex items-center justify-center mr-4 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold">4</span>
              </div>
              <p className="text-lg font-medium">
                <span className="font-black">Directs high-quality traffic</span> to your products from users who know exactly what they want
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default KeywordDistributionChart; 