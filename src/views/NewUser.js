/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  FormInput,
  Col,
  Card,
  Button,
} from "shards-react";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import PageTitle from "../components/common/PageTitle";


const styles = {
  mainContainer:  {
    paddingLeft: '7%',
    paddingRight: '7%'
  }
};


class NewUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <Container fluid className="main-content-container" >
      <div style={styles.mainContainer}>
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="New User" subtitle="Users" className="text-sm-left" />
        </Row>
        <div className="text-center">
          <Col lg="6" style={{display: 'inline-block'}}>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Create User</h6>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form className="text-left">
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="FirstName">First Name</label>
                            <FormInput
                              id="FirstName"
                              onChange={() => {}}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <FormInput
                              id="lastName"
                              onChange={() => {}}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="email">Email</label>
                            <FormInput
                              id="email"
                              onChange={() => {}}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="password">Password</label>
                            <FormInput
                              id="password"
                              onChange={() => {}}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                           <label htmlFor="image">Image</label>
                            <CustomFileUpload />
                          </Col>
                        </Row>
                        <Button theme="accent">Save</Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>

            </Card>
          </Col>
        </div>

        </div>
      </Container>
    );
  }
}

export default NewUser;
