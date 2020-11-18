import styled from 'styled-components';
import { Colors, FlexColumn, FlexRowWrap, StyledText } from '../../utils/StyledUtils';

export const MenuContent = styled(FlexColumn)`
    width: 100%;
    padding-left: 20px;
    background-color: ${Colors.Gray10}
`;

export const CategoryTitle = styled.div`
    color: ${Colors.MangoOrange};
    font-family: "Brush Script MT", Times, serif;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 1px;
`;

export const CategoryContent = styled(FlexColumn)`
    padding-left: 20px;
`;

export const SubCategoryTitle = styled.div`
    color: ${Colors.SaharaYellow};
    font-family: "Brush Script MT", Times, serif;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 1px;
`;

export const SubCategoryContent = styled(FlexRowWrap)`
`;