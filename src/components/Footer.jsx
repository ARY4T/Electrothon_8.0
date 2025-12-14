
"use client";

import React from 'react';
import { Github, Linkedin, Instagram, Mail, X } from 'lucide-react';
import Image from 'next/image';
import specLogo from '@/assets/images/spec-logo.png';
import ContactUs1 from '@/components/ui/ContactUs1';
import TargetCursor from './TargetCursor';

export default function Footer() {
  return (
    <footer 
      id="contact" 
      className="relative w-full py-24 flex items-center justify-center text-gray-800 overflow-hidden"
    >
      <TargetCursor targetSelector=".cursor-target" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg_img_footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1a1a1a'
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        {/* Footer Title - KEPT AS IS (Pixel Font) */}
        <div className="flex items-center justify-center p-8 w-full text-center mb-6">
          <h1
            className="font-normal text-white text-[clamp(1.6rem,5vw,3.75rem)] whitespace-normal break-words max-w-[700px] px-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Let's talk about everything!
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-6xl space-y-6 px-4">
          {/* Contact component (adapted ContactUs1) */}
          <div className="w-full flex items-center justify-center">
            <ContactUs1 />
          </div>

          {/* Social Links and Info Section */}
          <div className="w-full border-t border-gray-600 pt-12 mt-6">
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-12 items-center md:items-start">
              {/* Logo */}
              <div className="flex justify-center mb-6 md:mb-0 min-w-0 w-full md:w-auto">
                <a
                  href="https://spec.nith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target opacity-90 hover:opacity-100 transition-opacity"
                  style={{
                    filter: 'drop-shadow(0 0 10px #D58BFF)',
                  }}
                >
                  <Image
                    src={specLogo}
                    alt="SPEC NITH Logo"
                    width={160}
                    height={160}
                    className="w-40 h-auto max-w-[160px]"
                  />
                </a>
              </div>
              
           {/* Resources */}
{/* Resources / LINKS */}
              <div className="text-center mb-6 md:mb-0 min-w-0 w-full md:w-auto">
                <p 
                  className="text-white font-bold mb-4 text-sm"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  LINKS
                </p>
                <ul 
                  className="space-y-4 text-gray-400 text-[10px] leading-relaxed whitespace-normal break-words"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  <li>
                    <a
                      href="https://electrothon-7-0.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target hover:text-gray-300"
                    >
                      Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://spec.nith.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target hover:text-gray-300"
                    >
                      SPEC NITH
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target hover:text-gray-300"
                    >
                      Code of Conduct
                    </a>
                  </li>
                  {/* NEW LINK ADDED HERE */}
                  <li>
                    <a
                      href="#" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target hover:text-gray-300"
                    >
                      Hacker Guide
                    </a>
                  </li>
                </ul>
              </div>

              {/* Address */}
              <div className="text-center mb-6 md:mb-0 min-w-0 w-full md:w-auto">
                <p 
                  className="text-white font-bold mb-4 text-sm"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  ADDRESS
                </p>
                {/* APPLIED PIXEL FONT HERE */}
                <ul 
                  className="space-y-4 text-gray-400 text-[10px] leading-relaxed whitespace-normal break-words"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  <li>
                    <a
                      href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target hover:text-gray-300"
                    >
                      NIT Hamirpur
                    </a>
                  </li>
                  <li>Hamirpur, Himachal Pradesh</li>
                  <li>India - 177005</li>
                </ul>
              </div>

              {/* Stay Connected */}
              <div className="text-center min-w-0 w-full md:w-auto">
                <p 
                  className="text-white font-bold mb-4 text-sm"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  CONNECT
                </p>
                <div className="flex justify-center gap-5 opacity-80">
                  <a
                    href="https://github.com/spec-nith"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cursor-target hover:opacity-100"
                  >
                    <Github className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/s-p-e-c-nith/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cursor-target hover:opacity-100"
                  >
                    <Linkedin className="text-blue-500 text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/electrothon"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cursor-target hover:opacity-100"
                  >
                    <X className="text-white text-xl" />
                  </a>
                  <a
                    href="https://instagram.com/s.p.e.c_nith"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cursor-target hover:opacity-100"
                  >
                    <Instagram className="text-pink-600 text-xl" />
                  </a>
                  <a
                    href="mailto:spec@nith.ac.in"
                    rel="noreferrer noopener"
                    className="cursor-target hover:opacity-100"
                  >
                    <Mail className="text-gray-300 text-xl" />
                  </a>
                </div>

                {/* CTA Button - Below Connect */}
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={() => window.open('https://electrothon-7-0.vercel.app/', '_blank')}
                    className="cursor-target relative text-white font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-blue-500 whitespace-nowrap"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.65rem' }}
                  >
                      Electrothon 7.0
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright - APPLIED PIXEL FONT HERE */}
          <div 
            className="text-center text-gray-400 text-[10px] mt-8"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            © 2025, SPEC NITH. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}