import React from 'react'

import { HomeTemplate, IFormSelectHourInputs } from '../../atomic'

export const Home = () => {
  const onSubmit = (form: IFormSelectHourInputs) => {
    console.log(form)
  }
  return <HomeTemplate form={{ onSubmit, quantity: 0 }} />
}
