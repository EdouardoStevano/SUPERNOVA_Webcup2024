import { useState } from 'react'

import Header from './header';

import styles from './style/layout.module.scss';



export default function Layout() {
    return (

        <div className={styles.header}>
            <Header />
        </div>

    )

}