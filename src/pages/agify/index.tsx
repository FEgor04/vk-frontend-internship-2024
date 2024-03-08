import { useQuery } from "@tanstack/react-query";
import {
  Button,
  ButtonGroup,
  Group,
  PanelHeader,
  Paragraph,
  Spacing,
} from "@vkontakte/vkui";
import { useState } from "react";
import { GuessAgeForm, guessAgeQueryOptions } from "@/widgets/guess-age-form";

type Props = {
  goToCatfact: () => void;
};

export function AgifyPanel({ goToCatfact }: Props) {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { data, isLoading } = useQuery({
    ...guessAgeQueryOptions(name),
    enabled: isEnabled,
  });

  function handleFormSubmit(values: { name: string }) {
    console.log(data);
    setName(values.name);
    setIsEnabled(true);
  }

  return (
    <>
      <PanelHeader>Гадалка Agify</PanelHeader>
      <Group style={{ padding: "1rem" }}>
        <GuessAgeForm onSubmit={handleFormSubmit} />
        <ButtonGroup style={{ marginTop: "1rem" }}>
          <Button type="submit" form="guess-age-form" loading={isLoading}>
            Узнать возраст
          </Button>
          <Button appearance="neutral" onClick={goToCatfact}>
            К котофактам
          </Button>
        </ButtonGroup>
        <Spacing />
        {data && (
          <Paragraph>
            {data.age != null ? (
              <>Твой возраст: {data.age}</>
            ) : (
              <>Не получилось нагадать возраст</>
            )}
          </Paragraph>
        )}
      </Group>
    </>
  );
}
