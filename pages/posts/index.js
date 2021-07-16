import { getAllPosts } from '../../services/posts';

import AllPosts from '../../components/posts/all-posts';

const PostsPage = (props) => {
  const { posts } = props;

  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostsPage;
