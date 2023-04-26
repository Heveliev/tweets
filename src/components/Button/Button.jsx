import { StyledButton } from './Button.styled';
export const Button = ({
    selected = false,
    type = 'button',
    children,
    ...otherProps
  }) => {
    return (
      <StyledButton className={selected && 'isSelected'} type={type} {...otherProps}>
        {children}
      </StyledButton>
    );
  };