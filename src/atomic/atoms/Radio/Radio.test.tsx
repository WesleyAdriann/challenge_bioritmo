import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { Radio, IRadio } from './index'

describe('Atoms/Radio', () => {
  const props: IRadio = {
    testID: 'Text',
    active: true,
    onClick: jest.fn()
  }

  const renderComponent = () => render(<Radio {...props} />, { wrapper })

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

  it('should render dot icon in Radio with active true', async () => {
    component.rerender(<Radio {...props} />)
    const sut = await component.findByTestId(el_container)
    expect(sut.children.length).toBeTruthy()
  })

  it('should not render dot icon in Radio with active false', async () => {
    component.rerender(<Radio {...props} active={false} />)
    const sut = await component.findByTestId(el_container)
    expect(sut.children.length).toBeFalsy()
  })

  it('should call onClick prop on click in Radio', async () => {
    const sut = await component.findByTestId(el_container)
    fireEvent.click(sut)
    expect(props.onClick).toBeCalled()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
