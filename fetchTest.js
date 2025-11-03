async function getTicker() {
  const url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getTicker();