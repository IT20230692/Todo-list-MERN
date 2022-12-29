import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  //create method
  retrivePosts() {
    axios.get("http://localhost:8000/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h1>All Posts</h1>
        <table class="table">
          <thead>
            <tr>
              <td scope="col">#</td>
              <td scope="col">Topic</td>
              <td scope="col">Description</td>
              <td scope="col">postCategory</td>
              <td scope="col">Action</td>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{posts.topic}</td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))};

          </tbody>
        </table>
        {/* { this.state.posts.map(posts => (
        <div>
        <p>{posts.topic}</p>
        <p>{posts.description}</p>
        <p>{posts.postCategory}</p>
        </div>
        ))} */}
      </div>
    )
  }
}
