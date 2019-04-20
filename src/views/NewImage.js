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

const styles = {
  mainContainer:  {
    paddingLeft: '7%',
    paddingRight: '7%'
  },
  dropboxContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
    paddingBottom: '80px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#b3d9ff',
    borderStyle: 'dashed',
    backgroundColor: '#e6f2ff',
    color: '#4da6ff',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  },
  dropboxTitle: {
    fontSize: 30,
    color: '#737373'
  },
  dropboxLink: {
    fontWeight: 'bold',
    color: '#0080ff',
    cursor:' pointer',
    textDecoration: 'underline'
  }
};


class NewImage extends React.Component {

 
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
      <Container fluid className="main-content-container px-4">
        <div style={{paddingLeft: '7%', paddingRight: '7%', height: '100%'}}>
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="New Image" subtitle="Images" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <div style={{textAlign: 'center'}}>
          <Col lg="5" style={{display: 'inline-block'}}>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0"> Add Image</h6>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form style={{textAlign: 'left'}}>

                        <Row form>
                          {/* City */}
                          <Col md="12" className="form-group">
                            <label htmlFor="feFirstName">Uploader / Dropzone</label>
                            <Dropzone onDrop={this.onDrop} >
                              {({getRootProps, getInputProps}) => (
                                <div {...getRootProps()} style={styles.dropboxContainer}>
                                  <input {...getInputProps()} />
                                  <i class="material-icons" style={{fontSize: 30}}>cloud_upload</i>
                                  <span style={{fontSize: 30, color: '#737373'}}>Drag & Drop </span>
                                  <p className="m-0">your files, or <span style={{fontWeight: 'bold', color: '#0080ff', cursor:' pointer', textDecoration: 'underline' }}>browse</span></p>
                                </div>
                              )}
                            </Dropzone>
                        
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

export default NewImage;
