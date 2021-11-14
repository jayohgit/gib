import React from 'react';
import { mount } from 'enzyme';
import SecondaryNav from '.';

describe('GlobalNav', () => {
  const wrap = mount(<SecondaryNav />);

  it('should render without throwing an error', () => {
    // expect(wrap);
    // expect(wrap.find('button').text()).toBe('Button');
  });
});
