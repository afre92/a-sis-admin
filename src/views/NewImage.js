/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  Col,
  Card,
  Button,
} from "shards-react";

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
        <div style={styles.mainContainer}>

        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="New Image" subtitle="Images" className="text-sm-left" />
        </Row>

        <div className="text-center">
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
                          <Col md="12" className="form-group">
                            <label htmlFor="feFirstName">Uploader / Dropzone</label>
                            <Dropzone onDrop={this.onDrop} >
                              {({getRootProps, getInputProps}) => (
                                <div {...getRootProps()} style={styles.dropboxContainer}>
                                  <input {...getInputProps()} />
                                  <i class="material-icons" style={{fontSize: 30}}>cloud_upload</i>
                                  <span style={styles.dropboxTitle}>Drag & Drop </span>
                                  <p className="m-0">your files, or <span style={styles.dropboxLink}>browse</span></p>
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
