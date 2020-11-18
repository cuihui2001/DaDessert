import styled from 'styled-components';
import { Colors, FlexColumn, FlexRowWrap, StyledText } from '../../utils/StyledUtils';

export const ContactContent = styled(FlexColumn)`
    width: 100%;
    padding-left: 20px;
    background-color: ${Colors.Gray10}
`;

export const HeaderTitle = styled.div`
    text-align: center;
    color: ${Colors.MangoOrange};
    font-family: "Brush Script MT", Times, serif;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 1px;
`;

export const LocationName = styled.div`
    font-family: "Lucida Console", Courier, monospace;
    font-size: 18px;
`;

export const LocationPhone = styled.div`
    font-family: "Lucida Console", Courier, monospace;
    font-size: 16px;
`;

export const LocationAddress = styled.div`
    font-family: "Lucida Console", Courier, monospace;
    font-size: 14px;
`;