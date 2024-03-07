import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Panel,
  View,
} from "@vkontakte/vkui";

type Props = {
  queryClient: QueryClient;
};

export const Providers = ({ queryClient }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel="catfact">
            <Panel id="catfact">
              <h1>Hello there!</h1>
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </QueryClientProvider>
);
