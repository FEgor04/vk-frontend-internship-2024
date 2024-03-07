import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = React.PropsWithChildren<{
  queryClient: QueryClient;
}>;

export const Providers = ({ queryClient, children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
