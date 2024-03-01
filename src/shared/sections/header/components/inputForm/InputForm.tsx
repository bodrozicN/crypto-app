import BaseInput from "@/shared/components/baseInput/BaseInput";

interface InputFormProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({ onInputChange }: InputFormProps) {
  const preventDefaultFormSubmitting = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={preventDefaultFormSubmitting}>
      <BaseInput onChange={onInputChange} placeholder="Search..." type="text" />
    </form>
  );
}
