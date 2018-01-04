import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

export const MenuStyled = styled(Menu) `
  background-color: ${props => props.theme.primaryColorDark} !important;
`;

export const MenuItemStyled = styled(Menu.Item) `
  color:  ${props => props.theme.primaryColorText} !important;
`
