import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

import { FaBeer } from 'react-icons/fa';

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pl-2 pr-2 pb-2 col-5">
    <CardHeader className="border-bottom text-center p-0">
    <Row className="mb-3">
    <Col md="3">
      <div className="mt-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="90"
        />
      </div>
      </Col>
      <Col md="9" className=" pb-2">
        <div style={{textAlign: 'right', paddingRight: '20px', paddingTop: '5px'}}>
          <a href="#" style={{paddingRight: '20px'}}>
            <i class="material-icons" style={{fontSize: 25, top: '6px'}}>edit</i>
          </a>
          <a href="#">
            <i class="material-icons" style={{fontSize: 25, top: '6px'}}>delete_forever</i>
          </a>
        </div>
        <Row style={{fontSize: 'larger', fontWeight: 'bold'}}>
          {userDetails.name}
        </Row>
        <Row style={{color: 'grey'}}>
          {userDetails.jobTitle}
        </Row>
        <Row style={{color: 'grey'}}>
          Mobile: {userDetails.phoneNumber}
        </Row>
      </Col>
    </Row>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="py-0">
        <div style={{textAlign: 'center'}}>
        <Row>
        <Col>
           <i class="ionicons" style={{fontSize: 25, top: '6px' ,color: '#bfbfbf'}}>mail</i>
        </Col>
                <Col>
           <i class="material-icons" style={{fontSize: 25, top: '6px' ,color: '#bfbfbf'}}>delete_forever</i>
        </Col>
                <Col>
           <i class="material-icons" style={{fontSize: 25, top: '6px' ,color: '#bfbfbf'}}>delete_forever</i>
        </Col>
                <Col>
           <i class="material-icons" style={{fontSize: 25, top: '6px' ,color: '#bfbfbf'}}>mail_outline</i>
        </Col>
        </Row>
        </div>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    phoneNumber: "365.256.2563"
  }
};

export default UserDetails;
