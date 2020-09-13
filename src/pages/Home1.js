import React from 'react';
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
  LabelSeries
} from 'react-vis';
import "react-vis/dist/style.css";
import InnerNavbar from '../components/InnerNavbar';


// const myDATA = [
//   {id: '00036', y: 200400, x: 1504121437},
//   {id: '00036', y: 200350, x: 1504121156},
//   {id: '00036', y: 200310, x: 1504120874},
//   {id: '00036', y: 200260, x: 1504120590},
//   {id: '00036', y: 200210, x: 1504120306},
//   {id: '00036', y: 200160, x: 1504120024},
//   {id: '00036', y: 200120, x: 1504119740},
//   {id: '00036', y: 200070, x: 1504119458},
//   {id: '00036', y: 200020, x: 1504119177},
//   {id: '00036', y: 199980, x: 1504118893},
//   {id: '00036', y: 199930, x: 1504118611},
//   {id: '00036', y: 199880, x: 1504118330},
//   {id: '00036', y: 199830, x: 1504118048},
//   {id: '00036', y: 199790, x: 1504117763},
//   {id: '00036', y: 199740, x: 1504117481}
// ];

// const yDomain = myDATA.reduce(
//   (res, row) => {
//     return {
//       max: Math.max(res.max, row.y),
//       min: Math.min(res.min, row.y)
//     };
//   },
//   {max: -Infinity, min: Infinity}
// );


// const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

