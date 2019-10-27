import React from 'react';
import ReactDOM from 'react-dom';
import Content from './../Content';
import { shallow } from 'enzyme';
import { data } from './../fixtures/data';
import { render } from '@testing-library/react';

const { hits } = data;

it('renders without crashing', () => {
    shallow(<Content content={hits} />);
});

it('render set of stories based on data array', () => {
  const { getByText } = render(<Content content={hits} />);
  expect(getByText).toMatchSnapshot();
});