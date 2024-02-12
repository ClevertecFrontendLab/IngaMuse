import React from 'react';
import styles from "./main-page.module.css";
import Header from '@components/Header';
import Nav from '@components/Nav';
import Content from '@components/Content';
import Footer from '@components/Footer';


export const MainPage: React.FC = () => {


    return (
        <>
            <div className={styles.container}>
                <div>
                <Nav />
                </div>
                <div className={styles.container_main}>
                <Header />
                <Content />
                <Footer />
                </div>
            </div>
        </>
    );
};
