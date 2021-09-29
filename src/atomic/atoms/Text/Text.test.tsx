import { render, cleanup} from '@testing-library/react'

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

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })

})
