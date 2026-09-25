import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bloodsigil | Filaments",
  description:
    "Bloodsigil is a multiplayer zombie survival game for S&Box. A modern reimagining of GMODs Zombie Survival.",
};

export default function BloodsigilPage() {
  return (
    <div className="bg-gradient-to-b from-[#1a0000] via-[#1a0505] via-[#2a0a0a] to-[#0d0000] text-white">
      {/* Full-viewport Hero */}
      <section className="relative flex h-screen flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bloodsigil/Bloodsigil-barry-bck.png"
            alt="Bloodsigil"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a0000]"></div>
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
                  className="group flex items-center gap-2 transition hover:text-red-400"
                >
                  <svg
                    className="h-5 w-5 text-white transition group-hover:text-red-400"
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
                  className="group flex items-center gap-2 transition hover:text-red-400"
                >
                  <svg
                    className="h-5 w-5 text-white transition group-hover:text-red-400"
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
              <li>
                <Link
                  href="/bloodsigil/wiki"
                  className="group flex items-center gap-2 transition hover:text-red-400"
                >
                  <svg
                    className="h-5 w-5 text-white transition group-hover:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  Wiki
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Centered title */}
        <div className="relative z-20 flex flex-grow flex-col items-center justify-center px-4">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/bloodsigil/Bloodsigil-logo.png"
              alt="Bloodsigil"
              width={857}
              height={304}
              priority
              className="h-auto w-[400px] md:w-[500px] lg:w-[700px]"
            />
          </div>
          <p className="mb-8 max-w-2xl text-center text-xl font-semibold text-red-300/90 md:text-2xl">
            A modern reimagining of GMODs Zombie Survival
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="https://sbox.game/fss/bloodsigil"
              className="flex items-center rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="16"
                viewBox="0 0 29 19"
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M2.893,15.475C2.085,15.165,1.379,14.669,0.842,14.034C0.349,13.446,0.056,12.737,0.000,11.996L3.850,11.996C3.869,12.191,3.935,12.380,4.041,12.549C4.147,12.719,4.292,12.866,4.465,12.979C4.855,13.240,5.328,13.375,5.810,13.362C6.207,13.384,6.601,13.293,6.938,13.100C7.060,13.028,7.161,12.928,7.230,12.811C7.300,12.693,7.336,12.562,7.336,12.428C7.337,12.266,7.282,12.107,7.181,11.974C7.079,11.840,6.934,11.739,6.767,11.685C6.169,11.462,5.552,11.283,4.922,11.152C4.148,10.994,3.387,10.788,2.644,10.536C2.035,10.320,1.495,9.968,1.072,9.512C0.630,9.044,0.410,8.414,0.410,7.619C0.404,6.967,0.614,6.329,1.013,5.789C1.459,5.208,2.075,4.755,2.790,4.483C3.674,4.145,4.626,3.981,5.583,4.002C7.178,4.002,8.435,4.365,9.353,5.090C10.276,5.822,10.846,6.859,10.937,7.975L7.336,7.975C7.314,7.788,7.251,7.606,7.151,7.440C7.051,7.275,6.917,7.129,6.755,7.012C6.383,6.763,5.929,6.639,5.468,6.658C5.101,6.637,4.735,6.721,4.421,6.898C4.305,6.971,4.210,7.069,4.146,7.184C4.082,7.299,4.051,7.427,4.055,7.557C4.056,7.721,4.113,7.882,4.217,8.017C4.320,8.151,4.467,8.253,4.636,8.309C5.220,8.532,5.827,8.700,6.447,8.811C7.228,8.988,7.997,9.208,8.750,9.469C9.356,9.695,9.892,10.054,10.310,10.515C10.781,11.063,11.025,11.747,10.998,12.444C11.007,13.100,10.787,13.741,10.370,14.274C9.910,14.840,9.287,15.277,8.571,15.537C7.707,15.859,6.781,16.016,5.849,15.999C4.835,16.014,3.828,15.836,2.893,15.475Z" />
                  <path d="M24.821,15.755L23.455,14.368C22.096,15.456,20.471,16.000,18.582,15.998C17.567,16.022,16.558,15.823,15.621,15.413C14.834,15.072,14.158,14.499,13.677,13.762C13.215,13.020,12.980,12.149,13.001,11.264C12.991,10.329,13.251,9.413,13.746,8.635C14.311,7.791,15.084,7.125,15.983,6.708C15.656,6.304,15.393,5.847,15.207,5.354C15.051,4.900,14.975,4.421,14.982,3.939C14.975,3.230,15.165,2.534,15.529,1.937C15.917,1.315,16.468,0.824,17.115,0.521C17.893,0.157,18.739,-0.020,19.591,0.003C20.440,-0.025,21.284,0.165,22.048,0.554C22.679,0.880,23.205,1.392,23.561,2.029C23.897,2.643,24.058,3.347,24.024,4.055L20.648,4.055C20.665,3.890,20.649,3.723,20.600,3.565C20.551,3.408,20.471,3.262,20.365,3.139C20.256,3.028,20.126,2.942,19.983,2.886C19.841,2.831,19.689,2.807,19.537,2.816C19.229,2.806,18.929,2.916,18.695,3.125C18.586,3.223,18.500,3.345,18.442,3.482C18.384,3.619,18.356,3.768,18.360,3.918C18.370,4.261,18.468,4.595,18.643,4.885C18.898,5.314,19.200,5.709,19.543,6.064L23.144,9.741C23.178,9.651,23.216,9.563,23.259,9.477C23.308,9.373,23.360,9.255,23.417,9.123L24.168,7.736L27.769,7.736L26.761,9.651C26.388,10.507,25.953,11.332,25.460,12.118L29.000,15.755L24.821,15.755Z" />
                </g>
              </svg>
              box
            </a>
            <a
              href="https://discord.gg/GXZsHu3KQF"
              className="flex items-center gap-2 rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              Discord
            </a>
            <Link
              href="/bloodsigil/wiki"
              className="flex items-center gap-2 rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Wiki
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-20 flex justify-center pb-8">
          <svg
            className="h-6 w-6 animate-bounce text-red-400/60"
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

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* The Crimson Eclipse opening lore */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            The Crimson Eclipse
          </h2>
          <div className="rounded-2xl border border-red-900/30 bg-red-950/20 p-10 backdrop-blur-sm">
            <p className="mb-6 text-center text-lg text-red-200/80 italic">
              &quot;The world does not turn the way it used to. A disastrous
              event caused Time to break down into cursed cycles, each one
              featuring nights of suffering, paradoxes, and... The Undead.
              Between these cycles there is a narrow window. A chance to move
              forward. An opportunity to escape. Yet nobody manages to leave
              without the sigils.&quot;
            </p>
            <p className="mb-4 text-gray-300">
              In the last days preceding the Crimson Eclipse, the world&apos;s
              most accomplished occultists met at the Pale Citadel, a fortress
              made of moonstone and bone. Under a sky divided by bleeding light
              they carried out the Rite of Severance, a rite so severe that it
              required the life essence of one hundred volunteers. It was only
              through their sacrifice that the first Bloodsigils were awakened
              from deep in the earth, thus establishing a connection between
              mortal souls and the superficial force of chaos.
            </p>
            <p className="mb-4 text-gray-300">
              Time itself is shattered and the cycles are reset. The dead come
              back to life and the living are once again pursued. Only people
              who are close to the Bloodsigil are able to detect the slight
              differences between cycles. It emits false premonitions of events
              which have already happened, are happening, and will happen.
            </p>
            <p className="text-gray-300">
              Between gravescapes reality becomes thinner. At these transitional
              phases there are energy fields which only appear when the arcane
              energy reaches its peak. It is risky to enter one of them. People
              who do not keep to the sigil are ripped apart by revenants, while
              those who are affected by it are made to pursue the living
              forever.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* The Gravescapes */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            The Gravescapes
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-300">
            Since the collapse, the world has fractured into zones of
            entrapment. Realities repeating in loops of unending bloodshed.
            Survivors call them Gravescapes. Arenas where the living must endure
            and protect... or perish.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                {/* Crumbling ruins icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M3 21h18M5 21V9l4-5v4l3-3v6l4-4v3l3-2v11"
                    className="text-red-400"
                  />
                  <path d="M9 21v-4h3v4" className="text-red-400" />
                  <path
                    d="M7 12h1M14 14h1M11 10h1"
                    className="text-red-300/60"
                  />
                  <path
                    d="M2 8l1.5 1M22 6l-1.5 1.5M17 3l-.5 1.5"
                    className="text-red-500/40"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold">
                Born from Collapse
              </h3>
              <p className="text-center text-gray-300">
                Gravescapes are born from the collapse of once living places.
                Cities, strongholds, temples. When a place falls, its final
                energies are absorbed by the Chaos fields, then reshaped into a
                haunted echo where the last stand of the living replays in
                endless agony.
              </p>
            </div>
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                {/* Arcane sigil / rune icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" className="text-red-400" />
                  <circle cx="12" cy="12" r="5" className="text-red-400" />
                  <path d="M12 3v4M12 17v4" className="text-red-400" />
                  <path d="M3 12h4M17 12h4" className="text-red-400" />
                  <path
                    d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8"
                    className="text-red-300/60"
                  />
                  <path
                    d="M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
                    className="text-red-300/60"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold">
                Dominated by Sigils
              </h3>
              <p className="text-center text-gray-300">
                Every Gravescape is punctured by Arcane Sigils, powerful relics
                that emerge like splinters of hope. They are not placed, but
                grow. Called by the suffering embedded in the land. Wherever one
                rises, a conflict begins.
              </p>
            </div>
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                {/* Undead warden skull with glowing eyes */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Skull outline */}
                  <path
                    d="M7 12V9a5 5 0 0110 0v3a3 3 0 01-1 2.2V16H8v-1.8A3 3 0 017 12z"
                    stroke="#f87171"
                    strokeWidth="1.5"
                    fill="#ef4444"
                    fillOpacity="0.1"
                  />
                  {/* Eye sockets */}
                  <circle
                    cx="10"
                    cy="10"
                    r="1.2"
                    fill="#ef4444"
                    opacity="0.7"
                  />
                  <circle
                    cx="14"
                    cy="10"
                    r="1.2"
                    fill="#ef4444"
                    opacity="0.7"
                  />
                  {/* Jaw / teeth */}
                  <path
                    d="M9.5 16v1.5M12 16v2M14.5 16v1.5"
                    stroke="#f87171"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold">
                Wardens of the Dead
              </h3>
              <p className="text-center text-gray-300">
                The undead roam every Gravescape, drawn to the arcane energies.
                They remember fragments of their former lives, and in the
                crystalline light they sense a promise unfulfilled, sustained by
                chaotic energies that warped them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* The Three Sigils */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            The Three Sigils
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Bloodsigil */}
            <div className="relative rounded-2xl border-2 border-dashed border-amber-500/60 bg-gradient-to-b from-red-950/30 to-red-950/10 p-8 backdrop-blur-sm">
              <div className="absolute top-3 right-3 rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
                WIP
              </div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20">
                {/* Arcane crystal form corrupted dripping fluids and growths */}
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Base crystal same silhouette as Arcane */}
                  <path
                    d="M12 3l5 4v7l-5 5-5-5V7z"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    fill="#ef4444"
                    fillOpacity="0.15"
                  />
                  {/* Inner facets warped version of Arcane */}
                  <path
                    d="M12 3v16M7 7l5 3.5 5-3.5M7 14l5-3.5 5 3.5"
                    stroke="#f87171"
                    strokeWidth="0.75"
                    opacity="0.4"
                  />
                  {/* Abnormal growths and bulges on surface */}
                  <circle cx="8" cy="8" r="1.5" fill="#dc2626" opacity="0.5" />
                  <circle
                    cx="16"
                    cy="10"
                    r="1.2"
                    fill="#dc2626"
                    opacity="0.4"
                  />
                  <ellipse
                    cx="9"
                    cy="13"
                    rx="1"
                    ry="1.4"
                    fill="#b91c1c"
                    opacity="0.45"
                  />
                  <circle
                    cx="15"
                    cy="14"
                    r="0.8"
                    fill="#dc2626"
                    opacity="0.35"
                  />
                  {/* Viscous drips hanging from crystal */}
                  <path
                    d="M9 19c0 1.5-.3 2.5-.5 3"
                    stroke="#dc2626"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <circle
                    cx="8.5"
                    cy="22.5"
                    r="0.6"
                    fill="#dc2626"
                    opacity="0.7"
                  />
                  <path
                    d="M14 18.5c0 1 .2 1.8.3 2.2"
                    stroke="#dc2626"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <circle
                    cx="14.3"
                    cy="21"
                    r="0.5"
                    fill="#dc2626"
                    opacity="0.55"
                  />
                  <path
                    d="M11 19.5c0 .8 0 1.2-.1 1.6"
                    stroke="#b91c1c"
                    strokeWidth="0.8"
                    opacity="0.4"
                  />
                  {/* Pulsing core with sickly glow */}
                  <circle
                    cx="12"
                    cy="11"
                    r="1.8"
                    fill="#ef4444"
                    opacity="0.35"
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="0.8"
                    fill="#fca5a5"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-red-400">
                Bloodsigil
              </h3>
              <p className="mb-3 text-center text-gray-300">
                An origin ArcaneYou are a causal agent, discover what happened
                in a research facility. sigil. The Chaos fields imbue this
                crystal with otherworldly powers. Survivors near it feel
                threatened.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Sacrifice health for trinkets with cursed effects</li>
                <li>
                  Temporary arcane abilities that are powerful but unpredictable
                </li>
                <li>Weapon modifications with hidden costs</li>
              </ul>
            </div>

            {/* Arcane Sigil */}
            <div className="rounded-2xl border border-red-800/30 bg-gradient-to-b from-red-950/30 to-red-950/10 p-8 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600/20">
                {/* Clean hexagonal crystal with radiant light rays */}
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Outer radiance rays */}
                  <path
                    d="M12 1v3M12 20v3M1 12h3M20 12h3"
                    stroke="#67e8f9"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <path
                    d="M4.2 4.2l2 2M17.8 17.8l2 2M4.2 19.8l2-2M17.8 6.2l2-2"
                    stroke="#67e8f9"
                    strokeWidth="0.75"
                    opacity="0.3"
                  />
                  {/* Crystal body tall hexagonal gem */}
                  <path
                    d="M12 3l5 4v7l-5 5-5-5V7z"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                    fill="#22d3ee"
                    fillOpacity="0.12"
                  />
                  {/* Inner facet lines */}
                  <path
                    d="M12 3v16M7 7l5 3 5-3M7 14l5-4 5 4"
                    stroke="#67e8f9"
                    strokeWidth="0.75"
                    opacity="0.5"
                  />
                  {/* Central glow dot */}
                  <circle
                    cx="12"
                    cy="11"
                    r="1.5"
                    fill="#22d3ee"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-cyan-400">
                Arcane Sigil
              </h3>
              <p className="mb-3 text-center text-gray-300">
                A pure azure crystal radiating protective light. This is a
                causal object of humanitys&apos; will made manifest to protect
                and provide.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Provides and Protects, but fragile</li>
                <li>The only means of Escaping</li>
                <li>A beacon of hope in each Gravescape</li>
              </ul>
            </div>

            {/* Corrupted Sigil */}
            <div className="rounded-2xl border border-red-800/30 bg-gradient-to-b from-red-950/30 to-red-950/10 p-8 backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-900/30">
                {/* Shattered Arcane crystal with fragments orbiting energy core */}
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Energy core pulsing center */}
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    fill="#991b1b"
                    opacity="0.3"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1.2"
                    fill="#f87171"
                    opacity="0.6"
                  />
                  {/* Energy tendrils from core to fragments */}
                  <path
                    d="M12 12l-4-6M12 12l5-4M12 12l4 5M12 12l-5 5M12 12l0-8M12 12l-6 1"
                    stroke="#dc2626"
                    strokeWidth="0.5"
                    opacity="0.35"
                  />
                  {/* Floating shard top apex of original crystal */}
                  <path
                    d="M11 2l2 0 .5 2.5-1.5 1-1.5-1z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.4"
                  />
                  {/* Floating shard upper right */}
                  <path
                    d="M16.5 5.5l2 1.5-.5 2.5-2 .5z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.35"
                  />
                  {/* Floating shard upper left */}
                  <path
                    d="M5.5 7l2-1.5 .5 2-2 1.5z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.35"
                  />
                  {/* Floating shard lower right */}
                  <path
                    d="M17 14l2 .5-.5 2.5-2.5.5-.5-2z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.3"
                  />
                  {/* Floating shard lower left */}
                  <path
                    d="M5 14l1.5 2.5 2-.5-.5-2.5-2-.5z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.3"
                  />
                  {/* Floating shard bottom base of original crystal */}
                  <path
                    d="M10 19l2 2.5 2-2.5-1-2h-2z"
                    stroke="#991b1b"
                    strokeWidth="1"
                    fill="#7f1d1d"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-red-300">
                Corrupted Sigil
              </h3>
              <p className="mb-3 text-center text-gray-300">
                An outcome of a Fallen Arcane Sigil. It contains weak chaos
                energy that assists the undead.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Indirectly empowers the undead with necrotic energy</li>
                <li>Allows evil undead structures to assist the undead</li>
                <li>
                  Purify them. A last chance before the Gravescape is lost.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* The Hunger of the Dead */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            The Hunger of the Dead
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-300">
            The undead are drawn to arcane energies. The chaos energies that
            dominate warp them into something completely different, granting
            them powers that disfigure and transform.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Basic Infected */}
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-bold text-red-400">
                Basic Infected
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="font-semibold text-white">Zombie.</span> Slow
                  but durable, deals moderate damage
                </li>
                <li>
                  <span className="font-semibold text-white">Fast.</span> High
                  speed, low health
                </li>
                <li>
                  <span className="font-semibold text-white">Creeper.</span>{" "}
                  Supportive, Places spawn point Nests for zombies{" "}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    {" "}
                    + MORE{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>

            {/* Evolutions */}
            <div className="relative rounded-xl border-2 border-dashed border-amber-500/60 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="absolute top-3 right-3 rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
                WIP
              </div>
              <h3 className="mb-3 text-lg font-bold text-red-400">
                Evolutions
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="font-semibold text-white">Martyr.</span> Upon
                  death, releases a burst of energy that heals nearby zombies
                  and damages survivors
                </li>
                <li>
                  <span className="font-semibold text-white">Tainting.</span>{" "}
                  Covers its claws in chaos energy. + DoT
                </li>
                <li>
                  <span className="font-semibold text-white">Leaper.</span>{" "}
                  Slightly lower health, can do a leap attack
                </li>
                <li>
                  <span className="font-semibold text-white">
                    {" "}
                    + MORE{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>

            {/* Nightmares */}
            <div className="relative rounded-xl border-2 border-dashed border-amber-500/60 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="absolute top-3 right-3 flex gap-2">
                <div className="rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
                  WIP
                </div>
                <div className="rounded bg-red-600/20 px-2 py-1 text-xs font-bold text-red-400">
                  BOSS
                </div>
              </div>
              <h3 className="mb-3 text-lg font-bold text-red-400">
                Nightmares
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="font-semibold text-white">Butcher.</span>{" "}
                  Wields a giant cleaver, fast, and will eat your friends
                </li>
                <li>
                  <span className="font-semibold text-white">Tickle.</span>{" "}
                  Stretched arms that can attack at a increased range
                </li>
                <li>
                  <span className="font-semibold text-white">Seethe.</span> A
                  blackened entity that gives blindness to those it affects
                </li>
                <li>
                  <span className="font-semibold text-white">
                    {" "}
                    + MORE{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* Gameplay Systems */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Gameplay Systems
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Wave System */}
            <div className="rounded-2xl border border-red-900/20 bg-red-950/10 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Wave System
              </h3>
              <p className="mb-3 text-gray-300">
                Survivors face six waves of escalating undead assault. Each wave
                brings deadlier strains and more relentless attackers. The horde
                learns from your tactics, adapting their approach as the night
                wears on.
              </p>
              <p className="text-sm text-gray-400">
                If the final timer expires, Overtime triggers. The undead grow
                stronger every minute until extraction or extinction.
              </p>
            </div>

            {/* Barricading */}
            <div className="rounded-2xl border border-red-900/20 bg-red-950/10 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Barricade System
              </h3>
              <p className="mb-3 text-gray-300">
                Turn the environment against the horde. Prop fortifications,
                seal entry points, and hold the line against relentless
                assaults.
              </p>
              <p className="text-sm text-gray-400">
                Engineers raise automated defenses. Alchemists rig traps that
                slow or detonate the undead. Barricades hold only as long as
                their foundations stand.
              </p>
            </div>

            {/* Economy */}
            <div className="relative rounded-2xl border-2 border-dashed border-amber-500/60 bg-red-950/10 p-8 backdrop-blur-sm">
              <div className="absolute top-3 right-3 z-10 rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
                WIP
              </div>
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Economy &amp; Progression
              </h3>
              <p className="mb-3 text-gray-300">
                Every action earns its weight. Destroying undead, healing
                allies, repairing fortifications, and supporting the team all
                build your resource pool.
              </p>
              <p className="text-sm text-gray-400">
                The Arsenal Shop offers weapons and equipment for those with
                enough points. Upgrade your arsenal with scrap, unlock skills to
                specialize your role, or embrace Ascending to reset your
                progress for greater challenges and unique rewards.
              </p>
            </div>

            {/* Victory */}
            <div className="rounded-2xl border border-red-900/20 bg-red-950/10 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Victory Conditions
              </h3>
              <p className="mb-3 text-gray-300">
                Defend the Arcane Sigil through the final assault to open a
                portal to the next linked Gravescape. The undead claim victory
                by overwhelming all human resistance and corrupting the sigil
                itself.
              </p>
              <p className="text-sm text-gray-400">
                The sigils form a network, each one protecting humanity by
                creating escape routes to other Gravescapes. Endure the
                Gravescape and be rewarded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* Closing CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="mb-8 text-center text-2xl font-semibold text-red-300 md:text-3xl">
            Will you carry the curse... Or Break it?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://sbox.game/fss/bloodsigil"
              className="flex items-center rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center">
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 29 17"
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M2.893,15.475C2.085,15.165,1.379,14.669,0.842,14.034C0.349,13.446,0.056,12.737,0.000,11.996L3.850,11.996C3.869,12.191,3.935,12.380,4.041,12.549C4.147,12.719,4.292,12.866,4.465,12.979C4.855,13.240,5.328,13.375,5.810,13.362C6.207,13.384,6.601,13.293,6.938,13.100C7.060,13.028,7.161,12.928,7.230,12.811C7.300,12.693,7.336,12.562,7.336,12.428C7.337,12.266,7.282,12.107,7.181,11.974C7.079,11.840,6.934,11.739,6.767,11.685C6.169,11.462,5.552,11.283,4.922,11.152C4.148,10.994,3.387,10.788,2.644,10.536C2.035,10.320,1.495,9.968,1.072,9.512C0.630,9.044,0.410,8.414,0.410,7.619C0.404,6.967,0.614,6.329,1.013,5.789C1.459,5.208,2.075,4.755,2.790,4.483C3.674,4.145,4.626,3.981,5.583,4.002C7.178,4.002,8.435,4.365,9.353,5.090C10.276,5.822,10.846,6.859,10.937,7.975L7.336,7.975C7.314,7.788,7.251,7.606,7.151,7.440C7.051,7.275,6.917,7.129,6.755,7.012C6.383,6.763,5.929,6.639,5.468,6.658C5.101,6.637,4.735,6.721,4.421,6.898C4.305,6.971,4.210,7.069,4.146,7.184C4.082,7.299,4.051,7.427,4.055,7.557C4.056,7.721,4.113,7.882,4.217,8.017C4.320,8.151,4.467,8.253,4.636,8.309C5.220,8.532,5.827,8.700,6.447,8.811C7.228,8.988,7.997,9.208,8.750,9.469C9.356,9.695,9.892,10.054,10.310,10.515C10.781,11.063,11.025,11.747,10.998,12.444C11.007,13.100,10.787,13.741,10.370,14.274C9.910,14.840,9.287,15.277,8.571,15.537C7.707,15.859,6.781,16.016,5.849,15.999C4.835,16.014,3.828,15.836,2.893,15.475Z" />
                    <path d="M24.821,15.755L23.455,14.368C22.096,15.456,20.471,16.000,18.582,15.998C17.567,16.022,16.558,15.823,15.621,15.413C14.834,15.072,14.158,14.499,13.677,13.762C13.215,13.020,12.980,12.149,13.001,11.264C12.991,10.329,13.251,9.413,13.746,8.635C14.311,7.791,15.084,7.125,15.983,6.708C15.656,6.304,15.393,5.847,15.207,5.354C15.051,4.900,14.975,4.421,14.982,3.939C14.975,3.230,15.165,2.534,15.529,1.937C15.917,1.315,16.468,0.824,17.115,0.521C17.893,0.157,18.739,-0.020,19.591,0.003C20.440,-0.025,21.284,0.165,22.048,0.554C22.679,0.880,23.205,1.392,23.561,2.029C23.897,2.643,24.058,3.347,24.024,4.055L20.648,4.055C20.665,3.890,20.649,3.723,20.600,3.565C20.551,3.408,20.471,3.262,20.365,3.139C20.256,3.028,20.126,2.942,19.983,2.886C19.841,2.831,19.689,2.807,19.537,2.816C19.229,2.806,18.929,2.916,18.695,3.125C18.586,3.223,18.500,3.345,18.442,3.482C18.384,3.619,18.356,3.768,18.360,3.918C18.370,4.261,18.468,4.595,18.643,4.885C18.898,5.314,19.200,5.709,19.543,6.064L23.144,9.741C23.178,9.651,23.216,9.563,23.259,9.477C23.308,9.373,23.360,9.255,23.417,9.123L24.168,7.736L27.769,7.736L26.761,9.651C26.388,10.507,25.953,11.332,25.460,12.118L29.000,15.755L24.821,15.755Z" />
                  </g>
                </svg>
                box
              </span>
            </a>
            <a
              href="https://discord.gg/GXZsHu3KQF"
              className="flex items-center gap-2 rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              Discord
            </a>
            <a
              href="/bloodsigil/wiki"
              className="flex items-center gap-2 rounded-lg border border-red-500 bg-transparent px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Wiki
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
