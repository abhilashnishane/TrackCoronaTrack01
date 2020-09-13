import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home3 extends React.Component {
  render () {
    return (
      <div className="h3-container">
        <Container fluid>

          <Row className="pt-5">
            <Col md="5">
              <div className="summary">
                <div>Businesses bankrupted</div>
                <div>Jobs lost</div>
                <div>Shops closed</div>
                <div>Roads emptied</div>
                <div>Loved ones died</div>
                <div>And world under the shadow of fear</div>
                <div style={{color: 'red'}}>Solution: Not yet found</div>
                <hr />
                {/* <div>THE WORLD FAR FROM NORMAL</div> */}
              </div>
            </Col>
            <Col md="7">

            </Col>
          </Row>

          <Row>
            <Col md="5"></Col>
            <Col md="7">
              <div className="rhs1-container">
                <div className="country-title">India</div>
                <div className="h3-death-big-num">10,000 Deaths</div>
                {/* <div className="h3-stat">Confirmed: 10,000</div>
                <div className="h3-stat">Active: 10,000</div>
                <div className="h3-stat">Deaths: <span className="h3-death-num">10,000</span></div>
                <div className="h3-stat">Recovered: <span className="h3-recovered-num">10,000</span></div> */}
                <div><img src={require('../assets/images/map4.png')} style={{height: '400px'}} className="h2-bg-img" /></div>
              </div>
            </Col>
          </Row>

        </Container>
        
      </div>
    )
  }
}

export default Home3;