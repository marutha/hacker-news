import React from 'react';

import {
    ListRow,
    ListHeaderContainer,
    ListHeaderTitleContainer,
} from './styles'

const ListHeader =  () => {
    return (<ListRow header >
        <ListHeaderContainer>Comments</ListHeaderContainer>
        <ListHeaderContainer>Vote Count</ListHeaderContainer>
        <ListHeaderContainer>Up Vote</ListHeaderContainer>
        <ListHeaderTitleContainer>News Details</ListHeaderTitleContainer>
    </ListRow>)
}

export default ListHeader;