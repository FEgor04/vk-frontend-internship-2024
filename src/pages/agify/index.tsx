import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  Button,
  ButtonGroup,
  Div,
  FormItem,
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
  const { data, isFetching } = useQuery({
    ...guessAgeQueryOptions(name),
    enabled: isEnabled,
  });

  function handleFormSubmit(values: { name: string }) {
    console.log(data);
    setName(values.name);
    setIsEnabled(true);
  }

  const infoStyle = { color: "var(--vkui--color_text_subhead)" };

  return (
    <>
      <PanelHeader>Гадалка Agify</PanelHeader>
      <Group>
        <GuessAgeForm onSubmit={handleFormSubmit} />
        <FormItem>
          <ButtonGroup>
            <Button
              type="submit"
              form="guess-age-form"
              loading={isFetching}
              size="m"
            >
              Узнать возраст
            </Button>
            <Button appearance="neutral" onClick={goToCatfact} size="m">
              К котофактам
            </Button>
          </ButtonGroup>
        </FormItem>
        <Spacing />
        <FormItem>
          <Paragraph>
            {data ? (
              data.age != null ? (
                <>Твой возраст: {data.age}</>
              ) : (
                <>Не получилось нагадать возраст</>
              )
            ) : null}
          </Paragraph>
        </FormItem>

        <Spacing size={32} />
        <Accordion>
          <Accordion.Summary>Кэшируются ли запросы?</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Да! Для этого <code>staleTime</code> у запроса установлен в
              значение <code>Infinity</code>, а значит результаты запросов
              никогда не &laquo;протухают&raquo;. В продакшене, конечно, это не
              оптимальный вариант, и стоит уменьшить это значение. В кончном
              итоге, с помощью этого подхода реализуется одно из требований
              задания:
              <blockquote>
                &#8220;Необходимо предотвращать дублирующие запросы (не
                отправлять запрос с таким же именем).&#8221;
              </blockquote>
            </Div>
          </Accordion.Content>
        </Accordion>
        <Spacing size={8} />
        <Accordion>
          <Accordion.Summary>Отмена запросов</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Для отмены запросов используется функционал библиотеки{" "}
              <code>TanStack Qeury</code>: сигнал об отмене{" "}
              <code>AbortSignal</code> передается из параметров{" "}
              <code>queryFn</code> в функцию <code>guessAge</code>
            </Div>
          </Accordion.Content>
        </Accordion>
        <Spacing size={8} />
        <Accordion>
          <Accordion.Summary>Валидация</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Для валидации с помощью библиотеки <code>yup</code> создана схема{" "}
              <code>formSchema</code> в сегменте <code>ui</code>. Для проверки
              имени создана <code>nameSchema</code>. (TODO: перенести в shared).
              Также для управлением формой используется библиотека{" "}
              <code>react-hook-form</code>.
            </Div>
          </Accordion.Content>
        </Accordion>
        <Spacing size={8} />
        <Accordion>
          <Accordion.Summary>Автоматическая отправка</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Как известно, нельзя просто так взять и отправлять запросы через 3
              секуныд после ввода. Важно применять так называемый
              &laquo;антидребезг&raquo; (debouncing). Так как писать велосипеды
              &mdash; дело неблагадарное, то для этого используется библиотека{" "}
              <code>use-debounce</code>.
            </Div>
          </Accordion.Content>
        </Accordion>
      </Group>
    </>
  );
}
