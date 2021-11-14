import React from 'react';
import { mount } from 'enzyme';
import GlobalNav from './';

describe('GlobalNav', () => {
  const wrap = mount(<GlobalNav globalNavItems={[]} />);

  it('should render without throwing an error', () => {
    // expect(wrap);
    // expect(wrap.find('button').text()).toBe('Button');
  });
});
