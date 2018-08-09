import React from 'react';
import Moment from 'react-moment';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { createMemoryHistory, createBrowserHistory } from 'history';
import PostPreview from '@components/Blog/PostPreview';

describe('<PostPreview />', () => {
  const samplePost = {
    content: `MARKET Protocol provides an opportunity for crypto holders to gain exposure to both real-world 
      and digital assets through derivatives using crypto-based assets as collateral on the Ethereum blockchain.`,
    data: {
      author: 'Mary Jane',
      category: 'Development',
      published_at: '2018-06-09T05:00:00-05:00',
      slug: 'slug',
      thumbnail: 'path/to/thumbnail',
      title: 'The Title'
    }
  };

  let postPreview: ShallowWrapper;
  const mockOnClick = jest.fn();

  beforeEach(() => {
    const history = createBrowserHistory();
    postPreview = shallow(<PostPreview post={samplePost} onClick={mockOnClick} history={history} />);
  });

  it('renders without crashing', () => {
    expect(postPreview.exists());
  });
  
  it('it calls goto when clicked', () => {
    postPreview.find('#root').simulate('click');
    expect(mockOnClick.mock.calls)
  });

  it('goes to post when goto is called', () => {
    const history = createBrowserHistory(samplePost.data.slug);
    const c = mount(<PostPreview post={samplePost} history={history} />);
    const instance = c.instance();

    instance.goto();

    expect(instance.props.history.length).toBe(3);
    expect(instance.props.history.location.pathname).to.equal('/blog/post/slug');
  });

  it('renders nothing if post prop is undefined', () => {
    const c = shallow(<PostPreview post={undefined}/>);
    expect(c.render().text()).toEqual('');
  });

  it('renders the category', () => {
    const categoryC = postPreview.children().find('#blogStatsCategory');
    expect(categoryC.render().text()).toEqual(samplePost.data.category);
  });

  it('renders the title', () => {
    const titleC = postPreview.children().find('#blogTitle');
    expect(titleC.render().text()).toEqual(samplePost.data.title);
  });

  it('renders the publish date', () => {
    const m = mount(<Moment format={'MMMM D, YYYY'}>{samplePost.data.published_at}</Moment>);
    const publishDateC = postPreview.children().find('#blogStatsTime');
    expect(publishDateC.render().text()).toEqual(m.render().text());
  });

  it('renders the thumbnail', () => {
    const thumbnailC = postPreview.children().find('#blogImage');
    expect(thumbnailC.prop('style').backgroundImage).toEqual(`url(${samplePost.data.thumbnail})`);
  });

});
