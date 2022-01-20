import React from 'react';
import ArticleList from '../ArticleList';
// import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Article from '../Article';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    // store: {
    //   lookupAuthor: jest.fn(() => ({})),
    // }
  };

  // Article.propTypes = {};
  
  it('render correctly', () => {
    // const tree = renderer.create(
    //   <ArticleList 
    //     {...testProps}
    //   />
    // ).toJSON();

    const wrapper = shallow(
      <ArticleList 
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();

    // expect(tree.children.length).toBe(2);
    // expect(tree).toMatchSnapshot();
  });

});
