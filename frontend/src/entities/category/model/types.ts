interface Option {
  label?: string;
  value: string;
}

export interface CategorySelectProps {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
}
