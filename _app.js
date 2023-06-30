
import '../styles/global.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export default function App({ Component, pageProps }) {
    
    return 
        
        <Component {...pageProps} />
}