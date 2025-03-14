import { type PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import Image from "next/image";

import "@/styles/globals.css";

// Load Montserrat with all weights for better design flexibility
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Filaments Software",
  description: "Don't copy; Iterate",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={montserrat.variable}>
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
                      <Image 
                        src="/images/sbox.svg"
                        alt="S&Box Logo"
                        width={29}
                        height={16}
                        className="w-6.5 h-4 fill-current text-white hover:text-blue-400 transition"
                      />
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
