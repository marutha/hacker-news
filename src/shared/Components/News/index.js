import React , { useState, useEffect }from 'react';
import fetch from 'node-fetch';
import styled from 'styled-components';

import ListHeader from './ListHeader';
import ListItems from './ListItems';


const News = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const promise = fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
        promise
            .then((resp) => resp.json())
            .then((result) => 
            {
                setCount(result.hits.length);
                setItems(result.hits)
            });
    }, []);
    return(
        <div>
            <ListHeader />
            <ListItems items={count && items} />
        </div>
    )
}

export default News;