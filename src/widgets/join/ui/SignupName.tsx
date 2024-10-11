'use client'

import { loginMethodAtom } from '@/shared/atoms/globalAtom'
import { ButtonMobile, TextField } from '@eolluga/eolluga-ui'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import FlexBox from '@/shared/ui/Flexbox'

export default function SignupName() {
  const [name, setName] = useState('얼루가')
  const [loginMethod] = useAtom(loginMethodAtom)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const getGreetingText = () => {
    switch (loginMethod) {
      case 'kakao':
        return `${name}님이신가요?`
      case 'apple':
        return `이름을 입력해주세요`
      default:
        return `이름을 입력해주세요`
    }
  }
  return (
    <>
      <div className="w-full head-02-bold h-[52px] px-spacing-04 text-left mt-spacing-06 mb-[66px]">
        {getGreetingText()}
      </div>
      <FlexBox direction="col" className="w-full px-spacing-04 gap-spacing-08">
        <TextField
          onChange={handleNameChange}
          size="L"
          style="underlined"
          label="이름"
          placeholder="이름을 입력해주세요"
          value={name}
          // state={step === '2' ? 'readOnly' : 'enable'}
        />
        <FlexBox direction="col" className="w-full p-spacing-04 absolute bottom-4">
          <ButtonMobile size="L" style="primary" state="enabled" type="text" text1="다음" />
        </FlexBox>
      </FlexBox>
    </>
  )
}
