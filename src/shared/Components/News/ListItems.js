import React from 'react';
import PropTypes from 'prop-types';

import {
    ListRow,
    ListItemHolder,
    ListItemTitleHolder
} from './styles';


const ListItem = (props) => {
    const { num_comments, title, points } = props.item;
    return (
        <ListRow>
            <ListItemHolder>{num_comments}</ListItemHolder>
            <ListItemHolder>{points}</ListItemHolder>
            <ListItemHolder>{num_comments}</ListItemHolder>
            <ListItemTitleHolder>{title}</ListItemTitleHolder>
        </ListRow>
    )
}

const ListItems = (props) => (
    <div>
        {
            props.items.length &&
            props.items.map((item) =>
                <ListItem key={Math.random()} item={item} />)
        }
    </div>
);

ListItems.propTypes = {
    items : PropTypes.Array,
}

ListItem.propTypes = {
    item: PropTypes.object,
    num_comments : PropTypes.number,
    title: PropTypes.string,
    points: PropTypes.number,
}

export default ListItems;