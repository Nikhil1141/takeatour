import React from 'react';

function Contenttour({tours, del}) {
  

  return (
    <div>
      <h1 className="h1" id="hh1">
        Our Tours
      </h1>
      <div className="underline"></div>
      <div className="mainCard">
        <p>
          {tours.map((cardsData, i) => (
            <div className="cardd">
              <p>
                <img src={cardsData.image} alt="imgs" className="imgg" />
              </p>
              <div className="headingPrice">
                <p>
                  <b> {cardsData.name} </b>
                </p>
                <p className="bg-info font-weight-bolder">${cardsData.price}</p>
              </div>
              <p className="info">{cardsData.info}</p>
              <div className="d-flex justify-content-center align-items-center p-3">
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    del(i);
                  }}
                >
                  Not Intrested
                </button>
              </div>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default React.memo(Contenttour);
