import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import logo from "../assets/logo.webp";
import GameCard from "./GameCard";

// Mock games
const games = [
  { id: 1, name: "GTA5", background_image: logo },
  { id: 2, name: "PES 2023", background_image: logo },
  { id: 3, name: "FIFA 2022", background_image: logo },
  { id: 4, name: "The Last of US", background_image: logo },
  { id: 5, name: "Need For Speed", background_image: logo },
  { id: 6, name: "Max Payne 3", background_image: logo },
];
const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
