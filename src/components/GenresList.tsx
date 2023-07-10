import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "./services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <></>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize="32px"
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="md"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
