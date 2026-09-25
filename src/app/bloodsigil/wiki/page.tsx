import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Bloodsigil Wiki",
  description:
    "Guide to playing Bloodsigil, building maps, and understanding game systems.",
};

export default function WikiPage() {
  return (
    <div className="bg-gradient-to-b from-[#1a0000] via-[#1a0505] via-[#2a0a0a] to-[#0d0000] text-white">
      {/* Navigation */}
      <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-4">
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
                href="/bloodsigil"
                className="group flex items-center gap-2 transition hover:text-red-400"
              >
                <svg
                  className="h-5 w-5 text-white transition group-hover:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Bloodsigil
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Games
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-10 pt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-5 flex justify-center">
            <Image
              src="/images/bloodsigil/Bloodsigil-logo.png"
              alt="Bloodsigil"
              width={1000}
              height={500}
              priority
              className="h-auto w-[300px] md:w-[600px] lg:w-[600px]"
            />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-400 md:text-4xl">
            Wiki
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            A guide to survival/extermination, barricading, and the systems for
            such.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-10">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-red-900/30 bg-red-950/20 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-red-400">Contents</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-1 text-sm md:grid-cols-2">
              <a href="#how-to-play" className="text-gray-300 hover:text-white">
                1. How to Play
              </a>
              <a href="#barricading" className="text-gray-300 hover:text-white">
                4. Barricading
              </a>
              <a href="#game-flow" className="text-gray-300 hover:text-white">
                2. Game Flow &amp; Rounds
              </a>
              <a href="#map-making" className="text-gray-300 hover:text-white">
                5. Map Making Guide
              </a>
              <a href="#weapons" className="text-gray-300 hover:text-white">
                3. Weapons &amp; Combat
              </a>
              <a
                href="#component-reference"
                className="text-gray-300 hover:text-white"
              >
                6. Component Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* HOW TO PLAY */}
      {/* ============================================ */}
      <section id="how-to-play" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">1. How to Play</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">Objective</h3>
              <div className="mb-3 flex items-start gap-3 text-gray-300">
                <Image
                  src="/images/bloodsigil/survivoricon.png"
                  alt="Humans"
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <p>
                  <span className="font-semibold text-white">Humans</span> must
                  survive six waves of escalating zombie attacks and escape
                  through the portal after the final wave. Build barricades, buy
                  weapons, and protect the Arcane Sigil.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <Image
                  src="/images/bloodsigil/zombieicon.png"
                  alt="Zombies"
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <p>
                  <span className="font-semibold text-white">Zombies</span> must
                  eliminate all humans. Every human who falls rises as one of
                  the horde. Tear down barricades, overwhelm the survivors, and
                  let nothing escape.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Controls &amp; Actions
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Movement</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>
                      <Key>WASD</Key> - Move
                    </li>
                    <li>
                      <Key>Shift</Key> - Sprint
                    </li>
                    <li>
                      <Key>Space</Key> - Jump
                    </li>
                    <li>
                      <Key>Ctrl</Key> - Crouch
                    </li>
                    <li>
                      <Key>Z</Key> - Phase through foundations
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Combat</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>
                      <Key>LMB</Key> - Primary attack
                    </li>
                    <li>
                      <Key>RMB</Key> - Secondary attack / ADS
                    </li>
                    <li>
                      <Key>R</Key> - Reload
                    </li>
                    <li>
                      <Key>E</Key> - Use / interact
                    </li>
                    <li>
                      <Key>G</Key> - Drop weapon
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">
                    Weapons &amp; Items
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>
                      <Key>1</Key>–<Key>6</Key> - Weapon slots
                    </li>
                    <li>
                      <Key>Scroll</Key> - Cycle weapons
                    </li>
                    <li>
                      <Key>Mouse4</Key> / <Key>Mouse5</Key> - Previous / Next
                      slot
                    </li>
                    <li>
                      <Key>Alt</Key> - Inventory
                    </li>
                    <li>
                      <Key>B</Key> - Buy menu
                    </li>
                    <li>
                      <Key>F</Key> - Flashlight
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">
                    Buildables &amp; Communication
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>
                      <Key>E</Key> - Grab / release object
                    </li>
                    <li>
                      Hold <Key>R</Key> + mouse - Rotate held object
                    </li>
                    <li>
                      <Key>Scroll</Key> - Push / pull distance
                    </li>
                    <li>
                      <Key>X</Key> - Freeze buildable (Hammer)
                    </li>
                    <li>
                      <Key>V</Key> - Voice chat
                    </li>
                    <li>
                      <Key>Enter</Key> - Text chat
                    </li>
                    <li>
                      <Key>Tab</Key> - Scoreboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Currency System
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-semibold text-yellow-400">
                    Worth Points
                  </span>{" "}
                  are granted during Preparation. Spend them at the Worth Shop
                  for your starting loadout. They reset once the first wave
                  begins.
                </p>
                <p>
                  <span className="font-semibold text-green-400">
                    Regular Points
                  </span>{" "}
                  are earned by humans for fighting zombies. Spend them at
                  Arsenal Crates deployed during the match.
                </p>
                <p>
                  <span className="font-semibold text-purple-400">
                    Dark Points
                  </span>{" "}
                  are earned by zombies through destruction and violence against
                  the living. Spend them at the Dark Shop to obtain upgrades.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Image
                  src="/images/bloodsigil/bloodarmor.png"
                  alt="Blood Armor"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-xl font-bold text-red-400">Blood Armor</h3>
              </div>
              <p className="text-gray-300">
                Dealing melee damage to zombies grants{" "}
                <span className="text-white">Blood Armor</span>, a protective
                layer forged from aggression. The more violence you inflict, the
                harder you are to kill. Blood Armor absorbs a portion of
                incoming damage, rewarding those who fight on the front lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* GAME FLOW & ROUNDS */}
      {/* ============================================ */}
      <section id="game-flow" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">2. Game Flow &amp; Rounds</h2>

          <div className="space-y-4">
            <PhaseCard
              phase="Preparation"
              color="yellow"
              description="All players spawn as humans near the Sigil. Each player receives Worth Points to buy a starting loadout from the shop. Use this time to explore the map, gather buildables, and fortify your position. Any human who dies during Preparation enters a freecam and is queued to spawn as a zombie when Wave 1 begins."
            />

            <PhaseCard
              phase="Waves 1–5"
              color="red"
              description="The horde arrives. Zombie bots spawn at the start of each wave, and any human who dies joins their ranks. Waves grow longer and more dangerous as the match progresses. Between waves, brief intermissions give survivors time to regroup, resupply, and reinforce barricades. The Sigil may relocate during certain intermissions; a portal appears at its old position. Population dependant."
            />

            <PhaseCard
              phase="The Final Wave"
              color="red"
              description="Wave 6 is the endgame. When the timer expires, Overtime begins. Zombies grow stronger over time and the wave only ends when all humans have escaped or fallen. There is no mercy in Overtime."
            />

            <PhaseCard
              phase="Ending"
              color="gray"
              description="Results are displayed. If map voting is enabled, players vote on the next map before the server transitions."
            />
          </div>

          <div className="relative mt-6 rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-950/10 p-6">
            <div className="absolute right-3 top-3 z-10 rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
              WIP
            </div>
            <h3 className="mb-2 text-lg font-bold text-purple-400">
              Map Progression
            </h3>
            <p className="text-gray-300">
              Bloodsigil features a special map progression system that carries
              over between games. The outcome of each match influences the next
              map:
            </p>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-red-400">
                  Zombie Victory
                </span>{" "}
                shifts the world toward{" "}
                <span className="text-white">Chaotic</span> maps. These are
                beaten-down, ruined environments reflecting the undead triumph.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Human Victory
                </span>{" "}
                shifts the world toward{" "}
                <span className="text-white">Orderly</span> maps. These are
                liminal, pristine spaces representing humanitys&apos; hold.
              </li>
            </ul>
            <p className="mt-3 text-gray-300">
              Performance from either team further shapes the voting pool.
              Strong performances expand your side&apos;s map options for the
              next round.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-red-900/20 bg-red-950/10 p-6">
            <h3 className="mb-2 text-lg font-bold text-red-400">
              Zombie Conversion
            </h3>
            <p className="text-gray-300">
              When a human dies during an active wave, they don&apos;t respawn;
              they rise as a zombie, turning against their former allies. Zombie
              players who fall respawn at zombie spawn points after a short
              delay. There is no coming back. Zombies who eat enough brains can
              redeem back to the human team.
            </p>
            <p className="mt-2 text-gray-300">
              Deaths during <span className="text-white">Preparation</span> are
              handled differently: the player enters a freecam and is queued to
              spawn as a zombie at the start of Wave 1 rather than converting
              immediately.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-yellow-900/30 bg-yellow-950/10 p-6">
            <h3 className="mb-2 text-lg font-bold text-yellow-400">
              Replay System
            </h3>
            <p className="text-gray-300">
              If the humans are wiped out too early, the game may trigger a{" "}
              <span className="text-white">Replay</span>. The match resets to
              Wave 1 and everyone gets another chance. Only one replay is
              allowed per game.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* WEAPONS & COMBAT */}
      {/* ============================================ */}
      <section id="weapons" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">3. Weapons &amp; Combat</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Weapon Slots
              </h3>
              <p className="mb-4 text-gray-300">
                Players carry weapons across multiple slots, accessible with the
                number keys <Key>1</Key>–<Key>6</Key> or the scroll wheel. Slots
                are categorized by weapon type: primary firearms, sidearms,
                melee weapons, tools, and deployables. Every player starts with
                their fists. You&apos;re not limited to how many you can hold.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                {(
                  [
                    {
                      name: "Primary",
                      icon: "/images/bloodsigil/m4a1.png",
                      example: "M4A1",
                    },
                    {
                      name: "Secondary",
                      icon: "/images/bloodsigil/usp.png",
                      example: "USP",
                    },
                    {
                      name: "Melee",
                      icon: "/images/bloodsigil/fists.png",
                      example: "Fists",
                    },
                    {
                      name: "Tool",
                      icon: "/images/bloodsigil/hammer.png",
                      example: "Hammer",
                    },
                    {
                      name: "Consumables",
                      icon: "/images/bloodsigil/grenade.png",
                      example: "Grenade",
                    },
                    {
                      name: "Deployable",
                      icon: "/images/bloodsigil/arsenalcrate.png",
                      example: "Arsenal Crate",
                    },
                  ] as const
                ).map((slot) => (
                  <div
                    key={slot.name}
                    className="flex items-center gap-3 rounded bg-white/5 px-3 py-2 text-gray-300"
                  >
                    {slot.icon ? (
                      <Image
                        src={slot.icon}
                        alt={slot.name}
                        width={48}
                        height={48}
                        className="shrink-0 object-contain"
                      />
                    ) : (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white/5 text-xs text-gray-500">
                        ?
                      </span>
                    )}
                    <div>
                      <div className="font-semibold text-white">
                        {slot.name}
                      </div>
                      {slot.example && (
                        <div className="text-xs text-gray-500">
                          e.g. {slot.example}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Combat Overview
              </h3>
              <p className="mb-3 text-gray-300">
                Weapons range from pistols and shotguns to assault rifles and
                energy weapons, each with their own ammo type. Headshots deal
                increased damage. All combat is lag-compensated, so what you see
                on your screen is what counts.
              </p>
              <p className="text-gray-300">
                The <span className="text-white">Hammer</span> is a
                multi-purpose tool: it repairs damaged buildables, places and
                removes nails, and can freeze objects in place with <Key>X</Key>
                .
              </p>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Ammo Types
              </h3>
              <p className="mb-3 text-sm text-gray-400">
                Different weapons consume different ammunition. Keep your
                reserves stocked.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Pistol",
                  "Shotgun",
                  "SMG",
                  "Assault",
                  "Sniper",
                  "Energy",
                  "Scrap",
                  "Nail",
                  "Medicine",
                ].map((ammo) => (
                  <span
                    key={ammo}
                    className="rounded-full border border-red-900/20 bg-red-950/20 px-3 py-1 text-gray-300"
                  >
                    {ammo}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Arsenal Crates
              </h3>
              <p className="text-gray-300">
                Arsenal Crates are portable weapon shops that players can
                purchase and deploy into the world. Once placed, any human can
                interact with a crate to buy weapons and supplies using Regular
                Points. Each player can only deploy one if they dont have one
                already or far enough away from another Arsenal Crate. Crates
                can be destroyed by zombies, so place them wisely.
              </p>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Resupply Crates
              </h3>
              <p className="text-gray-300">
                A deployable resupply station that humans can place in the
                world. Once active, nearby players can interact with it to
                restock ammunition. Can be destroyed by zombies.
              </p>
            </div>

            <div className="relative rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-950/10 p-6">
              <div className="absolute right-3 top-3 rounded bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-400">
                WIP
              </div>
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Remantlers
              </h3>
              <p className="text-gray-300">
                <span className="font-semibold text-white"></span>A
                deployable tool station that will let nearby players upgrade their equipment.
              </p>
              <p className="mt-3 text-sm text-gray-300">
                Weapons have tiers. Higher tiers unlock as the game progresses.
                <br></br>
                Add specific attachments to uptick your weapon&apos;s tier,
                e.g. USP with a mag upgrade becomes USP+1.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* BARRICADING */}
      {/* ============================================ */}
      <section id="barricading" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">4. Barricading</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Buildable Objects
              </h3>
              <p className="mb-3 text-gray-300">
                Scattered throughout the map are physics objects (furniture,
                crates, shelving, appliances) that can be grabbed, carried, and
                positioned to form barricades. Press <Key>E</Key> to grab an
                object, use the scroll wheel to push or pull it, and hold{" "}
                <Key>R</Key> while moving the mouse to rotate it. Each buildable
                has health that determines how much punishment it can withstand.
              </p>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Nail System
              </h3>
              <p className="mb-3 text-gray-300">
                Use the Hammer&apos;s secondary attack to nail buildables to
                walls, floors, or other buildables. Each buildable supports up
                to 4 nails. Nails create rigid constraints between objects,
                holding your barricade together.
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  Nailing to the world creates a{" "}
                  <span className="text-white">Foundation</span>. The buildable
                  freezes in place and anchors everything connected to it
                </li>
                <li>
                  Foundations anchor entire{" "}
                  <span className="text-white">clusters</span> (up to 3 hops
                  from a foundation) of connected buildables
                </li>
                <li>
                  Each nail contributes a quarter of the buildable&apos;s base
                  health; repairs grant 5s of reinforced 10% damage reduction
                </li>
                <li>
                  Hold <Key>R</Key> on a buildable with the Hammer to remove all
                  its nails
                </li>
                <li>
                  Destroying a foundation can collapse the entire cluster it
                  supports
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Health &amp; Destruction
              </h3>
              <p className="mb-3 text-gray-300">
                Only zombies can damage buildables. Destroying barricade objects
                awards Dark Points to the attacker. When a buildable is
                destroyed, it shatters and is removed from the scene.
              </p>
              <p className="text-gray-300">
                The Hammer&apos;s primary attack repairs damaged buildables.
                Keep your barricades maintained. Neglected walls crumble fast.
              </p>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">Phasing</h3>
              <p className="text-gray-300">
                Humans can press <Key>Z</Key> to{" "}
                <span className="text-white">phase</span> through foundation
                buildables at greatly reduced speed. This lets you pass through
                your own barricades without dismantling them, though you&apos;re
                vulnerable while phasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* MAP MAKING GUIDE */}
      {/* ============================================ */}
      <section id="map-making" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">5. Map Making Guide</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Required Components
              </h3>
              <p className="mb-4 text-gray-300">
                Every Bloodsigil map needs the following GameObjects and
                components for the game to function:
              </p>
              <div className="space-y-3">
                <MapRequirement
                  name="BloodsigilSpawnPoint (Human)"
                  required="Multiple"
                  description="Spawn locations for human players. Set IsZombie to false. Human spawn points also come from the Sigil prefab itself (it contains a child spawn point), but additional ones can be placed throughout the defensible area."
                />
                <MapRequirement
                  name="BloodsigilSpawnPoint (Zombie)"
                  required="Multiple"
                  description="Spawn locations for zombie players and bots. Set IsZombie to true. Place these away from the human area so zombies have to fight their way in."
                />
                <MapRequirement
                  name="SigilSpawnPoint"
                  required="2–3 minimum"
                  description="Locations where the Sigil can appear. The game picks one at random on start, and the Sigil relocates to a different one during certain intermissions. Place at least 2–3 in distinct areas of the map."
                />
                <MapRequirement
                  name="Buildable Objects"
                  required="Many"
                  description="Physics props are automatically converted to Buildables on load. Total HP is determined by prop mass, so mappers must create physics primitives on props via modeldoc or override the health in the buildable component."
                />
                <MapRequirement
                  name="NavMesh"
                  required="Required"
                  description="A NavMesh is essential for zombie AI pathfinding. Without it, bots and AFK zombie players cannot navigate. Ensure all walkable surfaces are covered and add blocker areas at your discretion."
                />
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Optional Components
              </h3>
              <div className="space-y-3">
                <MapRequirement
                  name="Door Prefabs"
                  required="Optional"
                  description="Interactive doors with the Door component. Configurable open angle, speed, rotation axis, and auto-close behavior. Doors open toward or away from the player contextually."
                />
              </div>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Testing Your Map
              </h3>
              <p className="mb-3 text-gray-300">
                Mappers can host a restricted{" "}
                <span className="text-white">Map Test</span> session without
                needing to be on the official whitelist.
                <br></br>
                <br></br>
                Add the following to your S&amp;box host launch arguments:
              </p>
              <pre className="mb-4 overflow-x-auto rounded-lg bg-black/40 px-4 py-3 font-mono text-sm text-green-400">
                +bs_maptest 1
              </pre>
              <p className="mb-3 text-gray-300">
                When this convar is set the server creates a{" "}
                <span className="text-white">Friends Only</span> lobby capped at{" "}
                <span className="text-white">4 players</span>. The lobby name is
                automatically set to{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs text-white">
                  [Map Test] &lt;Map Title&gt;
                </code>
                , so collaborators can find it in the Steam friends list or
                server browser.
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <span className="font-semibold text-white">
                    Listen server:
                  </span>{" "}
                  share your Steam ID and friends can connect via{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs text-white">
                    connect &lt;SteamID&gt;
                  </code>{" "}
                  or join through the Steam friends list.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Dedicated server:
                  </span>{" "}
                  the session appears in the server browser and Steam friends
                  list automatically.
                </li>
                <li>
                  A yellow <span className="text-white">MAP TEST MODE</span>{" "}
                  overlay is shown to all connected players as a reminder.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-900/20 bg-red-950/10 p-6">
              <h3 className="mb-3 text-xl font-bold text-red-400">
                Design Tips
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Place{" "}
                  <span className="text-white">
                    sigil spawns in distinct areas
                  </span>{" "}
                  so each relocation feels like defending a new position.
                </li>
                <li>
                  Give{" "}
                  <span className="text-white">
                    zombies multiple routes of attack
                  </span>
                  . Avoid single-choke designs that make barricading trivial.
                </li>
                <li>
                  Scatter{" "}
                  <span className="text-white">plenty of physics props</span>{" "}
                  throughout the map as barricade building materials.
                </li>
                <li>
                  <span className="text-white">Bake NavMesh</span> over all
                  walkable surfaces, this includes `Is Blocker` area navmesh
                  objects. You should also make `leap-required` navmesh links
                  that can tell AI and bots with leaping capabilities to
                  traverse via their abilities.
                </li>
                <li>
                  Consider <span className="text-white">vertical gameplay</span>
                  . Zombies can jump over low barricades.
                </li>
                <li>
                  You only need to place zombie spawns and sigil spawns
                  explicitly. Human spawn points come from the Sigil prefab
                  itself, which contains a BloodsigilSpawnPoint child object.
                </li>
                <li>
                  Add the{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs text-white">
                    nobuild
                  </code>{" "}
                  tag to props you do not want players to nail barricades to.
                  Objects with this tag are excluded from nail placement traces.
                  Use it on scenery, decorative geometry, or any surface that
                  should remain unnailable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================ */}
      {/* COMPONENT REFERENCE */}
      {/* ============================================ */}
      <section id="component-reference" className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold">6. Component Reference</h2>
          <p className="mb-6 text-gray-400">
            Components and data assets that mappers place or configure directly
            in the S&amp;box scene editor. Engine-internal systems are excluded.
          </p>

          {/* Spawn Points */}
          <h3 className="mb-4 text-lg font-bold text-red-400">Spawn Points</h3>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-red-900/30">
                  <th className="pb-2 pr-4 font-semibold text-gray-300">
                    Component
                  </th>
                  <th className="pb-2 font-semibold text-gray-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <ComponentRow
                  name="BloodsigilSpawnPoint"
                  description="Marks where players spawn. Set IsZombie to true for zombie spawns, false for human spawns"
                />
                <ComponentRow
                  name="SigilSpawnPoint"
                  description="Marks a potential sigil location. The game picks one at random on start and may relocate between waves. Place at least 2–3 in distinct areas"
                  isLast
                />
              </tbody>
            </table>
          </div>

          {/* Buildables */}
          <h3 className="mb-4 text-lg font-bold text-red-400">Buildables</h3>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-red-900/30">
                  <th className="pb-2 pr-4 font-semibold text-gray-300">
                    Component
                  </th>
                  <th className="pb-2 font-semibold text-gray-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <ComponentRow
                  name="Buildable"
                  description="Automatically added to physics props on load. No manual placement needed. HP is derived from the prop's mass, so mappers must set up physics primitives in modeldoc. Props need a Rigidbody, collider, renderer, and NavMeshArea. Mappers can override health by manually adding Buildable components to props"
                  isLast
                />
              </tbody>
            </table>
          </div>

          {/* World Objects */}
          <h3 className="mb-4 text-lg font-bold text-red-400">World Objects</h3>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-red-900/30">
                  <th className="pb-2 pr-4 font-semibold text-gray-300">
                    Component
                  </th>
                  <th className="pb-2 font-semibold text-gray-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <ComponentRow
                  name="Door"
                  description="Interactive door players can open and close. Configure rotation axis, open angle, speed, and auto-close behavior"
                  isLast
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Divider />

      {/* Back link */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/bloodsigil"
            className="inline-block rounded-lg border border-red-500 bg-transparent px-6 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Back to Bloodsigil
          </Link>
        </div>
      </section>

      <Divider />
    </div>
  );
}

/* ============================================ */
/* Reusable sub-components */
/* ============================================ */

function Divider() {
  return (
    <div className="my-8 flex justify-center">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </div>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">{children}</kbd>
  );
}

interface PhaseCardProps {
  phase: string;
  color: string;
  description: string;
}

function PhaseCard({ phase, color, description }: PhaseCardProps) {
  const colorMap: Record<string, string> = {
    yellow: "text-yellow-400 border-yellow-900/30",
    red: "text-red-400 border-red-900/20",
    gray: "text-gray-400 border-gray-700/30",
  };
  const classes = colorMap[color] ?? "text-gray-400 border-red-900/20";
  const [textClass, borderClass] = classes.split(" ");

  return (
    <div
      className={`rounded-xl border ${borderClass} bg-red-950/10 p-4 backdrop-blur-sm`}
    >
      <h3 className={`mb-1 text-lg font-bold ${textClass}`}>{phase}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

interface MapRequirementProps {
  name: string;
  required: string;
  description: string;
}

function MapRequirement({ name, required, description }: MapRequirementProps) {
  return (
    <div className="rounded-lg bg-white/5 p-3">
      <div className="mb-1 flex items-baseline justify-between">
        <code className="text-xs font-bold text-white">{name}</code>
        <span className="rounded-full bg-red-900/30 px-2 py-0.5 text-xs text-red-300">
          {required}
        </span>
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}

interface ComponentRowProps {
  name: string;
  description: string;
  isLast?: boolean;
}

function ComponentRow({ name, description, isLast }: ComponentRowProps) {
  return (
    <tr className={isLast ? "" : "border-b border-red-900/10"}>
      <td className="py-2 pr-4 font-mono text-xs text-white">{name}</td>
      <td className="py-2">{description}</td>
    </tr>
  );
}
