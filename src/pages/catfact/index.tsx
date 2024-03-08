import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  Button,
  ButtonGroup,
  Div,
  Group,
  PanelHeader,
  Spacing,
  Textarea,
} from "@vkontakte/vkui";
import { useRef } from "react";
import { getCatfactQueryOptions } from "@/entities/catfact";

type Props = {
  goToAgify: () => void;
};

export function CatfactPanel({ goToAgify }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { isFetching, refetch } = useQuery({
    ...getCatfactQueryOptions(),
    enabled: false,
  });

  function onLoadCatfact() {
    void refetch().then((data) => {
      if (data.isSuccess) {
        if (ref.current) {
          const catfact = data.data;
          const firstSpacePosition = catfact.fact.indexOf(" ");
          ref.current.value = catfact.fact;
          ref.current.focus();
          if (firstSpacePosition != -1) {
            ref.current.setSelectionRange(
              firstSpacePosition,
              firstSpacePosition,
            );
          }
        }
      }
    });
  }

  const infoStyle = { color: "var(--vkui--color_text_subhead)" };

  return (
    <>
      <PanelHeader>Catfact</PanelHeader>
      <Group style={{ padding: "1rem" }}>
        <Textarea
          getRef={ref}
          placeholder="Нажми на кнопку - получишь котофакт"
        />
        <ButtonGroup style={{ marginTop: "1rem" }}>
          <Button
            onClick={onLoadCatfact}
            loading={isFetching}
            disabled={isFetching}
          >
            Загрузить котофакт
          </Button>
          <Button appearance="neutral" onClick={goToAgify}>
            К гадалке
          </Button>
        </ButtonGroup>
        <Spacing size={16} />
        <Accordion>
          <Accordion.Summary>Кэшируются ли запросы?</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Конечно нет! При каждом клике отправляется вызывается метод{" "}
              <code>refetch</code> и за котофактом отправляется новый запрос
            </Div>
          </Accordion.Content>
        </Accordion>
        <Spacing size={8} />
        <Accordion>
          <Accordion.Summary>
            Каким образом выставляется курсор?
          </Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Курсор выставялется за счет хранения ссылки на компонент{" "}
              <code>Textarea</code>, с помощью метода{" "}
              <code>setSelectionRange()</code>
            </Div>
          </Accordion.Content>
        </Accordion>
        <Spacing size={8} />
        <Accordion>
          <Accordion.Summary>Что с декомпозицией?</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Декомпозиция крайне простая: тип <code>Catfact</code> и метод{" "}
              <code>getCatfactQueryOptions</code> хранятся в слайсе{" "}
              <code>catfact</code> слоя <code>entities</code>. Разметка данной
              страницы полностью находится в слайсе <code>catfact</code> в{" "}
              <code>pages</code>. Возможно при дальнейшем рефакторинге я вынесу
              часть логики в <code>feature</code> <code>get-catfact</code>,
              однако это кажется очень большим переусложнением.
            </Div>
          </Accordion.Content>
        </Accordion>
      </Group>
    </>
  );
}
