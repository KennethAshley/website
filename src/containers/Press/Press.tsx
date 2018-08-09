import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { History } from 'history';
import posed, { PoseGroup } from 'react-pose';
import { device } from '@src/breakpoints';

import PostPreview from '@components/Blog/PostPreview';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PostContainer = styled(
  posed.div({
    enter: {
      y: '0%'
    },
    exit: {
      y: '10%'
    }
  })
)`
  display: flex;
  flex-grow: 0;
  width: 50%;

  @media ${device.mobileS} and (max-width: 767px) {
    width: 100%;
  }
`;

const RootWrap = styled.div`
  header {
    align-items: center;
    height: 200px;
    display: flex;
    justify-content: center;
    background: #181e26;
    width: 100%;
  }

  .title {
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  }

  .gridContainer {
    max-width: 100%;
    margin: 0 auto;
    width: 1180px;
    padding: 24px;
  }

  .row {
    margin-top: 24px;
  }

  .subtitle {
    color: #646469;
    font-size: 14px;
    line-heigh: 20px;
    margin-top: 10px;
  }

  .load-more-button {
    display: block;
    font-size: 20px;
    margin: 100px auto;
    padding: 0 65px;
    text-align: center;
  }
`;

const isClient = typeof window !== 'undefined';

const parseCategory = (category: string) => {
  return category.replace(/\s+/g, '-').toLowerCase();
};

interface BlogProps {
  posts: Post[];
  categories: string[];
  history: History;
}

interface BlogState {
  numPostsPerPage: number;
  posts: Post[];
  selectedCat: string;
  page: number;
}

interface Post {
  data: {
    title: string;
    author: string;
    category: string;
    published_at: number;
    medium_link: string;
    thumbnail: string;

    slug: string;
    readtime: number;
  };
  content: string;
}

class Press extends React.Component<BlogProps, BlogState> {
  private handleScroll: EventListener;

  constructor(props: BlogProps) {
    super(props);

    this.handleScroll = throttle(() => {
      this.forceUpdate();
    }, 10);

    this.state = {
      numPostsPerPage: 5,
      page: 1,
      posts: [],
      selectedCat: 'All'
    };
  }

  componentDidMount() {
    const { categories, history, posts } = this.props;

    this.setState({ posts });

    if (isClient) {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);
    }

    if (history.location.search) {
      const params = new URLSearchParams(history.location.search.toString());
      const category = params.get('category');

      if (category) {
        categories.map(c => {
          if (category === parseCategory(c)) {
            this.onSelectCat(c);
          }
        });
      }
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
    }
  }

  onSelectCat = (selectedCat: string) => {
    if (selectedCat === 'All') {
      this.props.history.push('/blog');
    } else {
      this.props.history.push(`/blog?category=${parseCategory(selectedCat)}`);
    }

    this.setState({ selectedCat });
  }

  deselectCat = () => {
    this.props.history.push('/blog');
    this.setState({ selectedCat: 'All' });
  }

  onLoadMore = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {
    const { selectedCat, numPostsPerPage, posts = [], page } = this.state;

    const endIndex = page * numPostsPerPage;
    const filteredPosts =
      selectedCat === 'All'
        ? posts
        : posts.filter(post => selectedCat === post.data.category);
    const visiblePosts = filteredPosts.slice(0, endIndex);

    // We should load if we have more then 5 items a page
    // and when paginating we are less then the total amount of posts
    const shouldLoad =
      filteredPosts.length > numPostsPerPage &&
      visiblePosts.length + 1 < filteredPosts.length;

    return (
      <RootWrap>
        <header>
          <div className="title">Press</div>
        </header>
        <div className="gridContainer">
          <Row gutter={24}>
            <PostsContainer>
              <PoseGroup>
                {visiblePosts.map((post, i) => (
                  <PostContainer key={i}>
                    <PostPreview
                      base="press"
                      key={`post#${i}`}
                      history={this.props.history}
                      post={post}
                      i={i}
                    />
                  </PostContainer>
                ))}
              </PoseGroup>
              <Col xs={{ span: 24 }}>
                {shouldLoad && (
                  <Button
                    type="primary"
                    className="load-more-button"
                    onClick={this.onLoadMore}
                  >
                    Load more
                  </Button>
                )}
              </Col>
            </PostsContainer>
          </Row>
        </div>
      </RootWrap>
    );
  }
}

export default Press;
