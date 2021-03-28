import React from 'react';
import {Post} from './Post';
import axios from 'axios';
import _ from 'lodash';
import { Spin, Button } from 'antd';
import 'antd/es/spin/style/css';
import 'antd/es/button/style/css';
import styles from '../styles/styles.module.css';

export const Posts = React.memo( () => {

    //this useState for Preloader status (on/off)
    const [isLoading,setIsLoading] = React.useState(true);

    //this useState for Data(Posts) from API
    const [data, setData] = React.useState(null);

    //this useState for the sort order
    const [isOrderAsc, setIsOrderAsc] = React.useState(true);

    //this useState for button name
    const [isBtnAsc, setIsBtnAsc] = React.useState(true);

    //this useEffect for asynchronous request, filtering and sorting through Lodash 
    React.useEffect(() => {
          axios
            .get(`https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow`)
            .then((res) => {
                //filtering with Lodash
                const filteredData = _.filter(res.data.items, function(item) {
                    return item.is_answered === true && item.owner.reputation >= 50
                  });
                  //sorting with with Lodash
                const sorteredData = _.orderBy(filteredData, ['creation_date'], ['asc'])
                  setData(sorteredData);
            })
            .catch((error) => console.log(error)) //find error at the time of the request
            .finally(() => setIsLoading(false)); 
      },[]);

      //this function(handler) sorts by creation date
      const sortOrderHandler = () => {
          const dataCopy = [...data];
          let order = isOrderAsc ? 'desc' : 'asc';
          let OrderedPosts = _.orderBy(dataCopy, ['creation_date'], [order]);
          setIsOrderAsc(!isOrderAsc);
          setData(OrderedPosts);
          setIsBtnAsc(!isBtnAsc);
      };

    return (
        <div className={styles.posts}>
            {
            !isLoading ?
            <div>
              <Button 
                onClick={sortOrderHandler} 
                type='primary'>ОТСОРТИРОВАТЬ ПО {isBtnAsc ? 'УБЫВАНИЮ'  : 'ВОЗРАСТАНИЮ'} 
              </Button>
            </div> :
            <></>}
            {
            isLoading ? 
            <div>
              <Spin 
                tip="Loading...">
              </Spin>
            </div> : 
            data.map((data, i) => <Post key={i} data={data}/>)
             }
      </div>
    );
})