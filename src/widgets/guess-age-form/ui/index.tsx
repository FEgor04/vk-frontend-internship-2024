import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Paragraph } from "@vkontakte/vkui";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import * as yup from "yup";

function stringHasOnlyLetters(s: string) {
  return !new RegExp("\\d").test(s);
}

const nameSchema = yup
  .string()
  .test(
    "is-name",
    `Это не имя`,
    (value) => value != null && stringHasOnlyLetters(value),
  );

const formSchema = yup.object({
  name: nameSchema.required("Введите имя"),
});

type Props = {
  onSubmit: (values: yup.InferType<typeof formSchema>) => void;
};

export const GuessAgeForm = ({ onSubmit }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const setSubmitTimeout = useDebouncedCallback(() => {
    void handleSubmit(onSubmit)();
  }, 3000);

  const { ref, ...nameRegister } = register("name");

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form ref={formRef} id="guess-age-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Введите имя"
        {...nameRegister}
        getRef={ref}
        onInput={setSubmitTimeout}
      />
      <Paragraph style={{ color: "red" }}>{errors.name?.message}</Paragraph>
    </form>
  );
};
