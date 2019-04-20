/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NavbarSearch from "../components/layout/MainNavbar/NavbarSearch";

const styles = {
  mainContainer:  {
    paddingLeft: '7%',
    paddingRight: '7%'
  },
  icons: {
    fontSize: 22
  }
};

class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageList: [
        {
          backgroundImage: require("../images/content-management/8.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),

        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/8.jpeg"),
        },
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
        }
      ]
    };
  }

  render() {
    const {
      ImageList,
    } = this.state;

    return (
      <Container fluid className="main-content-container" style={styles.mainContainer}>

        <Row noGutters className="page-header py-4" >
          <PageTitle title="Images List" subtitle="Images" className="text-sm-left col-md-6" />
           <a href="/new-image" className="orange col-md-6 text-right">
            <p className="p-0" style={{fontSize: 20}}> 
              <i class="material-icons" style={{fontSize: 25, top: '6px'}}>add</i>
              New Image
              </p>
            </a>

          <span className="w-100">
            <NavbarSearch className="mr-4"/>        
          </span>  
                
        </Row>

        <Row>
          {ImageList.map((post, idx) => (
            <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
              <div style={{width: '100%', overflow: 'hidden'}}>
              <span style={{float: 'right'}}>
                <a href="#" onClick={console.log('delete')} > 
                  <i class="material-icons" style={styles.icons}>edit</i>
                </a>
                <a href="#" style={{paddingLeft: '10px'}}>
                  <i class="material-icons" style={styles.icons}>delete_forever</i>
                </a>
              </span>
              </div>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default Images;
