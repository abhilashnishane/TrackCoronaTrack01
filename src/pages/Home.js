import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLargeData } from '../actions/homeActions';

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

const FlexibleXYPlot = makeWidthFlexible(XYPlot); 


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    }
  }

  componentDidMount() {
    // check if login cookie already exists
    // this.fetchIndiaData();
    this.props.fetchLargeData();
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
            { angle: this.props.largeData.statewise[0].deaths },
            { angle: this.props.largeData.statewise[0].active },
            { angle: this.props.largeData.statewise[0].recovered },
          ]
        }) 
        // const pieData = [{angle: 1}, {angle: 5}, {angle: 2}];
    }

  }


  render () {
    const {useCanvas} = this.state;
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

    return (
      <div>
        <InnerNavbar />
        <Container fluid>

          <Row className="mt-4">

            <Col md={2}></Col>

            <Col md={8}>

              <div className="heading1">Covid-19 Dasboard India</div>

              <Row className="mb-5">
                <Col md={3}>
                  <div className="card1">
                    <div>India Cases</div>
                    <div className="in-cases">{this.state.indiaConfirmed}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card1">
                    <div>India Active</div>
                    <div className="in-active">{this.state.indiaActive}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card1">
                    <div>India Deaths</div>
                    <div className="in-deaths">{this.state.indiaDeaths}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card1">
                    <div>India Recovered</div>
                    <div className="in-recovered">{this.state.indiaRecovered}</div>
                  </div>
                </Col>
              </Row>
              
            </Col>

            <Col md={2}></Col>

          </Row>    

          
          <Row>

            <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Total confirmed cases, (<s>active cases</s>,) recoveries and deaths</div>
                <FlexibleXYPlot height={250} {...{xDomain, yDomain}}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis"
                    className="alt-x-label"
                    includeMargin={false}
                    />
                  <ChartLabel 
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_11}
                  />
                  {/* <Line
                    className="first-series"
                    data={this.state.graph_data_1}
                  /> */}
                  <Line
                    className="first-series"
                    data={this.state.graph_data_13}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_14}
                  />
                </FlexibleXYPlot>
              </div>
            </Col>

            <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Daily new deaths</div>
                <FlexibleXYPlot height={250} xDomain={[0, 250]} yDomain={[0, 2500]} >
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis"
                    className="alt-x-label"
                    includeMargin={false}
                    />
                  <ChartLabel 
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_21}
                  />
                </FlexibleXYPlot>
              </div>
            </Col>

          </Row>

                    
          <Row>

            <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Daily new cases</div>
                <FlexibleXYPlot height={250} yDomain={[0, 100000]} xDomain={[0, 250]}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis"
                    className="alt-x-label"
                    includeMargin={false}
                    />
                  <ChartLabel 
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_2}
                  />
                </FlexibleXYPlot>
              </div>
            </Col>

            <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Daily new cases (Bar chart)</div>
                <FlexibleXYPlot height={250} yDomain={[0, 100000]} xDomain={[0, 250]}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <BarSeries className="vertical-bar-series-example" data={this.state.graph_data_2} />
                </FlexibleXYPlot>
              </div>
            </Col>

          </Row>


          <Row>

            <Col md="6">
              <div className="graph-c px-5">
                <div className="mt-3 mb-2 text-center">Total Confirmed from beginning (30th Jan to Today)</div>
                <FlexibleXYPlot height={250} {...{xDomain, yDomain}}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis />
                  <YAxis />
                  <ChartLabel 
                    text="X Axis"
                    className="alt-x-label"
                    includeMargin={false}
                    />
                  <ChartLabel 
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                  />
                  <Line
                    className="first-series"
                    data={this.state.graph_data_1}
                  />
                </FlexibleXYPlot>
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
              <div className="graph-c px-5">
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
              <div className="px-5 pie-container">
                <div className="mt-3 mb-3 text-center">Overall Deaths vs Active Cases vs Recovered in India</div>
                <div className="" style={{height: '400px', display: 'flex', alignItems: 'center'}}>
                  <RadialChart
                    data={this.state.pieData}
                    width={300}
                    height={300} 
                  />
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

