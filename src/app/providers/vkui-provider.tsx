import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Panel,
  View,
} from "@vkontakte/vkui";

export const VkUiProvider = () => (
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
);
