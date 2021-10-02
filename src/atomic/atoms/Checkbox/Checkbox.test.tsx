import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { Checkbox, ICheckbox } from './index'

describe('Atoms/Checkbox', () => {
  const props: ICheckbox = {
    testID: 'Checkbox',
    active: true,
    onClick: jest.fn()
  }

  const renderComponent = () => render(
    <Checkbox {...props} />, { wrapper }
  )

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

  it('should render check icon in Checkbox with active true', async () => {
    component.rerender(<Checkbox {...props} />)
    const sut = await component.findByTestId(el_container)
    expect(sut.children.length).toBeTruthy()
  })

  it('should not render icon in Checkbox with active false', async () => {
    component.rerender(<Checkbox {...props} active={false} />)
    const sut = await component.findByTestId(el_container)
    expect(sut.children.length).toBeFalsy()
  })

  it('should call onClick prop on click in checkbox', async () => {
    const sut = await component.findByTestId(el_container)
    fireEvent.click(sut)
    expect(props.onClick).toBeCalled()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
