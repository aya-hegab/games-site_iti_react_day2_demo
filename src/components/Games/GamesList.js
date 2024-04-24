import { useState } from "react";
import { gamesList } from "./data";
import GameCard from "./GameCard";

const GamesList = () => {
    const [games, setGames] = useState(gamesList);

    const deleteGame = (id) => {
        const filteredGamesList = games.filter((game) => game.id !== id);
        setGames(filteredGamesList);
    }

    return (
        <>
            <h1>Games list</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {games.map((game) => {
                    return (
                        <div className="col" key={game.id}>
                            <GameCard gameItem={game} handleDeleteGameFn={(id) => deleteGame(id)} />
                            {/* <GameCard gameItem={game} handleDeleteGameFn={deleteGame}/> */}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default GamesList;
