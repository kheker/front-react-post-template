import styled from 'styled-components';
import { Header, Segment } from 'semantic-ui-react';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction:colunm;
  justify-content:flex-start;
  align-items:center;
  background-image:url('${props => props.img}') !important;
  opacity: 0.9 !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  background-position: center !important;
  height: 70vh !important;
  width: 100%;
`;

export const HeroTexContainer = styled(Header) `
  margin-left: 0.7em !important;
  font-size: 40px !important;
  font-weight: 300 !important;
  line-height: 1.6 !important;
  color:${props => props.theme.primaryColorText} !important;
  `;

export const SectionHeadersContainer = styled(Segment) `
  background-color:${props => props.theme.secondaryColor} !important;
`;

export const HeaderStyled = styled(Header) `
  font-size:20px !important;
  font-weight: 300 !important;
  color:${props => props.theme.primaryColorText} !important;
`;

export const SubHeaderStyled = styled(Header.Subheader) `
font-size:16px !important;
color:${props => props.theme.primaryColorText} !important;
`;

export const HeaderCategory = styled(Header) `
  font-size: 1.3em !important;
  cursor: pointer;
`;
