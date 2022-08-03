import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import Input from '../../../../components/shared/Input/Input'
import styles from "../StepPE.module.css"
const Email = ({onNext}) => {
  const [emailAddress, setEmailAddress] = useState('')
  return (
    <Card title="Enter your email address" icon="emailicon">
      <Input placeholder="youremail@mail.com" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
    <div>
      <Button onClick={onNext}  text="Next" icon="buttoniconarrow" />
    </div>
    <p className={styles.paragraph}>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thank!</p>
  </Card>
  )
}

export default Email