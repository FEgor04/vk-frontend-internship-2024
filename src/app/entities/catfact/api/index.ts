import { queryOptions } from "@tanstack/react-query";
import { Catfact } from "../model";

async function getCatfact(): Promise<Catfact> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Catfact = await fetch("https://catfact.ninja/fact").then((it) =>
    it.json(),
  );
  return data;
}

export const getCatfactQueryOptions = () =>
  queryOptions({
    queryKey: ["catfact"],
    queryFn: () => getCatfact(),
  });
