import { Meta, Story } from '@storybook/react';
import styled from 'styled-components'

import { Logo, Check } from './index';


const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const Name = styled.pre`
  font-size: 14px;
`

export default {
  title: 'Utilites/Icon',
} as Meta;

const Template: Story = () => <Container>
  <Wrapper>
    <Logo/>
    <Name>Logo</Name>
  </Wrapper>
  <Wrapper>
    <Check/>
    <Name>Check</Name>
  </Wrapper>

</Container>

export const Normal = Template.bind({})

const argTypes = {}

const defaultArgs = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

