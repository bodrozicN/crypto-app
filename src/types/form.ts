export type FormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
