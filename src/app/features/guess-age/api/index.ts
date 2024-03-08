import { queryOptions } from "@tanstack/react-query";
import { AgifyGuess } from "../model";

async function guessAge(name: string): Promise<AgifyGuess> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: AgifyGuess = await fetch(
    `https://api.agify.io/?name=${name}`,
  ).then((it) => it.json());
  return data;
}

export const guessAgeQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["agify", name],
    queryFn: () => guessAge(name),
  });
