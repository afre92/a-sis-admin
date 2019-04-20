/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  Button,
} from "shards-react";


import PageTitle from "../components/common/PageTitle";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import NavbarSearch from "../components/layout/MainNavbar/NavbarSearch";
import SmallStats from "./../components/common/SmallStats";

const styles = {
  mainContainer:  {
    paddingLeft: '7%',
    paddingRight: '7%'
  },
  importBtn: {
    float: 'right',
    marginLeft: '20px'
  },
  actionsContainer: {
    textAlign: 'right',
    paddingRight: '10px',
    paddingTop: '5px'
  },
  actionIcons: {
    fontSize: 25,
    top: '6px'
  },
  userInfo: {
    color: 'grey',
    fontWeight: 200
  },
  icons: {
    fontSize: 20,
    color: '#ccc'
  }
};


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserList: [
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/0.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "465.206.2575"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/2.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "365.246.2565"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/1.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "565.256.2563"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/3.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "347.255.2563"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/2.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "365.256.2570"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/0.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "567.256.4563"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/1.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "365.256.2570"
        },
        {
          name: "Sierra Brooks",
          avatar: require("./../images/avatars/3.jpg"),
          jobTitle: "Project Manager",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          phoneNumber: "567.256.4563"
        }
      ],
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
    }
  }

  render() {

    const {
      UserList,
      smallStats,
    } = this.state;

    return (
      <Container fluid className="main-content-container" >
        <div style={styles.mainContainer}>
          <Row noGutters className="page-header py-4">
            <PageTitle title="Users List" subtitle="Users" className="text-sm-left col-md-6" />       
            <a href="/new-user" className="orange col-md-6 text-right">
              <p className="p-0" style={{fontSize: 20}}> 
                <i class="material-icons" style={{fontSize: 25, top: '6px'}}>add</i> New User 
              </p>
            </a>
            <span className="w-100">
              <Button style={styles.importBtn} theme="accent">Import to CSV</Button> 
              <NavbarSearch className="mr-4"/> 
            </span>  
          </Row>
        </div>

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
        {UserList.map((user, idx) => (
          <Card small className="mb-4 pl-2 pr-2 col-md-5 m-3" style={{display: 'inline-block'}}>
            <CardHeader className="border-bottom text-center p-0">
            <Row className="mb-3">
            <Col md="3" sm="12">
              <div className="mt-3 mx-auto">
                <img
                  className="rounded-circle"
                  src={user.avatar}
                  alt={user.name}
                  width="90"
                />
              </div>
              </Col>
              <Col md="9" sm="12" className=" pb-2">
                <div style={styles.actionsContainer}>
                  <a href="/edit-user" style={{paddingRight: '10px'}}>
                    <i class="material-icons" style={styles.actionIcons}>edit</i>
                  </a>
                  <a href="#">
                    <i class="material-icons" style={styles.actionIcons}>delete_forever</i>
                  </a>
                </div>
                <Row style={{fontSize: 'larger', fontWeight: 'bold'}}>
                  <a href="/user" style={{color: '#3D5170'}}>{user.name}</a>
                </Row>
                <Row style={styles.userInfo}>
                  {user.jobTitle}
                </Row>
                <Row style={styles.userInfo}>
                  Mobile: {user.phoneNumber}
                </Row>
              </Col>
            </Row>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="py-0">
                <div style={{textAlign: 'center'}}>
                <Row>
                  <Col className="py-2">
                    <a href="#"><FaInstagram style={styles.icons}/></a>
                  </Col>
                  <Col className="py-2">
                    <a href="#"><FaFacebook style={styles.icons}/></a>
                  </Col>
                  <Col className="py-2">
                    <a href="#"><FaTwitter style={styles.icons}/></a>
                  </Col>
                  <Col className="py-2">
                    <a href="#"><FaEnvelope style={styles.icons}/></a>
                  </Col>
                </Row>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
        </div>
      </Container>
    );
  }
}


export default Users;
