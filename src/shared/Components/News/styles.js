import styled from 'styled-components';

export const ListRow = styled.div`
    display: flex;
    background: ${props => props.header ? '#ff6600' : '#ebebeb'};
    width: 100%;
    justify-content: space-around;
`;

export const ListHeaderContainer = styled.div`
    display: inline;
    color: white;
    padding: 10px;
    width: 10%;
`;

export const ListHeaderTitleContainer = styled(ListHeaderContainer)`
  width: 70%;
`

export const ListItemHolder = styled.div`
    display: inline;
    color: black;
    padding: 7px;
    width: 10%;
`;

export const ListItemTitleHolder = styled(ListItemHolder)`
    width: 70%;
`;

