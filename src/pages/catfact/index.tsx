import { getCatfactQueryOptions } from "@/app/entities/catfact";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  ButtonGroup,
  Group,
  PanelHeader,
  Textarea,
} from "@vkontakte/vkui";
import { useRef } from "react";

type Props = {
  goToAgify: () => void;
};

export function CatfactPanel({ goToAgify }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { isLoading, refetch } = useQuery({
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

  return (
    <>
      <PanelHeader>Catfact</PanelHeader>
      <Group>
        <Textarea
          getRef={ref}
          placeholder="Нажми на кнопку - получишь котофакт"
        />
        <ButtonGroup>
          <Button onClick={onLoadCatfact} loading={isLoading}>
            Загрузить котофакт
          </Button>
          <Button appearance="neutral" onClick={goToAgify}>
            Перейти к форме
          </Button>
        </ButtonGroup>
      </Group>
    </>
  );
}
