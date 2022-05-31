import React from 'react';
import styles from './heading.module.css';

interface Props{
    content : string;
}

const Heading1 = (props : Props)=>{

    return <h1 id = {styles.heading1}>{props.content}</h1>

}

export const Heading2 = (props:Props)=>{
    return <h1 id={styles.heading2}>{props.content}</h1>
}

export const Heading3 = (props:Props)=>{
    return <h1 id={styles.heading3}>{props.content}</h1>
}

export default Heading1;