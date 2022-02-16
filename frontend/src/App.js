import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = getBooks();
    // console.log(data);
  }, []);

  const getBooks = async () => {
    const response = await fetch("https://api.sportsdata.io/v3/nfl/odds/json/BettingMetadata", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Ocp-Apim-Subscription-Key": `${process.env.REACT_APP_SPORTSDATA_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    return response.json();
  }

  const postContext = async (data = {}) => {
    const response = await fetch("https://api.sharpsports.io/v1/context", {
      method: "POST",
      headers: {
        "Authorization": `Token ${process.env.REACT_APP_SHARPSPORTS_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }
  
  const showSportsBookPopup = () => {
    postContext({internalId: process.env.REACT_APP_INTERNAL_ID})
      .then(data => {
        const x = window.top.outerWidth / 2 + window.top.screenX - ( 500 / 2);
        const y = window.top.outerHeight / 2 + window.top.screenY - ( 600 / 2);
        const url = `https://ui.sharpsports.io/link/${data.cid}`;

        return window.open(
          url, 
          "SharpSports", 
          `toolbar=no, 
            location=no, 
            directories=no, 
            status=no, 
            menubar=no, 
            scrollbars=no, 
            resizable=no, 
            copyhistory=no, 
            width=500, 
            height=600, 
            top=${y}, 
            left=${x}`
        );
      })
  }

  return (
    <div className="App">
      <h1>API testing</h1>
      <Button sx={{ background: "gray", color: "white", fontWeight: "bold", marginRight: "1em" }}>Get Data</Button>
      <Button sx={{ background: "green", color: "white", fontWeight: "bold" }} onClick={showSportsBookPopup} variant="primary">SportsBook Link</Button>
    </div>
  );
}

export default App;
