import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Panel,
  View,
} from "@vkontakte/vkui";
import { useEffect, useState } from "react";
import { AgifyPanel } from "@/pages/agify";
import { CatfactPanel } from "@/pages/catfact";
import bridge from "@vkontakte/vk-bridge";

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

type PanelName = "catfact" | "agify";

const MainScreens = () => {
  const [activePanel, setActivePanel] = useState<"catfact" | "agify">(
    "catfact",
  );
  const [history] = useState<Array<PanelName>>(["catfact"]);

  function goBack() {
    if (history.length == 1) {
      void bridge.send("VKWebAppClose", { status: "success" });
      return;
    }
    history.pop();
    setActivePanel(history[history.length - 1]);
  }

  function goToPage(name: PanelName) {
    window.history.pushState({ panel: name }, name);
    setActivePanel(name);
    history.push(name);
  }

  useEffect(() => {
    window.addEventListener("popstate", () => {
      goBack();
    });
  });

  const goToAgify = () => {
    goToPage("agify");
  };
  const goToCatfact = () => {
    goToPage("catfact");
  };

  return (
    <View
      activePanel={activePanel}
      onSwipeBack={() => {
        goBack();
      }}
    >
      <Panel id="catfact">
        <CatfactPanel goToAgify={goToAgify} />
      </Panel>
      <Panel id="agify">
        <AgifyPanel goToCatfact={goToCatfact} />
      </Panel>
    </View>
  );
};
