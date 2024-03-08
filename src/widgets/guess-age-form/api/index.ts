import { queryOptions } from "@tanstack/react-query";
import { AgifyGuess } from "../model";

async function guessAge(
  name: string,
  signal: AbortSignal,
): Promise<AgifyGuess> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: AgifyGuess = await fetch(`https://api.agify.io/?name=${name}`, {
    signal,
  }).then((it) => it.json());
  return data;
}

export const guessAgeQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["agify", name],
    queryFn: ({ signal }) => guessAge(name, signal),
  });
