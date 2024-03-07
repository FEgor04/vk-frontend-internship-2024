import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VkUiProvider } from "./vkui-provider";

type Props = {
  queryClient: QueryClient;
};

export const Providers = ({ queryClient }: Props) => (
  <QueryClientProvider client={queryClient}>
    <VkUiProvider />
  </QueryClientProvider>
);
