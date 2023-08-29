import { Button } from "flowbite-react";
import { Link, Navigate, useParams } from "react-router-dom";
import paper from "./paper.png";
import rock from "./rock.jpg";
import scissor from "./scissor.png";

interface RocksProps {
  computerPlayer: string;
  user: string;
}

export const Choice = ({ computerPlayer, user }: RocksProps) => {
  const params = useParams();

  function getWinner() {
    if (params.choice === computerPlayer) {
      return "Its a draw";
    }

    if (
      (params.choice === "rock" && computerPlayer === "paper") ||
      (params.choice === "rock" && computerPlayer === "scissor") ||
      (params.choice === "paper" && computerPlayer === "scissor")
    ) {
      return "Computer wins!";
    }

    return `${user} wins 🎊!`;
  }

  if (!computerPlayer) {
    return <Navigate to="/game" />;
  }

  let choiceImage = { rock, paper, scissor };

  return (
    <div className=" p-10 bg-blue-100 h-screen ">
      <div className="flex gap-4 max-w-md flex-col border-4 rounded-2xl h-full p-5 ">
        <div className="flex gap-5 pt-20">
          <div>
            <div>{user}</div>
            <div style={{ textTransform: "capitalize" }}>
              {params.choice && (
                <img
                  className="h-30 "
                  alt=""
                  src={choiceImage[params.choice as keyof typeof choiceImage]}
                />
              )}
            </div>
          </div>
          <div>
            <div>Computer</div>
            <div style={{ textTransform: "capitalize" }}>
              {computerPlayer && (
                <img
                  className="h-35 "
                  alt=""
                  src={choiceImage[computerPlayer as keyof typeof choiceImage]}
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-2xl">{getWinner()}</div>
        <Button>
          <Link to="/game">Replay</Link>
        </Button>
      </div>
    </div>
  );
};
