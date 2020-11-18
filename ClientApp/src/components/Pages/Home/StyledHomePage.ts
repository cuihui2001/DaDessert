import styled from 'styled-components';
import { Colors, FlexColumn, FlexRowWrap, StyledText } from '../../utils/StyledUtils';


export const HomeContent = styled(FlexColumn)`
    width: 100%;
    padding-left: 20px;
    background-color: ${Colors.Gray10}
`;

export const HomeContainer = styled(FlexColumn)`
`;

export const HeaderTitle = styled.div`
    text-align: center;
    color: ${Colors.MangoOrange};
    font-family: "Brush Script MT", Times, serif;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 1px;
`;

export const LineSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${Colors.Gray30};
    margin: 20px 0;
`;

export const BodyContent = styled(FlexRowWrap)`
`;

export const BodyItem = styled(FlexColumn)`
    padding-top: 10px;
    padding-left: 20px;
    font-size: 14px;
`;

export const BodyImage = styled.img`
    width: 250px;
    height: 250px;
`;

export const TrendingText = styled(StyledText)`
`;
