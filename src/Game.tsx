import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import rulesImage from "./rules.jpeg";
import paper from "./paper.png";
import rock from "./rock.jpg";
import scissor from "./scissor.png";
interface GameProps {
  user: string;
  randomItem: () => void;
}

export const Game = ({ user, randomItem }: GameProps) => {
  return (
    <div className="p-10 bg-blue-100 h-screen ">
      <div className="flex gap-4 max-w-md flex-col border-4 rounded-2xl h-full p-5 ">
        <h1 className="text-2xl">{`Welcome To The Rock Paper Scissor Game ${user}`}</h1>
        <h3 className="text-l">Please choose one to play the game</h3>
        <div className="flex gap-10">
          <Link to="/game/rock">
            <img className="h-20" src={rock} onClick={randomItem} />
          </Link>

          <Link to="/game/paper">
            <img className="h-20" src={paper} onClick={randomItem} />
          </Link>

          <Link to="/game/scissor">
            <img className="h-20" src={scissor} onClick={randomItem} />
          </Link>
        </div>
        <h2 className="text-l">Here are the rules of the game</h2>
        <img src={rulesImage} />
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};
