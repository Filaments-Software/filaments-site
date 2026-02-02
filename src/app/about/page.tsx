import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn about our game studio, our mission, and the team behind Filaments.",
};

export default function AboutPage() {
  return (
    <div className="text-white bg-gradient-to-b from-[#071e3d] via-[#0f172a] via-[#152d5f] via-[#1e3a8a] via-[#152d5f] to-[#071e3d]">
      {/* Hero Section with Integrated Navigation */}
      <section className="relative pt-4 pb-10">
        {/* Navigation integrated at top */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10 mb-16">
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
                <Link href="/about" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#game-details" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Games
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center flex items-center justify-center flex-wrap">
            About
            <span className="inline-block mx-3">
              <Image
                src="/images/filaments-logo.png"
                alt="Filaments Logo"
                width={50}
                height={50}
                className="h-auto"
              />
            </span>
            <span className="text-blue-400">Filaments</span>
          </h1>
          <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto text-center mb-4">
            &quot;Don&apos;t copy; Iterate&quot;
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            We&apos;re a passionate indie game studio dedicated to creating games called filaments.
          </p>
        </div>
      </section>

      {/* Divider design element - connects sections */}
      <div className="flex justify-center my-8">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Our Story */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">The Story</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 mb-4">
              Filaments Software is founded by people who share a common vision:
              to make intriging experiences that are fused with innovative gameplay mechanics.
            </p>
            <p className="text-gray-300 mb-4">
              The name &quot;Filaments&quot; represents the philosophy—that games are like threads of light that connect
              people and ideas into a bunch of cool experiences.
            </p>
            <p className="text-gray-300 mb-4">
              The motto, &quot;Don&apos;t copy; Iterate,&quot; embodies our approach to game development. We believe in learning
              from what works, then innovating and evolving those ideas into something fresh and unique.
            </p>
            <p className="text-gray-300">
              Based in the US, filaments&apos; small but growing team is currently focused on developing various titles to debut.
              Limina is our first public project announced, with a focus on a Singleplayer experience. Another unannounced project is in the works,
              which will be a Multiplayer experience. We are excited to share more details about these projects in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Divider design element - connects sections */}
      <div className="flex justify-center my-8">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Our Mission */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">The Mission</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10">
            <p className="text-xl text-center text-gray-300">
              &quot;To create games that build upon the foundations laid by others, iterating and evolving
              ideas—transforming inspiration into innovation, one filament at a time.&quot;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Iteration</h3>
              <p className="text-gray-300">We don&apos;t reinvent the wheel; we make it better. Taking what works and evolving it into something new and meaningful.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Connection</h3>
              <p className="text-gray-300">Bringing players and ideas together to create a collaborative ecosystem where innovation thrives through shared experiences.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Originality</h3>
              <p className="text-gray-300">Finding the balance between inspiration and imitation—respecting what came before while creating something distinctly our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider design element - connects sections */}
      <div className="flex justify-center my-8">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Team Members */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">The Team</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {[
                {
                  name: "Arcev",
                  role: "Founder",
                  image: "/images/team-1.png",
                  bio: "How it be, what it do?",
                  style: "contain",
                },
                {
                  name: "Swittens",
                  role: "Mapper / Level Designer",
                  image: "/images/team-3.jpg",
                  bio: "It was me, DIO!",
                },
                {
                  name: "DrakeFruit",
                  role: "Programmer / 3D Artist",
                  image: "/images/team-5.png",
                  bio: "'Eeby Deeby'",
                  style: "contain",
                },
                {
                  name: "MAX NOIZ",
                  role: "Sound Designer / Artist",
                  image: "/images/team-7.png",
                  bio: "'eat rocks'",
                  style: "contain",
                },
                {
                  name: "HunterMvPz",
                  role: "3D Artist / Animator",
                  image: "/images/team-4.png",
                  bio: "'I Hunter on your Mv Pz'",
                },
                {
                  name: "tzainten",
                  role: "Programmer",
                  image: "/images/team-8.png",
                  bio: "Jinx is real",
                },
                {
                  name: "Barry Beckman",
                  role: "Programmer / Game Designer",
                  image: "/images/team-10.png",
                  bio: "Jinx is not real",
                },
                {
                  name: "Lilly",
                  role: "Tester",
                  image: "/images/team-9.png",
                  bio: ":)",
                },
                {
                  name: "Solqr",
                  role: "Tester",
                  image: "/images/team-11.png",
                  bio: "idk what to put here",
                },
                {
                  name: "You?",
                  role: "Join discord and reach out!",
                  image: "/images/addperson.png",
                  bio: "Always on the look out for talented individuals to join our team. If you're passionate about game development, reach out. :D",
                  style: "contain",
                }
              ].map(member => (
                <div key={member.name} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: (member.style ?? "cover") as "contain" | "cover" | "fill" | "none" | "scale-down" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider design element - connects sections */}
      <div className="flex justify-center my-8">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
    </div>
  );
}
