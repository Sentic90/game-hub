import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CiticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CiticScore;
