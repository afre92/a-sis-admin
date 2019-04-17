/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  FormGroup,
  FormInput,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormSelect,
  FormTextarea,
} from "shards-react";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import PageTitle from "../components/common/PageTitle";
import Dropzone from 'react-dropzone';
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

class EditUser extends React.Component {

 
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
    };
  }

  onDrop(imageFiles) {
    this.setState({
        imageFiles: imageFiles
    })
    console.log(imageFiles)  
}

  render() {

    return (
      <Container fluid className="main-content-container" >
      <div style={{paddingLeft: '7%', paddingRight: '7%', height: '100%'}}>
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Show User" subtitle="Users" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <div style={{textAlign: 'center'}}>
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
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Name:</label> John Doe
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                   <label style={{fontSize: 'larger', fontWeight: '500'}}>Title:</label> Project Manager
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Mobile:</label> 305.468.8952
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Membership:</label> PREMIUM
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Email:</label> john_doe@email.com
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Instagram:</label> @theRealJD
                </div>
                <div className=" pl-3"style={{textAlign: 'left', borderStyle: 'solid', borderWidth: ' 0px 0px 1px 0px', borderColor: '#ccc'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Facebook:</label> JohnDowNumber55
                </div>
                <div className=" pl-3"style={{textAlign: 'left'}}>
                  <label style={{fontSize: 'larger', fontWeight: '500'}}>Twitter:</label> JDoe87
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
