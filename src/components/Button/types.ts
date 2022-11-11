export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
}

export interface IButtonPropsStyles {
    isDisabled: boolean;
}