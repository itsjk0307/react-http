import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get(" https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Error data" });
      });
  }

  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
