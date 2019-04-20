/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  CardHeader,
  Row,
  Col,
  Card,
} from "shards-react";


import PageTitle from "../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";

const styles = {
  mainContainer:  {
    paddingLeft: '7%',
    paddingRight: '7%'
  },
  row: {
    borderStyle: 'solid',
    borderWidth: ' 0px 0px 1px 0px',
    borderColor: '#ccc'
  },
  label: {
    fontSize: 'larger',
    fontWeight: '500'
  }
};

class EditUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    smallStats: [
      {
        label: "Comments",
        value: "8,147",
        percentage: "3.8%",
        increase: false,
        decrease: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,180,0,0.1)",
            borderColor: "rgb(255,180,0)",
            data: [2, 3, 3, 3, 4, 3, 3]
          }
        ]
      },
      {
        label: "New Users",
        value: "29",
        percentage: "2.71%",
        increase: true,
        decrease: false,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,65,105,0.1)",
            borderColor: "rgb(255,65,105)",
            data: [1, 7, 1, 3, 1, 4, 8]
          }
        ]
      },
      {
        label: "Users",
        value: "17,281",
        percentage: "2.4%",
        increase: true,
        decrease: false,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgb(0,123,255,0.1)",
            borderColor: "rgb(0,123,255)",
            data: [3, 2, 3, 2, 4, 5, 4]
          }
        ]
      }
    ]
    };
  }

  onDrop(imageFiles) {
    this.setState({
        imageFiles: imageFiles
    })
    console.log(imageFiles)  
}

  render() {

    const {
      smallStats,
    } = this.state;

    return (
      <Container fluid className="main-content-container" >
      <div style={styles.mainContainer}>
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Show User" subtitle="Users" className="text-sm-left" />
        </Row>

        <Row className="py-5" style={styles.mainContainer}>
          {smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>
        
        <div className="text-center">
          <Card small className="mb-4 pl-2 pr-2 col-md-5 m-3" style={{display: 'inline-block'}}>
            <CardHeader className="border-bottom text-center p-0">
            
            <Row md="3" sm="12">
              <div className="mt-3 mx-auto" style={{paddingTop: '20px', paddingBottom: '10px'}}>
                <img
                  className="rounded-circle"
                  src={require("./../images/avatars/2.jpg")}
                  alt="John Doe"
                  width="90"
                />
              </div>
              </Row>
              <Row>
                <Col md="12" sm="12" className=" pb-2">
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Name:</label> John Doe
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                     <label style={styles.label}>Title:</label> Project Manager
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Mobile:</label> 305.468.8952
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Membership:</label> PREMIUM
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Email:</label> john_doe@email.com
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Instagram:</label> @theRealJD
                  </div>
                  <div className=" pl-3 text-left" style={styles.row}>
                    <label style={styles.label}>Facebook:</label> JohnDowNumber55
                  </div>
                  <div className=" pl-3 text-left" >
                    <label style={styles.label}>Twitter:</label> JDoe87
                  </div>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </div>
        </div>
      </Container>
    );
  }
}

export default EditUser;
