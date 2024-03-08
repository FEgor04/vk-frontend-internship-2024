import { Button, ButtonGroup, Group, PanelHeader } from "@vkontakte/vkui";

type Props = {
  goToAgify: () => void;
};

export function CatfactPanel({ goToAgify }: Props) {
  return (
    <>
      <PanelHeader>Catfact</PanelHeader>
      <Group>
        <ButtonGroup>
          <Button>Загрузить котофакт</Button>
          <Button appearance="neutral" onClick={goToAgify}>
            Перейти к форме
          </Button>
        </ButtonGroup>
      </Group>
    </>
  );
}
