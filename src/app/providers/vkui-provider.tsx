import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Panel,
  View,
} from "@vkontakte/vkui";
import { useState } from "react";
import { AgifyPanel } from "@/pages/agify";
import { CatfactPanel } from "@/pages/catfact";

export function VkUiProvider() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <MainScreens />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

const MainScreens = () => {
  const [activePanel, setActivePanel] = useState<"catfact" | "agify">(
    "catfact",
  );

  const goToAgify = () => setActivePanel("agify");

  return (
    <View activePanel={activePanel}>
      <Panel id="catfact">
        <CatfactPanel goToAgify={goToAgify} />
      </Panel>
      <Panel id="agify">
        <AgifyPanel />
      </Panel>
    </View>
  );
};
