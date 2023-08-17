const axios = require("axios");
const express = require("express"); // Notez la correction de "expres" à "express"
const app = express(); // Notez la correction de "expres()" à "express()"


function callWitAPI(key) {
  return axios.get("https://api.wit.ai/message?v=20230817&q=" + key, {
    headers: {
      'Authorization': 'Bearer KV34D4W5AIJ2SXCBJVOBGS7MQI6LX34K'
    }
  })
  .then((res) => {
    return res.data;
  })
  .catch((error) => {
    console.error(error);
    throw error; 
  });
}

app.get("/bank", (req, resp) => {
  const key = req.query['key'];

  callWitAPI(key)
    .then((result) => {
      console.log(result);
      resp.send(result);
    })
    .catch((error) => {
      console.error(error);
      resp.status(500).send(error.message);
    });
});

app.listen(3000, () => {
  console.log("app listen on port 3000");
});





  

  