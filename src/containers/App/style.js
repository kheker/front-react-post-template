import styled from 'styled-components'
// import {media} from 'styles/utils';
import { Dimmer, Sidebar, Container } from 'semantic-ui-react'

export const PageLayout = styled.div`height: 100%;`

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.primaryColorText};
`

export const MainContent = styled.main`
  display: flex;
  flex-grow: 1;
  `
/* ${media.md`
   padding-top: 65px;
 `};
 ${media.lg`
   padding-top: 72px;
 `};
*/
export const SidebarSemanticPusherStyled = styled(Sidebar.Pusher) `
	height: 100%;
  overflow-y: scroll !important;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
	  width: 0px !important;
	}
`

export const SidebarSemanticPushableStyled = styled(Sidebar.Pushable) `
  display: initial;
  > .pusher {
		overflow: visible !important;
	}
`

//  Margin - just to fill empty space
export const MainContainer = styled(Container) `
padding-left: 0px;
padding-right: 0px;
margin-top: 75px;
margin-bottom: 1em;
flex-direction: column;
display: flex !important;
flex-grow: 1;
& > *:last-child {
  flex-grow: 1;
}

  > div,
body > div > div
{
  height: 100%;
}
  `
/* ${media.mdOnly`
  width: 100% !important;
`}
${media.smOnly`
  width: 100% !important;
`}
*/
export const StyledDimmer = styled(Dimmer) `
	z-index: 55!important;
	cursor: pointer;
`
