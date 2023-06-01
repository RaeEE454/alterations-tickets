import React from 'react';
import Form from './form';
import styles from './layout.module.css';



export default function Modal(){

    return (
    
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
             <Form/>
            </div>
        </div>

    );

}