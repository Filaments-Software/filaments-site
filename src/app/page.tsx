import Image from "next/image";
import Link from "next/link";
import { FilamentCard } from "./_components/FilamentCard";

export default async function Home() {
  // Single game in development
  const filaments = [
    {
      id: 1,
      ident: "limbox",
      title: "Limina",
      description: "Limina is an immersive liminal exploration game inspired by the Backrooms and SCP Foundation lore. Built on the S&Box Engine.",
      image: "/images/limina.png",
      platforms: ["PC"],
      releaseStatus: "In Development"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#1e3a8a] via-[#12315a] to-[#0f172a]">
      {/* Hero Section with Integrated Navigation */}
      <section className="h-screen relative flex flex-col overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover filter blur-[2px]"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay to make content more visible */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Header gradient overlay - only over the header area */}
        <div className="absolute top-0 inset-x-0 h-[72px] bg-gradient-to-b from-[#071e3d]/90 to-transparent z-5"></div>
        
        {/* Navigation integrated at top */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-20">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/filaments-logo.png"
              alt="Filaments Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold text-white">Filaments</span>
          </Link>
          <nav>
            <ul className="flex gap-6 text-white">
              <li>
                <a href="/about" className="hover:text-blue-400 transition flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="#game-details" className="hover:text-blue-400 transition flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Games
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Hero content */}
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-20 text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/filaments-logo-text.png"
                alt="Filaments Software"
                width={500}
                height={100}
                priority
                className="h-auto"
              />
            </div>
            <p className="text-lg md:text-xl text-blue-300 font-semibold mb-4">&quot;Don&apos;t copy; Iterate&quot;</p>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Creating unforgettable gaming experiences,<br />
              one filament at a time.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#game-details" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
                Our Game
              </a>
              <a href="/about" className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition">
                About Us
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a href="https://discord.gg/GXZsHu3KQF" className="text-white hover:text-blue-400 transition" aria-label="Discord">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
              </a>
              <a href="https://sbox.game/fss" className="hover:text-blue-400 transition" aria-label="S&Box">
                <Image 
                  src="/images/sbox.svg"
                  alt="S&Box Logo"
                  width={29}
                  height={16}
                  className="w-10 h-6.7 fill-current text-white hover:text-blue-400 transition"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <svg className="animate-bounce w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Game Details Section */}
      <section id="game-details" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Introducing Limina</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {filaments.map(game => (
              <FilamentCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
