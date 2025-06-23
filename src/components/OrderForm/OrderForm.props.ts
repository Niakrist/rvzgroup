import { ICartItem } from "@/types/cartItem.interface";

export interface IOrderFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  order?: ICartItem[];
  isCart?: boolean;
}
