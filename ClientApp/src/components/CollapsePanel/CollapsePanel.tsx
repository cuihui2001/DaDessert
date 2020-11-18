import React, { useState } from 'react';
import { BodyContainer, CollapsePanelContainer, ExpandButton, Header, HeaderContainer } from './StyledControlPanel';

const ChevronUp: string = 'images/chevronUp24.png';
const ChevronDown: string = 'images/chevronDown24.png';

export interface Props {
    title: string,
    renderContent?(): JSX.Element
}

export const CollapsePanel = ({title, renderContent}: Props) => {
    const [expandImg, SetExpandImg] = useState<string>(ChevronDown);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const changeState = (): void => {
        setIsCollapsed(!isCollapsed);
        SetExpandImg(!isCollapsed ? ChevronUp : ChevronDown);
    };

    return (
        <CollapsePanelContainer>
            <HeaderContainer>
                <Header>{title}</Header>
                <ExpandButton onClick={changeState} src={ChevronUp} display={isCollapsed} />
                <ExpandButton onClick={changeState} src={ChevronDown} display={!isCollapsed} />
            </HeaderContainer>
            <BodyContainer>
                {!isCollapsed &&  renderContent && renderContent()}
            </BodyContainer>
        </CollapsePanelContainer>
    );
};