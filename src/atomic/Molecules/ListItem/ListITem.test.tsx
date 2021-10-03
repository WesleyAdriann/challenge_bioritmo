import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { ListItem, IListItem } from './index'

describe('Molecules/ListItem', () => {
  const props: IListItem = {
    testID: 'ListItem',
    text: 'Text Test'
  }

  const renderComponent = () => render(<ListItem {...props} />, { wrapper })

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const el_container = mockTestID('div', props.testID!)
  const el_text = mockTestID('text', `${props.testID}_text`)
  const el_right_text = mockTestID('text', `${props.testID}_right_text`)

  it(`should render component #${el_container}`, async () => {
    const sut = await component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render text', async () => {
    component.rerender(<ListItem {...props} />)
    const sut = await component.findByTestId(el_text)
    expect(sut).toBeTruthy()
    expect(sut.textContent).toBe(props.text)
  })

  it('should render right text on pass prop', async () => {
    const rightText = 'Right Text test'
    component.rerender(<ListItem {...props} rightText={rightText} />)
    const sut = await component.findByTestId(el_right_text)
    expect(sut).toBeTruthy()
    expect(sut.textContent).toBe(rightText)
  })

  it('should call onClick prop on click if pass onClick prop', async () => {
    const onClick = jest.fn()
    component.rerender(<ListItem {...props} onClick={onClick} />)
    const sut = await component.findByTestId(el_container)
    fireEvent.click(sut)
    expect(onClick).toBeCalled()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
