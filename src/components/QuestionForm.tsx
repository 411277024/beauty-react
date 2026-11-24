import { useState } from "react";
import type { UserInput } from "../types";
import { FIELDS } from "../options";
import SelectField from "./SelectField";

const EMPTY: UserInput = {
  faceShape: "", eyeShape: "", eyelidType: "", noseShape: "", lipShape: "",
  skinTone: "", hairLength: "", style: "", occasion: "",
};

type Props = {
  onSubmit: (input: UserInput) => void;
  disabled: boolean;
};

export default function QuestionForm({ onSubmit, disabled }: Props) {
  const [input, setInput] = useState<UserInput>(EMPTY);

  function update(key: keyof UserInput, value: string) {
    setInput({ ...input, [key]: value });
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
      }}
    >
      {FIELDS.map((f) => (
        <SelectField
          key={f.key}
          label={f.label}
          value={input[f.key]}
          options={f.options}
          onChange={(v) => update(f.key, v)}
        />
      ))}
      <button type="submit" disabled={disabled}>
        {disabled ? "AI 正在撰寫報告…" : "產生推薦結果"}
      </button>
    </form>
  );
}