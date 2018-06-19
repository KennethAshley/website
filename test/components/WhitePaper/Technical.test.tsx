import React from 'react';
import {shallow} from 'enzyme';
import {Row} from 'antd';
import Technical, {Section} from '@components/WhitePaper/Technical';

describe('<Technical />', () => {
  it('renders section with minHeight 10vh', () => {
    const component = shallow(<Technical/>);
    expect(component.find(Section).props().style)
      .to
      .deep
      .equal({background: '#ffffff', minHeight: '10vh'});
  });

  it('renders one Row component', () => {
    const component = shallow(<Technical/>);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent)
      .to
      .have
      .length(1);
    expect(rowComponentProps.type)
      .to
      .equal('flex');
  });

  it('renders three images', () => {
    const component = shallow(<Technical/>);
    const images = component.find('img');
    expect(images)
      .to
      .have
      .length(3);
  });
});
