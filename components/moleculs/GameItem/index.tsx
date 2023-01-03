import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  image: string;
  gameName: string;
  gamePlatform: string;
  _id: string;
}

export default function GameItem(props: GameItemProps) {
  const { image, gameName, gamePlatform, _id } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${_id}`}>
        <a>
          <div className="blur-sharp">
            <Image
              src={image}
              width={205}
              height={270}
              alt=""
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/console.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{gameName}</p>
                <p className="fw-light text-white m-0">{gamePlatform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
