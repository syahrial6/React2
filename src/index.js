import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import Catatan from './components/Induk';
import './styles/style.css';

const root = createRoot(document.getElementById("root"));
root.render(<Catatan/>)