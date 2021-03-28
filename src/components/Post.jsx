import React from 'react';
import styles from '../styles/styles.module.css';

export const Post = React.memo((props) => {
    console.log("post")
    return (
        <div className={styles.postContainer}>
            <a href={props.data.link}>
                <div className={styles.post}>
                    <div className={styles.avatar}>
                        <img src={props.data.owner.profile_image} alt=""></img>
                    </div>
                    <div className={styles.post_text}>
                        {props.data.title}
                    </div>
                </div>
            </a>
        </div>
    );
}) 