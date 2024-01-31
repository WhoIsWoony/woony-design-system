export interface CommonProps {
  className: string;
  children: React.ReactNode;
}

export interface ButtonTextProps extends CommonProps {
  onClick: function;
  type: "button" | "submit" | "reset" | undefined;
}

export interface TextProps extends CommonProps {
  children: string;
}

export interface InputProps extends CommonProps {
  value: string;
  onChange: function;
  placeholder: string;
}

export interface FormProps extends CommonProps {
  onSubmit: function;
}
