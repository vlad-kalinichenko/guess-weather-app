import { Button, InputNumber, Layout, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { styled } from 'styled-components';

export const StyledHeader = styled(Row)`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 10px;
  background: #eee0c9;

  h2 {
    margin: 0;
    color: #272829;
  }
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
`;

export const StyledRow = styled(Row)`
  padding: 20px 0px;
  background-color: #f1f0e8;
  flex-grow: 1;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;
