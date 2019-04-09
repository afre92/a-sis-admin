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
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Calm",
          categoryTheme: "green",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Playlists Name",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:26'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:54'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '2:06'}],
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Energized",
          categoryTheme: "warning",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:01'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:06'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Relaxed",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '1:24'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '2:44'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '2:06'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '4:05'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Happy",
          categoryTheme: "magenta",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '2:45'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:16'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:54'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
          category: "Peaceful",
          categoryTheme: "info",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '2:32'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:12'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}],
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
          category: "Greateful",
          categoryTheme: "purple",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:36'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '1:41'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:22'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/7.jpeg"),
          category: "Happy",
          categoryTheme: "magenta",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:02'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 1', artistName: 'John Doe', trackDuration: '3:09'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/8.jpeg"),
          category: "Energized",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '2:00'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:24'}, {trackName: 'Song 3', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 4', artistName: 'John Doe', trackDuration: '3:30'}],
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Energized",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body: [{trackName: 'Song 1', artistName: 'John Doe', trackDuration: '2:00'}, {trackName: 'Song 2', artistName: 'John Doe', trackDuration: '3:24'}, {trackName: 'Song 3', artistName: 'John Doe', trackDuration: '3:04'}, {trackName: 'Song 4', artistName: 'John Doe', trackDuration: '3:30'}],
          date: "29 February 2019"
        }
      ]
    };
  }

  render() {
    const {
      PostsListOne,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4" >
        {/* Page Header */}
        <Row noGutters className="page-header py-4" style={{paddingLeft: '100px', paddingRight: '100px'}}>
          <PageTitle sm="10" title="Playlists" subtitle="" className="text-sm-left" />
                
                   <a href="/new-playlist" ><p className="p-0" style={{fontSize: 20}}> New Playlist<i class="material-icons" style={{fontSize: 25, top: '6px'}}>add</i></p>
                     
                    </a>
                
        </Row>

        {/* First Row of Posts */}
        <Row style={{paddingLeft: '100px', paddingRight: '100px'}}>
          {PostsListOne.map((post, idx) => (
            <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
              <div style={{width: '100%'}}>
              <div>
                <a href="#" onClick={console.log('dlete')}> 
                  <i class="material-icons" style={{fontSize: 22}}>edit</i>
                </a>
                <a href="#">
                  <i class="material-icons" style={{fontSize: 22}}>delete_forever</i>
                </a>
              </div>
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
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
          <CardBody className="p-0 pb-3 mt-5">
            <table className="table mb-0">
              <tbody>
              { Object.keys(post.body).map( (item, idx) => (
                <tr key={idx}>
                  <td style={{paddingLeft: '20px'}}>{post.body[item].trackName} <br/>
                    <p className="p-0 m-0" style={{fontSize: 'smaller', color: 'grey'}}>{post.body[item].artistName}</p>
                  </td>
                  <td style={{flex: 2}}></td>
                  <td></td>
                  <td style={{textAlign: 'right', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px'}}>{post.body[item].trackDuration}</td>
                </tr>
              ))
              }
              </tbody>
            </table>
          </CardBody>
              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default Playlists;
