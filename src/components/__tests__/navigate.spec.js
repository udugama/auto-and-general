import React from 'react';
import Navigate from './../Navigate';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    shallow(<Navigate name='next' />);
});

it('render navigate button ', () => {
  const { getByText } = render(<Navigate name='next' />);
  expect(getByText).toMatchSnapshot();
});