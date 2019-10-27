import React from 'react';
import ReactDOM from 'react-dom';
import Story from './../Story';
import { shallow } from 'enzyme';
import { data } from './../fixtures/data';
import { render } from '@testing-library/react';

const { hits } = data;

it('renders without crashing', () => {
    shallow(<Story data={hits[0]} />);
});

it('render stories', () => {
  const { getByText } = render(<Story data={hits[0]} />);
  expect(getByText).toMatchSnapshot();
});