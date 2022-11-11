import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isDisabled }: IButtonProps) => {
  return (
    isDisabled ? <ButtonContainer onClick={onClick} isDisabled={isDisabled}>{title}</ButtonContainer> :
                 <ButtonContainer onClick={onClick} isDisabled={isDisabled} disabled>{title}</ButtonContainer>
  )
};

export default Button;
