import { useCallback, useEffect, useState } from 'react';
import { GameItemTypes } from '../../../services/data-types';
import { getFeaturedGame } from '../../../services/player';
import GameItem from '../../moleculs/GameItem';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  const PUBLIC_URL = process.env.NEXT_PUBLIC_UPLOAD;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((game: GameItemTypes) => {
            return (
              <GameItem
                key={game._id}
                _id={game._id}
                image={`${PUBLIC_URL}/images/${game.thumbnail}`}
                gameName={game.name}
                gamePlatform={game.category.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
