import styled, { css } from 'styled-components';

const pureStyles = css`
  background-color: transparent;
  border: none;
`;

const getButtonStyles = props => {
  if (props.isPureButton) return pureStyles
};

export const CustomButtonContainer = styled.button`
  letter-spacing: .5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  ${getButtonStyles}
`;