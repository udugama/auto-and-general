import React from 'react';
import SearchBox from './../SearchBox';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

function handlerFunction() {
    return true;
}

it('renders without crashing', () => {
    shallow(<SearchBox onClick={handlerFunction.bind(this)} />);
});

it('render stories', () => {  
  const { getByText } = render(<SearchBox onClick={handlerFunction.bind(this)} />);
  expect(getByText).toMatchSnapshot();
});