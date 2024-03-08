import {
  Button,
  ButtonGroup,
  Group,
  Input,
  PanelHeader,
} from "@vkontakte/vkui";

type Props = {
  goToCatfact: () => void;
};

export function AgifyPanel({ goToCatfact }: Props) {
  return (
    <>
      <PanelHeader>Гадалка Agify</PanelHeader>
      <Group style={{ padding: "1rem" }}>
        <Input placeholder="Введите имя" />
        <ButtonGroup style={{ marginTop: "1rem" }}>
          <Button>Узнать возраст</Button>
          <Button appearance="neutral" onClick={goToCatfact}>
            К котофактам
          </Button>
        </ButtonGroup>
      </Group>
    </>
  );
}
