import styled, { css } from 'styled-components';

const pureStyles = css`
  background-color: transparent;
  border: none;
`;

const generalStyles = css`
  min-width: 180px;
  min-height: 30px;
  font-size: var(--theme-font-size-small);
`;

const outlineStyles = css`
  ${generalStyles}
  background-color: transparent;
  border-radius: var(--theme-border-radius-small);
  border: 1px solid var(--theme-color-dark-700);

  &:hover {
    background-color: var(--theme-color-dark-700);
    border-color: transparent;
    color: var(--theme-bg-secondary);
  }
`;

const getButtonStyles = props => {
  if (props.isPureButton || props.$isPureButton) return pureStyles;
  if (props.isOutlineButton || props.$isOutlineButton) return outlineStyles;
};

export const CustomButtonContainer = styled.button`
  letter-spacing: .5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  ${getButtonStyles}
`;