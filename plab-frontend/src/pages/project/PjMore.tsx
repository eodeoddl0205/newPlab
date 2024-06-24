import styled from 'styled-components';
import Header from '../../components/Header';
import Post from '../../components/Post';
import { posts } from '../../data/postData';

const sortedPosts = [...posts].sort((a, b) => b.views - a.views);
const topPosts = sortedPosts.slice(0, 8);

const PjMore = () => {
  return (
    <>
      <Header />
      <Section>
        <div className='inner'>
          <div className='post-grid'>
            {topPosts.map(post => (
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                views={post.views}
                createdAt={post.createdAt}
                isRecruiting={post.isRecruiting}
                field={post.field}
                studyOrProject={post.studyOrProject}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  & > .inner > .post-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin: 20px 0;
  }
`;

export default PjMore;
