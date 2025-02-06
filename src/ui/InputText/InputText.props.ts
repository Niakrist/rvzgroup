export interface IInputTextProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: "text";
  placeholder: string;
}
