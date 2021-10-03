import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { Card, ICard } from './index'

describe('Atoms/Button', () => {
  const props: ICard = {
    testID: 'Card',
    children: 'Text Test'
  }

  const renderComponent = () => render(<Card {...props} />, { wrapper })

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const el_container = mockTestID('div', props.testID!)

  it(`should render component #${el_container}`, async () => {
    const sut = await component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render Card with gray background-color', async () => {
    const color = 'gray'
    component.rerender(<Card {...props} color={color} />)
    const sut = await component.findByTestId(el_container)
    expect(sut).toHaveStyle(`background-color: ${color}`)
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
