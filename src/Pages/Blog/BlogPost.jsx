const BlogPost = ({post, index}) => {
  return (
    <div className="card border shadow-xl mt-8">
      <div className="card-body">
        <h2 className="card-title text-2xl">{index + 1}. {post.question}</h2>
        <p>{post.answer}</p>
        
      </div>
    </div>
  );
};

export default BlogPost;
