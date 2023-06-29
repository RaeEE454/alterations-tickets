import React from 'react';
import Form from './form';
import styles from './layout.module.css';



export default function Modal({onClose=() => {}}){

    return (
    
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
             <Form onSuccess={onClose}/>
            </div>
        </div>

    );

}