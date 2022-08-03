import React from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'

const Email = () => {
  return (
    <Card title="Enter your email address" icon="emailicon">
    <div>
      <Button text="Next" icon="buttoniconarrow" />
    </div>
  </Card>
  )
}

export default Email