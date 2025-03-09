import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './index.css';
import HomePage from './HomePage';
import TeamsPage from './components/TeamsPage';
import BufferedReadersPage from './components/BufferedReadersPage';
import BytestreamsPage from './components/BytestreamsPage';
import AboutPage from './components/AboutPage';
import PDFFlipbook from './components/PDFFlipbook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/bytestreams" element={<BytestreamsPage />} />
        <Route path="/buffered-readers" element={<BufferedReadersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pdf-viewer" element={<PDFFlipbook />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
