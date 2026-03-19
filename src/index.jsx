// index.jsx — Entry point. Connects React to the #root div in index.html.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// #region agent log
(() => {
  let data = { indexCssImported: true, docReadyState: document.readyState };
  try {
    data = {
      ...data,
      colorSurface: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim(),
      bodyBg: document.body ? getComputedStyle(document.body).backgroundColor : null,
      bodyClass: document.body ? document.body.className : null,
      styleSheetHrefs: Array.from(document.styleSheets).map(s => s.href || '[inline]').slice(0, 10),
    };
  } catch (e) {
    data = { ...data, error: e instanceof Error ? e.message : String(e) };
  }
  fetch('/__cursor_debug_log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'694fba',id:`dbg_${Date.now()}_A`,runId:'pre-fix',hypothesisId:'A',location:'src/index.jsx:9',message:'Entry loaded; initial CSS var snapshot',data,timestamp:Date.now()})}).catch(()=>{});
})();
// #endregion agent log

// #region agent log
window.addEventListener('load', () => {
  let data = { docReadyState: document.readyState };
  try {
    data = {
      ...data,
      colorSurface: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim(),
      bodyBg: document.body ? getComputedStyle(document.body).backgroundColor : null,
      bodyClass: document.body ? document.body.className : null,
      styleSheetHrefs: Array.from(document.styleSheets).map(s => s.href || '[inline]').slice(0, 10),
    };
  } catch (e) {
    data = { ...data, error: e instanceof Error ? e.message : String(e) };
  }
  fetch('/__cursor_debug_log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'694fba',id:`dbg_${Date.now()}_B`,runId:'pre-fix',hypothesisId:'B',location:'src/index.jsx:14',message:'After window load; computed styles',data,timestamp:Date.now()})}).catch(()=>{});
});
// #endregion agent log

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
