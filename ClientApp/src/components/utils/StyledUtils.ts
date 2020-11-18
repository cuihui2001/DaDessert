import styled, { css } from 'styled-components';

export const Colors = {
    DYNPrimary: '#2266E3',
    DYNTint50: '#f0f5ff',
    DYNTint40: '#e7efff',
    DYNTint30: '#ccdeff',
    DYNTint20: '#9cbeff',
    DYNTint10: '#1f6cf9',
    DYNShade10: '#0b53ce',
    DYNShade20: '#0742ab',
    DYNShade30: '#053385',
    Gray10: '#faf9f8',
    Gray20: '#f3f2f1',
    Gray30: '#edebe9',
    Gray40: '#e1dfdd',
    Gray50: '#d2d0ce',
    Gray60: '#c8c6c4',
    Gray90: '#a19f9d',
    Gray110: '#8A8886',
    Gray130: '#605e5c',
    Gray150: '#3b3a39',
    Gray160: '#323130',
    Gray190: '#201f1e',
    Gray200: '#eeeeee',
    Gray300: '#E0E0E0',
    PBITint30: '#FBEEB5',
    Black: '#000000',
    White: '#ffffff',
    AzulBlue: '#118DFF',
    GrapePurple: '#750985',
    BlushPink: '#C83D95',
    MangoOrange: '#E66C37',
    PacificBlue: '#009EB3',
    JadeGreen: '#18A03C',
    DynamicsGreen: '#107C10',
    AtlanticBlue: '#3A4BC6',
    ScarletRed: '#E04854',
    DynamicsRed: '#D83B01',
    CandyPink: '#835DD0',
    SaharaYellow: '#BD8608',
    Red10: '#C6231D'
};

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexColumnCentered = styled(FlexColumn)`
    align-items: center;
    justify-content: center;
`;

export const FlexRowCentered = styled(FlexRow)`
    align-items: center;
`;

export const FlexRowWrap = styled(FlexRow)`
    flex-wrap: wrap;
`;

export const StyledText = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: normal;
  ${({ multiline }) => multiline
    && css`
      line-height: 1.5;
      white-space: pre-line;
      word-break: break-word;
      word-wrap: break-word;
    `};
`;