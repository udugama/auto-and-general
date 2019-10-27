import React from 'react';
import ReactDOM from 'react-dom';
import Container from './../Container';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';


it('renders without crashing', () => {
    shallow(<Container />);
});

it('render Container initialy', () => {
  const { getByText } = render(<Container />);
  expect(getByText).toMatchSnapshot();
});