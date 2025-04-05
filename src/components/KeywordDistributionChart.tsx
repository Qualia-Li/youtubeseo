"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Types for our keywords
type KeywordType = {
  id: number;
  text: string;
  searchVolume: number;
  competition: string;
  type: 'short-tail' | 'long-tail' | 'far-long-tail';
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
    type: "long-tail",
    buyIntent: 7,
    example: "Higher intent but still competitive"
  },
  {
    id: 4,
    text: "best memory foam mattress for back pain",
    searchVolume: 18000,
    competition: "Medium",
    type: "long-tail",
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
    type: "far-long-tail",
    buyIntent: 10,
    example: "Very specific needs with extremely high purchase intent"
  },
];

// Simpler fallback chart that doesn't rely on complex SVG rendering
const StaticKeywordChart = () => {
  // For client-side interactivity
  const [hoveredKeyword, setHoveredKeyword] = useState<KeywordType | null>(null);
  
  // Handle keyword hover interaction
  const handleKeywordHover = (keyword: KeywordType) => {
    setHoveredKeyword(keyword);
    console.log("Hovering on keyword:", keyword.text);
  };
  
  return (
    <div className="w-full h-[700px] relative mt-10">
      {/* <div className="absolute -left-16 top-1/2 transform -rotate-90 font-bold text-lg">
        Keyword Total Value
      </div> */}

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 font-bold text-lg">
        Keywords
      </div>

      <div className="w-full h-full relative bg-white border-4 border-black">
        {/* Main Curve - Volume vs Keywords with better visibility */}
        <div className="absolute top-0 left-0 w-full h-full">
          <TooltipProvider>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
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
                <linearGradient
                  id="volumeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="25%" stopColor="#f87171" />
                  <stop offset="40%" stopColor="#60a5fa" />
                  <stop offset="60%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#fcd34d" />
                </linearGradient>
              </defs>

              {/* Human Creator Cost Line */}
              <line
                x1="0"
                y1="300"
                x2="1000"
                y2="300"
                stroke="#ef4444"
                strokeWidth="4"
                strokeDasharray="15,5"
              />
              <text
                x="20"
                y="290"
                fill="#b91c1c"
                fontWeight="bold"
                fontSize="16"
              >
                Human Creator Cost
              </text>

              {/* AI Creator Cost Line - lower */}
              <line
                x1="0"
                y1="650"
                x2="1000"
                y2="650"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="15,5"
              />
              <text
                x="20"
                y="640"
                fill="#1d4ed8"
                fontWeight="bold"
                fontSize="16"
              >
                AI Creator Cost
              </text>

              {/* Profit Zone - highlighted area between curve and human cost for tail */}
              <text
                x="50"
                y="200"
                fill="#b91c1c"
                fontWeight="bold"
                fontSize="16"
              >
                Profit Zone for
              </text>
              <text
                x="50"
                y="225"
                fill="#b91c1c"
                fontWeight="bold"
                fontSize="16"
              >
                Human Creators
              </text>

              {/* Profit Zone - highlighted area between curve and human cost for tail */}
              <text
                x="400"
                y="550"
                fill="#1d4ed8"
                fontWeight="bold"
                fontSize="16"
              >
                Profit Zone for
              </text>
              <text
                x="400"
                y="575"
                fill="#1d4ed8"
                fontWeight="bold"
                fontSize="16"
              >
                Human Creators
              </text>

              {/* Clickable Keyword Points for Short Tail - With Tooltips */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="50"
                    cy="60"
                    r="10"
                    fill="#b91c1c"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[0])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[0].text}"</div>
                  <div className="text-sm">
                    {keywordData[0].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[0].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[0].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="150"
                    cy="130"
                    r="10"
                    fill="#b91c1c"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[1])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[1].text}"</div>
                  <div className="text-sm">
                    {keywordData[1].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[1].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[1].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

              {/* Clickable Keyword Points for Mid Tail - With Tooltips */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="300"
                    cy="300"
                    r="10"
                    fill="#1d4ed8"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[2])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[2].text}"</div>
                  <div className="text-sm">
                    {keywordData[2].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[2].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[2].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="450"
                    cy="450"
                    r="10"
                    fill="#1d4ed8"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[3])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[3].text}"</div>
                  <div className="text-sm">
                    {keywordData[3].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[3].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[3].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="550"
                    cy="550"
                    r="10"
                    fill="#1d4ed8"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[9])}
                  />
                </TooltipTrigger>
              </Tooltip>

              {/* Clickable Keyword Points for Long Tail - With Tooltips */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="650"
                    cy="600"
                    r="10"
                    fill="#b45309"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[4])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[4].text}"</div>
                  <div className="text-sm">
                    {keywordData[4].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[4].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[4].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <circle
                    cx="750"
                    cy="650"
                    r="10"
                    fill="#b45309"
                    className="cursor-pointer hover:stroke-black hover:stroke-2 transition-all"
                    onClick={() => handleKeywordHover(keywordData[5])}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white p-3 border-2 border-black max-w-md"
                >
                  <div className="font-bold">"{keywordData[5].text}"</div>
                  <div className="text-sm">
                    {keywordData[5].searchVolume.toLocaleString()} monthly
                    searches
                  </div>
                  <div className="text-sm">
                    Competition: {keywordData[5].competition}
                  </div>
                  <div className="text-sm">
                    Purchase Intent: {keywordData[5].buyIntent}/10
                  </div>
                </TooltipContent>
              </Tooltip>

            </svg>
          </TooltipProvider>
        </div>
      </div>

      {/* Axes */}
      <div className="absolute left-0 top-0 h-full border-l-4 border-black"></div>
      <div className="absolute left-0 bottom-0 w-full border-b-4 border-black"></div>

      {/* Y-Axis marks */}
      {/* <div className="absolute left-[-10px] top-0 font-bold">High</div>
      <div className="absolute left-[-10px] bottom-[-10px] font-bold">Low</div> */}

      {/* X-Axis marks */}
      {/* <div className="absolute left-0 bottom-[-30px] font-bold">Low</div>
      <div className="absolute right-0 bottom-[-30px] font-bold">High</div> */}

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
          <span className="text-xs">Long-tail Keywords</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-amber-700 mr-2 rounded-full"></div>
          <span className="text-xs">Far-long-tail Keywords</span>
        </div>
      </div>
    </div>
  );
};

const KeywordDistributionChart = () => {

  return (
    <div className="w-full">
      <Card className="p-8 border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white my-10">
        <div className="mb-6">
          <h2 className="text-4xl font-black text-center mb-2">Keyword Distribution</h2>
        </div>
        
        {/* Always render a static chart that works without complex calculations */}
        <StaticKeywordChart />
        
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