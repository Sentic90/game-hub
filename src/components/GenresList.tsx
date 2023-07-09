import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "./services/image-url";
const GenresList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
