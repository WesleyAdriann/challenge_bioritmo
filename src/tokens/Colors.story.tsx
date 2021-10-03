import React from 'react'
import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import { theme } from './theme'

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Square = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 80px;
  width: 80px;
`

const Name = styled.pre`
  text-align: center;
  font-size: 14px;
`

export default {
  title: 'Tokens/Colors'
} as Meta

const Template: Story<{ colors: typeof theme.colors }> = (args) => (
  <Container>
    {Object.entries(args.colors).map(([name, color]) => (
      <Wrapper key={name}>
        <Square color={color} />
        <Name>
          {name}
          {'\n'}
          {color}
        </Name>
      </Wrapper>
    ))}
  </Container>
)

export const Normal = Template.bind({})

const argTypes = {}

const defaultArgs = {
  colors: theme.colors
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
