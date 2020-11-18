import styled, { css } from 'styled-components';
import { Colors, FlexColumn, FlexRow } from '../utils/StyledUtils';

export const CollapsePanelContainer = styled(FlexColumn)`
`;

export const HeaderContainer = styled(FlexRow)`
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
`;

export const Header = styled.div`
    color: ${Colors.MangoOrange};
    font-family: "Brush Script MT", Times, serif;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 1px;
`;

export const ExpandButton = styled.input.attrs({
    type: 'image',
  })`
    display: ${prop => prop.display ? 'inline' : 'none'};
    margin-top:20px;
    width: 24px;
    height: 24px;

    &:focus {
        outline: none;
    }
`;

export const BodyContainer = styled.div``;