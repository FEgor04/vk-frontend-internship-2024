import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Group,
  Panel,
  PanelHeader,
  SimpleCell,
  View,
} from "@vkontakte/vkui";

export const VkUiProvider = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Catfact</PanelHeader>
              <Group>
                <SimpleCell>Hello</SimpleCell>
              </Group>
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
