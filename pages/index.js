import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData} from '../lib/posts';
import searchBar from '../components/search';
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
    const [openManifest, setOpenManifest] = useState(false);

    

  return (
    <Layout home>
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
            {openModal && <Modal />}
      <br />
      
      </main>
    </Layout>
    
  );
}

// once submitted, I need an alert that says it was submitted successfully 
//and needs to include an exit button to return to home page