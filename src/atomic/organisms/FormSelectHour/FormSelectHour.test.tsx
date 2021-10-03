import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { FormSelectHour, IFormSelectHour } from './index'

describe('Organisms/FormSelectHour', () => {
  const props: IFormSelectHour = {
    testID: 'FormSelectHour',
    onSubmit: jest.fn(),
    onClear: jest.fn(),
    quantity: 0
  }

  const renderComponent = () =>
    render(<FormSelectHour {...props} />, { wrapper })

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

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
