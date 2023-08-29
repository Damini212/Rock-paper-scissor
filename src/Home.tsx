import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
("use client");
import { Button, Label, TextInput } from "flowbite-react";

interface HomeProps {
  setUserName: (userName: string) => void;
  userName: string;
  setUser: (userName: string) => void;
  user: string;
}

export const Home = ({ setUserName, userName, setUser }: HomeProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }
  function addUserName() {
    setUser(userName);
    setUserName("");
  }
  return (
    <div className="p-10 bg-blue-100 h-screen ">
      <div className="flex content-center max-w-md flex-col gap-4 border-4 rounded-2xl h-full p-5 ">
        <h1 className="text-2xl ">Welcome To The Rock Paper Scissor Game</h1>
        <h3>Please add a username to start the game</h3>
        <form onSubmit={addUserName}>
          <div className="mb-2 block">
            <Label htmlFor="userName" value="User Name : " />
          </div>
          <TextInput
            type="text"
            onChange={handleChange}
            value={userName}
            id="userName"
            required
          />
          <Link to="/game">
            <br />
            <Button
              disabled={!userName.length}
              type="submit"
              onClick={addUserName}
            >
              Enter
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
