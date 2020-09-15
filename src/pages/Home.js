import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLargeData } from '../actions/homeActions';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Table } from 'reactstrap';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  Hint,
  makeWidthFlexible,
  RadialChart
} from 'react-vis';
import "react-vis/dist/style.css";
import InnerNavbar from '../components/InnerNavbar';

// import DiscreteColorLegend from 'legends/discrete-color-legend';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';
import GradientDefs from 'react-vis/dist/plot/gradient-defs';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBG0HaNk2YWBp1cHllsVpYszZFI3J-hG1c",
  authDomain: "trackcoronatrack01.firebaseapp.com",
  databaseURL: "https://trackcoronatrack01.firebaseio.com",
  projectId: "trackcoronatrack01",
  storageBucket: "trackcoronatrack01.appspot.com",
  messagingSenderId: "245771598728",
  appId: "1:245771598728:web:402f79ff525fd35f13983d",
  measurementId: "G-QDTDEHXB7J"
};
firebase.initializeApp(config);


const FlexibleXYPlot = makeWidthFlexible(XYPlot); 

const ITEMS1 = [
  {title: 'confirmed', color: '#FFCA28'},
  {title: 'recovered', color: '#43A047'},
  {title: 'deaths', color: '#e53935'}
];
const ITEMS2 = [
  {title: 'deaths', color: '#e53935'}
];
const ITEMSNEWCASES = [
  {title: 'confirmed', color: '#FFCA28'}
];
const ITEMSNEWCASESBAR = [
  {title: 'confirmed', color: '#FFCA28'}
];
const ITEMSTOTALCONFIRMED = [
  {title: 'confirmed', color: '#FFCA28'}
];

const ITEMSPIEOVERALL = [
  {title: 'deaths', color: '#e57373'},
  {title: 'active', color: '#78909C'},
  {title: 'recovered', color: '#81C784'}
];



