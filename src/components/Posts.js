import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {/* {post.title} */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <a href="!#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
