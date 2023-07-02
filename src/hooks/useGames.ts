import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../components/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchedGamesResponse {
  count: number;
  result: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchedGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.result))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  // Object returning from Hooks
  return { games, error };
};

export default useGames;
