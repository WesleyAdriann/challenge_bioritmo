type componentType = 'div' | 'text' | 'input' | 'button' | 'img'

export const assignTestId = (
  componentType: componentType,
  componentId: string
)  => ({
    'data-testid': `${componentType}_${componentId}`,
  })


export const mockTestID = (
    componentType: componentType,
    componentId: string
  ) => assignTestId(componentType, componentId)
