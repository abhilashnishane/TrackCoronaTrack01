import React from 'react';

class Home2 extends React.Component {
  render () {
    return (
      <div className="h2-container">
        <div className="h2-hero-c">
          <img src={require('../assets/images/world3.png')} className="img-fluid w-100 h2-bg-img" />
          <div className="h2-center-text">
            <div className="h2-title1">Global Deaths Due To Covid-19</div>
            <div className="h2-death-count">1,00,000</div>
          </div>
        </div>
        <div>
          {/* <div className="h2-title1">Global Deaths Due To Covid-19</div>
          <div className="h2-death-count">1,00,000</div> */}
        </div>
      </div>
    )
  }
}

export default Home2;