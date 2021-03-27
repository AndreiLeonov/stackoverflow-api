import React from 'react';
import styles from '../styles/styles.css'

export const Post = React.memo((props) => {

    return (
        <div>
            <a href={props.data.link}>
                <div>
                    <img className={styles.avatar} src={props.data.owner.profile_image} alt=""></img>
                    {props.data.title}
                </div>
            </a>
        </div>
    );
}) 