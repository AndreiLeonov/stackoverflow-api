import React from 'react';
import {Posts} from './Posts';
import styles from '../styles/styles.module.css'


function App() {
  console.log("app");
  return (
    <div className={styles.postsContainer}>
      <Posts />
    </div>
  );
}

export default App;
