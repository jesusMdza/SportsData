import './App.css';
import { Button } from '@mui/material';

function App() {
  async function postContext(data = {}) {
    const response = await fetch('https://api.sharpsports.io/v1/context', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.SHARPSPORTS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }
  
  function popupWindow(url, title, win, w, h) {
      const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
      const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
      return win.open(url, title, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
  }
  
  function onClickButton() {
    postContext({internalId: process.env.TEST_INTERNAL_ID})
      .then(data => popupWindow(`https://ui.sharpsports.io/link/${data.cid}`,'SharpSports',window,500,600))
  }

  return (
    <div className="App">
      <h1>API testing</h1>
      <Button sx={{ background: 'gray', color: 'white', fontWeight: 'bold', marginRight: '1em' }}>Get Data</Button>
      <Button sx={{ background: 'green', color: 'white', fontWeight: 'bold' }} onClick={onClickButton} variant="primary">SportsBook Link</Button>
    </div>
  );
}

export default App;
