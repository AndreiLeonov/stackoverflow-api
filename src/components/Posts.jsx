import React from 'react';
import {Post} from './Post';
import axios from 'axios';
import _ from 'lodash';
import { Spin, Button } from 'antd';
import 'antd/es/spin/style/css';
import 'antd/es/button/style/css';
import styles from '../styles/styles.module.css';

export const Posts = React.memo( () => {

    //для прелоадера > сделать красивый прелоадер
    const [isLoading,setIsLoading] = React.useState(true);
    
    //Для сохранения постов
    const [data, setData] = React.useState(null);

    //Для сохранения порядка сортировки
    const [isOrderAsc, setIsOrderAsc] = React.useState(true);

    //Для отображения порядка сортировки в названии кнопки
    const [isBtnAsc, setIsBtnAsc] = React.useState(true);

    //используем данный хук для асинхронного запроса ч/з аксиос, фильтруем и сортируем ч/з Лодаш и сетаем полученный массив в дата 
    React.useEffect(() => {
          axios
            .get(`https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow`)
            .then((res) => {
                //внутрь filteredData помещяю отфильтрованный по ключам массив
                const filteredData = _.filter(res.data.items, function(item) {
                    return item.is_answered === true && item.owner.reputation >= 50
                  });
                  //внутрь sorteredData помещяю отсортированный по дате (по возрастанию) массив
                const sorteredData = _.orderBy(filteredData, ['creation_date'], ['asc'])
                  setData(sorteredData);
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
      },[]);

      const sortOrderHandler = () => {
          //делаем копию постов
          const dataCopy = [...data];
          let order = isOrderAsc ? 'desc' : 'asc';
          let OrderedPosts = _.orderBy(dataCopy, ['creation_date'], [order]);
          setIsOrderAsc(!isOrderAsc);
          setData(OrderedPosts);
          setIsBtnAsc(!isBtnAsc);
      };

      console.log(data);
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
            <div className={styles.spin}>
              <Spin 
                tip="Loading...">
              </Spin>
            </div> : 
            data.map((data, i) => <Post key={i} data={data}/>)
             }
      </div>
    );
})