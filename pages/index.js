import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData} from '../lib/posts';
import {useState} from 'react';
import Modal from '../components/modal';





export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props:{
      allPostsData,
    },
  };
}

export default function Home() {

    const [openModal, setOpenModal] = useState(false);
    // const [openManifest, setOpenManifest] = useState(false);


  return (
    

    

    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
      <section className={utilStyles.headingMd}>
        <p>Catalog tickets for future reference!</p>
        

      </section>
      <br />
      <button type="button" className={utilStyles.ticketBtn} onClick={() => {
        setOpenModal(true);
      }}>Create New Ticket</button>
            {openModal && <Modal onClose={() => {setOpenModal(false)}}/>}
            
      <br />
      
      </main>
    </Layout>
    
  );
}

// once submitted, I need an alert that says it was submitted successfully 
//and needs to include an exit button to return to home page


// import '../styles/global.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }