/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { render } from '@testing-library/react'
import Home from '../pages/index'
import renderer from 'react-test-renderer';

describe('Home: ', () => {
  it('+ renders without crashing', () => {
    render(<Home />)
  })

  it('+ matches snapshot', () => {
    const renderedComponent = renderer.create(<Home />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  })
})