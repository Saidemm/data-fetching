import React, { useEffect, useState } from "react";

// Main bitcoin value viewer UI component
export default function BitcoinValueViewer() {
  const [bitcoinValueData, setBitcoinValueData] = useState(null);

  useEffect(() => {
    const fetchBitcoinValues = async () => {
      try {
        const result = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const fetchData = await result.json();
        setBitcoinValueData(fetchData);
      } catch (error) {
        console.log(
          "Fetching current prices from external end-point faild: ",
          error.message
        );
      }
    };
    fetchBitcoinValues();
  }, [setBitcoinValueData]);

  const getHtmlSymbol = (symbol) => {
    switch (symbol) {
      case "&#36;":
        return <>&#36;</>;
      case "&pound;":
        return <>&pound;</>;
      case "&euro;":
        return <>&euro;</>;
      default:
        console.log("No mapping for this currency symbol:", symbol);
        return "?";
    }
  };

  return (
    <div>
      {!bitcoinValueData && <div> Fetching Currunt Prices... </div>}
      {bitcoinValueData && (
        <div className="bitcoinValueCointner mainPane">
          <div className="dateContainer">
            <div>Last Updated: {bitcoinValueData.time.updated}</div>
          </div>
          <div className="valuesContainer listingPane">
            <h3>Bitcoin value in various currencies:</h3>
            {Object.keys(bitcoinValueData.bpi).map((currency) => {
              const currencyObj = bitcoinValueData.bpi[currency];
              return (
                <div key={currency}>
                  <div className="priceRow listingRow">
                    <div className="priceColLeft">
                      In {currencyObj.description}
                    </div>
                    <div className="priceColRight">
                      {currencyObj.rate} {getHtmlSymbol(currencyObj.symbol)}
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="footNote">
            * Disclaimer: {bitcoinValueData.disclaimer}
          </div>
        </div>
      )}
    </div>
  );
}