// // const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   // y: Math.max(greenData[idx].y, blueData[idx].y)
//   y: Math.max(greenData[idx].y)
// }));


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      statewise: [],
      useCanvas: false,
      cases_time_series: [],
      graph_data: [],
      graph_data_1: [],
      graph_data_2: [],

      indiaConfirmed: null,
      indiaActive: null,
      indiaDeaths: null,
      indiaRecovered: null
    }
  }

  componentDidMount() {
    // check if login cookie already exists
    // https://api.covid19india.org/data.json
    this.fetchIndiaData();
  }

  fetchIndiaData = () => {

    fetch('https://api.covid19india.org/data.json', {
      // method: 'POST'
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // }
    
    }).then((response) => response.json())
          .then( (responseJson) => {
            // 
            console.log(responseJson);
            console.log(responseJson.statewise);
            console.log(responseJson.cases_time_series);
            this.setState({statewise: responseJson.statewise});
            // this.setState({cases_time_series: responseJson.cases_time_series});

            this.setState({indiaConfirmed: responseJson.statewise[0].confirmed});
            this.setState({indiaActive: responseJson.statewise[0].active});
            this.setState({indiaDeaths: responseJson.statewise[0].deaths});
            this.setState({indiaRecovered: responseJson.statewise[0].recovered});



            responseJson.cases_time_series.map((casee, i) => {

      
              // ca = casee.totalconfirmed
              var abc = {};
              abc = {
                x: i,
                y: casee.totalconfirmed
              };
              // graph_data.push({x: {i}, y: {casee.totalconfirmed}})
              // graph_data.push(abc);
              this.setState({
                graph_data_1: [...this.state.graph_data_1, abc]
              })
        
              
            })



            responseJson.cases_time_series.map((casee, i) => {

      
              // ca = casee.totalconfirmed
              var abc = {};
              abc = {
                x: i,
                y: casee.dailyconfirmed
              };
              // graph_data.push({x: {i}, y: {casee.totalconfirmed}})
              // graph_data.push(abc);
              this.setState({
                graph_data_2: [...this.state.graph_data_2, abc]
              })
        
              
            })











            // console.log(responseJson.posts_data);
            // this.setState({ posts_data: responseJson.posts_data});

            // if(responseJson.msg === 'success') {
            //   const b = responseJson.basic[0];
            //   let p_img;
            //   if(b['profile_img'] === '') {
            //     p_img = <img src={require('../assets/images/user.jpg')} className="rounded-circle" alt="" />;
            //   } else {
            //     p_img = <img src={b['profile_img']} className="rounded-circle" alt="" />
            //   }
            //   this.setState({fname: b['fname'], lname: b['lname'], p_img: p_img});
            // } else {
            //   alert('unable to fetch your profile details');
            // }
            
            
          }).catch((error) => {
            console.error(error);
          });

  }

  changeInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    // console.log(this.state[e.target.name]);
  }

  handleCreateAccount(e) {
    e.preventDefault();

    const { fname, lname, email, password } = this.state ;
  }

  createGraph = () => {

  }

  render () {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    var statewise = this.state.statewise.map((state, i) => {
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

    
    // var time_series_1 = this.state.cases_time_series.map((casee, i) => {

      
    //   // ca = casee.totalconfirmed
    //   var abc = {};
    //   abc = {
    //     x: i,
    //     y: casee.totalconfirmed
    //   };
    //   // graph_data.push({x: {i}, y: {casee.totalconfirmed}})
    //   // graph_data.push(abc);
    //   this.setState({
    //     graph_data_1: [...this.state.graph_data_1, abc]
    //   })

      
    // })

    // console.log(this.state.graph_data_1);

    // this.state.cases_time_series.totalconfirmed


    var yDomain = [0, 5000000];
    var xDomain = [0, 250];
    // , yDomain}}

    var x2Domain = [0, 100000];
    var y2Domain = [0, 250];

    return (
      <div>
        <InnerNavbar />
        <Container fluid>
          <Row>
            <Col md={8}>
              {/* <div>India</div>
              <div>Confirmed: 1000</div>
              <div>Active: 500</div>
              <div>Deaths: 200</div>
              <div>Last updated time: 09/09/2020</div>
              <div>Recovered: 200</div> */}
            </Col>

            <Col md={4}>
              {/* <div className="create-c">
                <FormGroup>
                  <Label for="fname">First Name</Label>
                  <Input type="text" name="fname" id="fname" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="lname">Last Name</Label>
                  <Input type="text" name="lname" id="lname" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <Button color="primary" block onClick={this.handleCreateAccount}>Create Account</Button>
              </div> */}
            </Col>

          </Row>

          <Row className="mt-5">

            <Col md={2}></Col>

            <Col md={8}>

              <Row className="mb-5">
                <Col md={3}>
                  <div className="card1">
                    <div>India Cases</div>
                    <div className="in-cases">{this.state.indiaConfirmed}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <div>India Active</div>
                    <div className="in-active">{this.state.indiaActive}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <div>India Deaths</div>
                    <div className="in-deaths">{this.state.indiaDeaths}</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    <div>India Recovered</div>
                    <div className="in-recovered">{this.state.indiaRecovered}</div>
                  </div>
                </Col>
              </Row>
              

              

              <div className="table-header">Statewise Statistics</div>

              <Table striped>
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
                <tbody>
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr> */}

                  {statewise}

                </tbody>
              </Table>
            </Col>

            <Col md={2}></Col>

          </Row>    

          {/* <Button color="primary" onClick={this.createGraph}>Create graph</Button> */}

          <div className="mt-5">Total Confirmed from beginning (30th Jan to Today)</div>
          <XYPlot width={1200} height={500} {...{xDomain, yDomain}}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <ChartLabel 
              text="X Axis"
              className="alt-x-label"
              includeMargin={false}
              // xPercent={0.025}
              // yPercent={1.01}
              />

            <ChartLabel 
              text="Y Axis"
              className="alt-y-label"
              includeMargin={false}
              // xPercent={0.06}
              // yPercent={0.06}

              style={{
                transform: 'rotate(-90)',
                textAnchor: 'end'
              }}
              />
            <Line
              className="first-series"
              // data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
              data={this.state.graph_data_1}
            />
            {/* <Line className="second-series" data={null} />
            <Line
              className="third-series"
              curve={'curveMonotoneX'}
              data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
              strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            />
            <Line
              className="fourth-series"
              // curve={curveCatmullRom.alpha(0.5)}
              style={{
                // note that this can not be translated to the canvas version
                strokeDasharray: '2 2'
              }}
              data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
            /> */}
          </XYPlot>


          {/* <XYPlot
            margin={{left: 75}}
            xType="time"
            width={300}
            height={300}
            yDomain={[yDomain.min, yDomain.max]}
          >
            <BarSeries className="vertical-bar-series-example" data={myDATA} />
            <XAxis />
            <YAxis />
          </XYPlot> */}


          <div className="mt-5">Bar chart for Daily confirmed (30st Jan to Today)</div>
          {/* <XYPlot xType="ordinal" width={500} height={500}> */}
          <XYPlot width={1200} height={500} yDomain={[0, 100000]} xDomain={[0, 250]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries className="vertical-bar-series-example" data={this.state.graph_data_2} />
            {/* <BarSeries data={blueData} /> */}
            {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
          </XYPlot>



          <div className="mt-5"></div>


        </Container>
      </div>
    );
  }
}

export default Home;