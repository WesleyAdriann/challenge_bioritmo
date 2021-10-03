import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { HomeTemplate, IHomeTemplate } from './index'

describe('Templates/HomeTemplate', () => {
  const props: IHomeTemplate = {
    testID: 'IHomeTemplate',
    form: {
      onClear: jest.fn(),
      onSubmit: jest.fn()
    },
    isSearch: false,
    locations: []
  }

  const renderComponent = () => render(<HomeTemplate {...props} />, { wrapper })

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
