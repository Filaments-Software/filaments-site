import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Causal | Filaments",
  description:
    "You are a causal agent, discover what happened in a research facility.",
};

export default function CausalPage() {
  return (
    <div className="bg-[#070b14] text-white">
      {/* Full-viewport Hero */}
      <section className="relative flex h-screen flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/causal/causal-bck.png"
            alt="Causal"
            fill
            sizes="100vw"
            priority
            className="object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-20 container mx-auto flex items-center justify-between px-4 py-4">
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
                <Link
                  href="/about"
                  className="group flex items-center gap-2 transition hover:text-amber-300"
                >
                  <svg
                    className="h-5 w-5 text-white transition group-hover:text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#game-details"
                  className="group flex items-center gap-2 transition hover:text-cyan-300"
                >
                  <svg
                    className="h-5 w-5 text-white transition group-hover:text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Games
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Centered title */}
        <div className="relative z-20 flex flex-grow flex-col items-center justify-center px-4">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/causal/causal-logo.png"
              alt="Causal"
              width={1778}
              height={885}
              priority
              className="h-auto w-[320px] md:w-[420px] lg:w-[540px]"
            />
          </div>
          <p className="mb-8 max-w-2xl text-center text-xl font-semibold text-white md:text-2xl">
            &ldquo;You are a causal agent, discover what happened in a research
            facility.&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://discord.gg/GXZsHu3KQF"
              className="flex items-center gap-2 rounded-lg bg-[#5865F2] px-4 py-3 font-medium text-white shadow-md transition hover:bg-[#4752c4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              Discord
            </a>
            <a
              href="https://sbox.game/fss/causal"
              className="flex items-center rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white shadow-md transition hover:bg-white/10"
              aria-label="Find us on S&Box"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-20 flex justify-center pb-8">
          <svg
            className="h-6 w-6 animate-bounce text-cyan-200/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Divider: dichotomy split */}
      <div className="my-8 flex items-center justify-center">
        <div className="h-px w-12 bg-amber-400/70"></div>
        <div className="h-px w-12 bg-cyan-300/70"></div>
      </div>

      {/* Synopsis + trailer slot */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Your Assignment
          </h2>
          {/* Trailer slot: replace this placeholder with a <video> or embed
              when the trailer is ready */}
          <div className="relative mb-10 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/25 bg-black/50">
            <div className="flex flex-col items-center gap-4 text-gray-500">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25">
                <svg
                  className="ml-1 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase">
                Trailer // In Production
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
            <p className="mb-4 text-gray-300">
              You have been chosen to be a Causal Agent.
            </p>
            <p className="mb-4 text-gray-300">
              The Paralix Research Facility, a remote research station, has sent
              you there.
            </p>
            <p className="mb-4 text-gray-300">
              The facility has been left abandoned with its systems becoming
              unstable since something went wrong, but the deeper you
              investigate the more you come to realize that the facility exists
              in more than one state.
            </p>
            <p className="text-gray-300">
              A construct located here is capable of slipgating time. In order
              to get to it, you will have to explore the facility, discover
              histories, and with some hope; to stop it from operating.
            </p>
          </div>
        </div>
      </section>

      {/* Divider: dichotomy split */}
      <div className="my-8 flex items-center justify-center">
        <div className="h-px w-12 bg-amber-400/70"></div>
        <div className="h-px w-12 bg-cyan-300/70"></div>
      </div>

      {/* Closing tagline + CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="mb-8 text-center text-2xl font-semibold text-white italic md:text-3xl">
            &ldquo;Playing with causality comes at a price...&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://discord.gg/GXZsHu3KQF"
              className="flex items-center gap-2 rounded-lg bg-[#5865F2] px-4 py-3 font-medium text-white shadow-md transition hover:bg-[#4752c4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              Discord
            </a>
            <a
              href="https://sbox.game/fss/causal"
              className="flex items-center rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white shadow-md transition hover:bg-white/10"
              aria-label="Find us on S&Box"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
