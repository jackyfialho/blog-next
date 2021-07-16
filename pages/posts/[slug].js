import { getPostData, getPostFiles } from '../../services/posts';

import PostContent from '../../components/posts/post-detail/post-content';

const PostDetailPage = (props) => {
  const { post } = props;

  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    //se o arquivo do post for atualizado, ainda teremos os novos dados a cada 10min
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