class Home extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.logout = this.logout.bind(this);

    this.state = {
      isSignedIn: false,
      isOpen: false,
      // statewise: [],
      useCanvas: false,
      // cases_time_series: [],

      graph_data_1: [],
      graph_data_2: [],

      indiaConfirmed: null,
      indiaActive: null,
      indiaDeaths: null,
      indiaRecovered: null,

      pieData: [],

      graph_data_11: [],
      // graph_data_12: [],
      graph_data_13: [],
      graph_data_14: [],

      hoveredNode1: null,
      hoveredNode2: null,
      hoveredNode3: null,

      hoveredNodeNewDeaths: null,
      hoveredNodeNewCases: null,
      hoveredNodeNewCasesBar: null,
      hoveredNodeTotalConfirmed: null
    }
  }

  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    );
    // check if login cookie already exists
    // this.fetchIndiaData();
    this.props.fetchLargeData();
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  componentDidUpdate(prevProps) {

    if(this.props.largeData !== prevProps.largeData) {

      var graph11 = [];
      // var graph12 = [];
      var graph13 = [];
      var graph14 = [];

      var graph21 = [];
      this.props.largeData.cases_time_series.map((casee, i) => {
        graph11.push({
          x: i,
          y: casee.totalconfirmed
        });
        // graph12.push({
        //   x: i,
        //   y: casee.totalactive
        // });
        graph13.push({
          x: i,
          y: casee.totalrecovered
        });
        graph14.push({
          x: i,
          y: casee.totaldeceased
        });

        
        graph21.push({
          x: i,
          y: casee.dailydeceased
        });
      });

        // GRAPH 1
        var graph1 = [];
        this.props.largeData.cases_time_series.map((casee, i) => {
          graph1.push({
            x: i,
            // x: casee.date,
            y: casee.totalconfirmed
          });
        });

        // GRAPH 2
        var graph2 = [];
        this.props.largeData.cases_time_series.map((casee, i) => {
          graph2.push({
            x: i,
            y: casee.dailyconfirmed
          });
        });

        this.setState({
          indiaConfirmed: this.props.largeData.statewise[0].confirmed,
          indiaActive: this.props.largeData.statewise[0].active,
          indiaDeaths: this.props.largeData.statewise[0].deaths,
          indiaRecovered: this.props.largeData.statewise[0].recovered,
          graph_data_1: graph1,
          graph_data_2: graph2,

          graph_data_11: graph11,
          // graph_data_12: graph12,
          graph_data_13: graph13,
          graph_data_14: graph14,

          graph_data_21: graph21,

          pieData: [
            { angle: this.props.largeData.statewise[0].deaths, color: '#e57373', label: 'deaths' },
            { angle: this.props.largeData.statewise[0].active, color: '#78909C', label: 'active' },
            { angle: this.props.largeData.statewise[0].recovered, color: '#81C784', label: 'recovered' },
          ]
        }) 
        // const pieData = [{angle: 1}, {angle: 5}, {angle: 2}];
    }

  }

  handlePieMouseOver = () => {

  }


  render () {
    const {useCanvas} = this.state;
    const { hoveredNode1, hoveredNode2, hoveredNode3, hoveredNodeNewDeaths, hoveredNodeNewCases, hoveredNodeNewCasesBar, hoveredNodeTotalConfirmed } = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;


    var statewise = '';
    if(this.props.largeData.statewise) {

      statewise = this.props.largeData.statewise.map((state, i) => {
        return (
          <tr key={state.state}>
            <th scope="row">#</th>
            <td>{state.state}</td>
            <td>{state.confirmed}</td>
            <td>{state.active}</td>
            <td className="state-deaths-num">{state.deaths}</td>
            <td className="state-recovered-num">{state.recovered}</td>
          </tr>
        )
      })
    }

    var yDomain = [0, 5000000];
    var xDomain = [0, 250];

    if (!this.state.isSignedIn) {
      return (
        <div className="text-center">
          <h1>TrackCoronaTrack</h1>
          <p>Please sign-in to view India dashboard</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }

    return (
      <div className="h1-container">
        {/* <InnerNavbar /> */}

        <div>
          <Navbar color="" expand="md" className="header fixed-top">
            <NavbarBrand href="/home" className="">Track Corona Track</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <div className="user-name-div">Welcome {firebase.auth().currentUser.displayName}!</div>
                  <Button outline color="primary" onClick={() => firebase.auth().signOut()}>Logout</Button>
                </Nav>
            </Collapse>
          </Navbar>
        </div>


        <Container fluid>

          <Row className="mt-4">

            <Col md={2}></Col>

            <Col md={8}>

              <div className="heading1">Covid-19 Dasboard India</div>

              <Row className="mb-5">
                <Col md={3} xs={6}>
                  <div className="card1">
                    <div><span className="card1-in">India</span> Cases</div>
                    <div className="in-cases">{this.state.indiaConfirmed}</div>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="card1">
                    <div><span className="card1-in">India</span> Active</div>
                    <div className="in-active">{this.state.indiaActive}</div>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="card1">
                    <div><span className="card1-in">India</span> Deaths</div>
                    <div className="in-deaths">{this.state.indiaDeaths}</div>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="card1">
                    <div><span className="card1-in">India</span> Recovered</div>
                    <div className="in-recovered">{this.state.indiaRecovered}</div>
                  </div>
                </Col>
              </Row>
              
            </Col>

            <Col md={2}></Col>

          </Row>    

          
          <Row>

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-2 text-center">Total confirmed cases, (<s>active cases</s>,) recoveries and deaths</div>
                <FlexibleXYPlot 
                  height={250} 
                  {...{xDomain, yDomain}} 
                  margin={{left: 80}} 
                  onMouseLeave={() => this.setState({hoveredNode1: null, hoveredNode2: null, hoveredNode3: null})}
                  className="graph1-c"
                >
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis (Days from 30 Jan 2020)"
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                  />
                  <ChartLabel 
                    text="count"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_11}
                    onNearestX={(value, { index }) => {this.setState({hoveredNode1: value}); } }
                    xOffset={0}
                    yOffset={0}
                    color="#FFCA28"
                  />
                  {/* <Line
                    className="first-series"
                    data={this.state.graph_data_1}
                  /> */}
                  <Line
                    className="first-series"
                    data={this.state.graph_data_13}
                    onNearestX={(value, { index }) => {this.setState({hoveredNode2: value}); } }
                    xOffset={300}
                    yOffset={300}
                    color="#43A047"
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_14}
                    onNearestX={(value, { index }) => {this.setState({hoveredNode3: value}); } } 
                    color="#e53935"
                  />
                  {hoveredNode1 && (
                    <Hint
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        Date: hoveredNode1.x,
                        '_____':'______________',
                        Confirmed: hoveredNode1.y,
                        Recovered: hoveredNode2.y,
                        Deaths: hoveredNode3.y
                      }}
                      style={{marginLeft: 100, marginTop: -200}}
                    />
                  )}

                </FlexibleXYPlot>
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMS1} />
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-2 text-center">Daily new deaths</div>
                <FlexibleXYPlot height={250} xDomain={[0, 250]} yDomain={[0, 2500]} margin={{left: 80}} onMouseLeave={() => this.setState({hoveredNodeNewDeaths: null})}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis (Days from 30 Jan 2020)"
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                  />
                  <ChartLabel 
                    text="count"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_21}
                    color="#e53935"
                    onNearestX={(value, { index }) => {this.setState({hoveredNodeNewDeaths: value}); } } 
                  />
                  {hoveredNodeNewDeaths && (
                    <Hint
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        Date: hoveredNodeNewDeaths.x,
                        '_____':'______________',
                        Deaths: hoveredNodeNewDeaths.y
                      }}
                      style={{marginLeft: 100, marginTop: -200}}
                    />
                  )}
                </FlexibleXYPlot>
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMS2} />
                </div>
              </div>
            </Col>

          </Row>

                    
          <Row>

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-2 text-center">Daily new cases</div>
                <FlexibleXYPlot height={250} yDomain={[0, 100000]} xDomain={[0, 250]} margin={{left: 80}} onMouseLeave={() => this.setState({hoveredNodeNewCases: null})}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis (Days from 30 Jan 2020)"
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                  />
                  <ChartLabel 
                    text="count"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_2}
                    color="#FFCA28"
                    onNearestX={(value, { index }) => {this.setState({hoveredNodeNewCases: value}); } } 
                  />
                  {hoveredNodeNewCases && (
                    <Hint
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        Date: hoveredNodeNewCases.x,
                        '_____':'______________',
                        Deaths: hoveredNodeNewCases.y
                      }}
                      style={{marginLeft: 100, marginTop: -200}}
                    />
                  )}
                </FlexibleXYPlot>
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMSNEWCASES} />
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-2 text-center">Daily new cases (Bar chart)</div>
                <FlexibleXYPlot height={250} yDomain={[0, 100000]} xDomain={[0, 250]} margin={{left: 80}} onMouseLeave={() => this.setState({hoveredNodeNewCasesBar: null})}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis (Days from 30 Jan 2020)"
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                  />
                  <ChartLabel 
                    text="count"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <BarSeries className="vertical-bar-series-example" data={this.state.graph_data_2}
                    color="#FFCA28" 
                    onNearestX={(value, { index }) => {this.setState({hoveredNodeNewCasesBar: value}); } }
                  />
                  {hoveredNodeNewCasesBar && (
                    <Hint
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        Date: hoveredNodeNewCasesBar.x,
                        '_____':'______________',
                        Deaths: hoveredNodeNewCasesBar.y
                      }}
                      style={{marginLeft: 100, marginTop: -200}}
                    />
                  )}
                </FlexibleXYPlot>
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMSNEWCASESBAR} />
                </div>
              </div>
            </Col>

          </Row>


          <Row>

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-2 text-center">Total Confirmed from beginning (30th Jan to Today)</div>
                <FlexibleXYPlot height={250} {...{xDomain, yDomain}} margin={{left: 80}} onMouseLeave={() => this.setState({hoveredNodeTotalConfirmed: null})}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis (Days from 30 Jan 2020)"
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                  />
                  <ChartLabel 
                    text="count"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_1}
                    color="#FFCA28" 
                    onNearestX={(value, { index }) => {this.setState({hoveredNodeTotalConfirmed: value}); } }
                  />
                  {hoveredNodeTotalConfirmed && (
                    <Hint
                      getX={d => d.x}
                      getY={d => d.y}
                      value={{
                        Date: hoveredNodeTotalConfirmed.x,
                        '_____':'______________',
                        Deaths: hoveredNodeTotalConfirmed.y
                      }}
                      style={{marginLeft: 100, marginTop: -200}}
                    />
                  )}
                </FlexibleXYPlot>               
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMSTOTALCONFIRMED} />
                </div>
              </div>
            </Col>

            {/* <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Bar chart for Daily confirmed (30th Jan to Today)</div>
                <FlexibleXYPlot height={250} yDomain={[0, 100000]} xDomain={[0, 250]}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <BarSeries className="vertical-bar-series-example" data={this.state.graph_data_2} />
                </FlexibleXYPlot>
              </div>
            </Col> */}

          </Row>

          
          <Row className="mt-3">

            <Col md="6">
              <div className="graph-c">
                <div className="mt-3 mb-3 text-center">Statewise Statistics</div>
                <div style={{height: '400px', overflow: 'auto'}}>
                  <Table hover >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                      </tr>
                    </thead>
                    <tbody>{statewise}</tbody>
                  </Table>
                </div>
                
              </div>
            </Col>

            <Col md="6">
              <div className="graph-c pie-container">
                <div className="mt-3 mb-3 text-center">Overall Deaths vs Active Cases vs Recovered in India</div>
                <div className="" style={{height: '400px', display: 'flex', alignItems: 'center'}}>
                  <RadialChart
                    data={this.state.pieData}
                    width={300}
                    height={300} 
                    colorType="literal"
                    showLabels={true}
                    onValueMouseOver={this.handlePieMouseOver}
                  />
                </div>
                <div className="color-legend">
                  <DiscreteColorLegend orientation="horizontal" items={ITEMSPIEOVERALL} />
                </div>
              </div>
            </Col>

          </Row>

          <Row className="mt-5 card2-row">
            <Col md="3" className="card2">
              <div className="">
                <div className="c-title">State having highest cases</div>
                <div className="state-name">Maharashtra</div>
              </div>
            </Col>
            <Col md="3" className="card2">
              <div className="">
                <div className="c-title">State having maximum death rate</div>
                <div className="state-name">Punjab</div>
              </div>
            </Col>
            <Col md="3" className="card2">
            <div className="">
                <div className="c-title">State having highest recovery rate</div>
                <div className="state-name">Andaman & Nicobar Islands</div>
              </div>
            </Col>
          </Row> 
          
          <div className="" style={{marginTop: '200px'}}></div>

          <div className="footer-c">All Rights Reserved &copy; 2020 TrackCoronaTrack</div>

        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  fetchLargeData: PropTypes.func.isRequired,
  // largeData: PropTypes.array.isRequired
  // largeData: PropTypes.array
}

const mapStateToProps = state => ({
  largeData: state.home.dataItems
});

export default connect(mapStateToProps, { fetchLargeData })(Home);

