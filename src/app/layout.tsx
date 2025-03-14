import { type PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/styles/globals.css";

// Optimize font loading by only including the weights we actually use
const montserrat = Montserrat({
  subsets: ["latin"],
  // Only include the weights we actually use in the site
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap", // Optimize font loading
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: "Filaments Software",
  description: "Don't copy; Iterate",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/filaments-logo.png" as="image" />
        <link rel="preload" href="/images/filaments-logo-text.png" as="image" />
        
        {/* Prefetch critical routes for faster navigation */}
        <link rel="prefetch" href="/about" />
      </head>
      <body className="font-montserrat bg-[#071e3d]">
        <TRPCReactProvider>
          <main>
            {children}
          </main>
          <footer className="bg-[#071e3d] text-white py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex justify-center items-center">
                  <Image 
                    src="/images/filaments-logo.png"
                    alt="Filaments Logo"
                    width={60}
                    height={60}
                    className="h-auto"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Studio</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
                    <li><a href="/about#team" className="hover:text-blue-400 transition">Our Team</a></li>
                    <li><a href="/about#mission" className="hover:text-blue-400 transition">Our Mission</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Games</h3>
                  <ul className="space-y-2">
                    <li><a href="#game-details" className="hover:text-blue-400 transition">Limina</a></li>
                  </ul>
                </div>
                <div id="contact">
                  <h3 className="text-xl font-bold mb-4">Social</h3>
                  <div className="flex flex-wrap gap-4">
                    {/* S&Box Icon */}
                    <a href="https://sbox.game/fss" className="hover:text-blue-400 transition" aria-label="S&Box">
                      <svg width="29" height="16" viewBox="0 0 29 16" className="w-7 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M2.893,15.475C2.085,15.165,1.379,14.669,0.842,14.034C0.349,13.446,0.056,12.737,0.000,11.996L3.850,11.996C3.869,12.191,3.935,12.380,4.041,12.549C4.147,12.719,4.292,12.866,4.465,12.979C4.855,13.240,5.328,13.375,5.810,13.362C6.207,13.384,6.601,13.293,6.938,13.100C7.060,13.028,7.161,12.928,7.230,12.811C7.300,12.693,7.336,12.562,7.336,12.428C7.337,12.266,7.282,12.107,7.181,11.974C7.079,11.840,6.934,11.739,6.767,11.685C6.169,11.462,5.552,11.283,4.922,11.152C4.148,10.994,3.387,10.788,2.644,10.536C2.035,10.320,1.495,9.968,1.072,9.512C0.630,9.044,0.410,8.414,0.410,7.619C0.404,6.967,0.614,6.329,1.013,5.789C1.459,5.208,2.075,4.755,2.790,4.483C3.674,4.145,4.626,3.981,5.583,4.002C7.178,4.002,8.435,4.365,9.353,5.090C10.276,5.822,10.846,6.859,10.937,7.975L7.336,7.975C7.314,7.788,7.251,7.606,7.151,7.440C7.051,7.275,6.917,7.129,6.755,7.012C6.383,6.763,5.929,6.639,5.468,6.658C5.101,6.637,4.735,6.721,4.421,6.898C4.305,6.971,4.210,7.069,4.146,7.184C4.082,7.299,4.051,7.427,4.055,7.557C4.056,7.721,4.113,7.882,4.217,8.017C4.320,8.151,4.467,8.253,4.636,8.309C5.220,8.532,5.827,8.700,6.447,8.811C7.228,8.988,7.997,9.208,8.750,9.469C9.356,9.695,9.892,10.054,10.310,10.515C10.781,11.063,11.025,11.747,10.998,12.444C11.007,13.100,10.787,13.741,10.370,14.274C9.910,14.840,9.287,15.277,8.571,15.537C7.707,15.859,6.781,16.016,5.849,15.999C4.835,16.014,3.828,15.836,2.893,15.475Z" />
                          <path d="M24.821,15.755L23.455,14.368C22.096,15.456,20.471,16.000,18.582,15.998C17.567,16.022,16.558,15.823,15.621,15.413C14.834,15.072,14.158,14.499,13.677,13.762C13.215,13.020,12.980,12.149,13.001,11.264C12.991,10.329,13.251,9.413,13.746,8.635C14.311,7.791,15.084,7.125,15.983,6.708C15.656,6.304,15.393,5.847,15.207,5.354C15.051,4.900,14.975,4.421,14.982,3.939C14.975,3.230,15.165,2.534,15.529,1.937C15.917,1.315,16.468,0.824,17.115,0.521C17.893,0.157,18.739,-0.020,19.591,0.003C20.440,-0.025,21.284,0.165,22.048,0.554C22.679,0.880,23.205,1.392,23.561,2.029C23.897,2.643,24.058,3.347,24.024,4.055L20.648,4.055C20.665,3.890,20.649,3.723,20.600,3.565C20.551,3.408,20.471,3.262,20.365,3.139C20.256,3.028,20.126,2.942,19.983,2.886C19.841,2.831,19.689,2.807,19.537,2.816C19.229,2.806,18.929,2.916,18.695,3.125C18.586,3.223,18.500,3.345,18.442,3.482C18.384,3.619,18.356,3.768,18.360,3.918C18.370,4.261,18.468,4.595,18.643,4.885C18.898,5.314,19.200,5.709,19.543,6.064L23.144,9.741C23.178,9.651,23.216,9.563,23.259,9.477C23.308,9.373,23.360,9.255,23.417,9.123L24.168,7.736L27.769,7.736L26.761,9.651C26.388,10.507,25.953,11.332,25.460,12.118L29.000,15.755L24.821,15.755ZM21.249,12.123L17.973,8.805C16.964,9.347,16.460,10.081,16.460,11.005C16.457,11.272,16.511,11.536,16.618,11.778C16.725,12.021,16.882,12.234,17.079,12.404C17.552,12.798,18.146,12.998,18.749,12.965C19.647,12.979,20.525,12.685,21.249,12.123Z" />
                        </g>
                      </svg>
                    </a>
                    
                    {/* Discord Icon */}
                    <a href="https://discord.gg/GXZsHu3KQF" className="hover:text-blue-400 transition" aria-label="Discord">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p>&copy; {new Date().getFullYear()} Filaments Software. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
