import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-black text-black mb-6">404</h1>
        <h2 className="text-4xl font-bold text-black mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-10">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/" passHref>
          <Button className="bg-[#fcd40b] border-4 border-black rounded-none text-black font-bold text-xl py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
} 