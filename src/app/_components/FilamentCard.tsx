import Image from "next/image";

interface Game {
  id: number;
  ident: string;
  title: string;
  description: string;
  image: string;
  platforms: string[];
  releaseStatus: string;
}

interface FilamentCardProps {
  game: Game;
}

export function FilamentCard({ game }: FilamentCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-blue-500/20">
      <div className="relative h-48">
        <Image 
          src={game.image} 
          alt={game.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {game.releaseStatus}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-300 mb-4">{game.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {game.platforms.map(platform => (
            <span 
              key={platform} 
              className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded"
            >
              {platform}
            </span>
          ))}
        </div>
        <a 
          href={`https://sbox.game/fss/${game.ident}`} 
          className="inline-block w-full text-center bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white px-4 py-2 rounded transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
