import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { Text, IText } from './index'

describe('Atoms/Button', () => {
  const props: IText = {
    testID: 'Text',
    children: 'Text Test'
  }

  const renderComponent = () => render(
    <Text {...props} />, { wrapper }
  )

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const el_container = mockTestID('text', props.testID!)

  it(`should render component #${el_container}`, async () => {
    const sut = await component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render Text with font-size 32', async () => {
    const size = 32
    component.rerender(<Text {...props} size={size} />)
    const sut = await component.findByTestId(el_container)
    expect(sut).toHaveStyle(`font-size: ${size}px`)
  })

  it('should render uppercase Text', async () => {
    component.rerender(<Text {...props} uppercase />)
    const sut = await component.findByTestId(el_container)
    expect(sut).toHaveStyle('text-transform: uppercase')
  })

  it('should render Text with font-weight bold', async () => {
    const weight = 'bold'
    component.rerender(<Text {...props} weight={weight} />)
    const sut = await component.findByTestId(el_container)
    expect(sut).toHaveStyle(`font-weight: ${weight}`)
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
