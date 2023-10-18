import React from 'react';
import './refreshtour.css';

function Refreshtour() {
  return (
    <div className="refresh">
      <h1 className="text-info">No Tours Left</h1>
      <button
        className="btn btn-outline-info"
        onClick={() => window.location.reload()}
      >
        Refresh...
      </button>
    </div>
  );
}

export default React.memo(Refreshtour);
