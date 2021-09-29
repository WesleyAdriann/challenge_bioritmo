import { render, fireEvent, cleanup} from '@testing-library/react'

import { mockTestID, StorybookProviders as wrapper } from '../../../utils'

import { Button, IButton } from './index'

describe('Atoms/Button', () => {
  const props: IButton = {
    testID: 'Button',
    onClick: jest.fn(),
    text: 'Text Test'
  }


  const renderComponent = () => render(
    <Button {...props} />, { wrapper }
  )

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const el_container = mockTestID('button', props.testID!)

  it(`should render component #${el_container}`, async () => {
    const sut = await component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render text prop', async () => {
    const sut = component.getByText(props.text)
    expect(sut).toBeTruthy()
  })

  it('should call onClick prop on press in button', async () => {
    const sut = await component.findByTestId(el_container)
    fireEvent.click(sut)
    expect(props.onClick).toBeCalled()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })

})
