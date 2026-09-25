import Image from "next/image";
import Link from "next/link";

interface Game {
  id: number;
  ident: string;
  title: string;
  description: string;
  image: string;
  platforms: string[];
  releaseStatus: string;
  href?: string;
}

interface FilamentCardProps {
  game: Game;
}

export default function FilamentCard({ game }: FilamentCardProps) {
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case "halted":
        return "bg-red-500";
      case "in development":
      case "in progress":
        return "bg-yellow-500";
      case "released":
        return "bg-green-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:shadow-blue-500/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          width={800}
          height={450}
          className={`h-full w-full object-cover ${game.ident === "bloodsigil" ? "object-[center_50%]" : ""}`}
        />
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          {game.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded bg-black/60 px-2 py-1 text-xs text-gray-200 backdrop-blur-sm"
            >
              {platform}
            </span>
          ))}
        </div>
        <div
          className={`absolute top-2 right-2 ${getStatusColor(game.releaseStatus)} z-10 rounded px-2 py-1 text-xs text-white`}
        >
          {game.releaseStatus}
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{game.title}</h3>
        <p className="mb-4 min-h-12 flex-grow text-gray-300">
          {game.description}
        </p>
        {game.href ? (
          <div className="flex justify-center gap-3">
            <Link
              href={game.href}
              className="inline-block rounded border border-blue-500 bg-transparent px-8 py-1.5 text-center text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
            >
              Learn More
            </Link>
            <a
              href={`https://sbox.game/fss/${game.ident}`}
              className="inline-block rounded bg-blue-500 px-8 py-1.5 text-center text-white transition-colors hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </a>
          </div>
        ) : (
          <a
            href={`https://sbox.game/fss/${game.ident}`}
            className="inline-block self-center rounded border border-blue-500 bg-transparent px-8 py-1.5 text-center text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export { FilamentCard };
