import { Button, ButtonGroup, Group, PanelHeader } from "@vkontakte/vkui";
import { GuessAgeForm } from "@/widgets/guess-age-form";

type Props = {
  goToCatfact: () => void;
};

export function AgifyPanel({ goToCatfact }: Props) {
  return (
    <>
      <PanelHeader>Гадалка Agify</PanelHeader>
      <Group style={{ padding: "1rem" }}>
        <GuessAgeForm onSubmit={console.log} />
        <ButtonGroup style={{ marginTop: "1rem" }}>
          <Button type="submit" form="guess-age-form">
            Узнать возраст
          </Button>
          <Button appearance="neutral" onClick={goToCatfact}>
            К котофактам
          </Button>
        </ButtonGroup>
      </Group>
    </>
  );
}
