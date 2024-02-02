import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import BibleQuiz from './BibleQuiz';
import { Prelim } from './prelim';

const root = createRoot(document.getElementById('prelim'));

root.render(
  <StrictMode>
    <BibleQuiz /> // Render the BibleQuiz component
  </StrictMode>
);
