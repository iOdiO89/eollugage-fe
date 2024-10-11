'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TopBar, TextField, ButtonMobile } from '@eolluga/eolluga-ui'
import ToastMessage from '@/shared/ui/ToastMessage'

export default function ByPhoneWidget() {
  const { push } = useRouter()
  const [isClicked, setIsClicked] = useState(false)
  const phoneNumber = '010-4000-9842'

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
    setIsClicked(true)
  }

  return (
    <div className="pt-4">
      <TopBar leftIcon="close" title="" onClickLeftIcon={() => push('/mypage/setting/inquire')} />
      <div className="mt-4 gap-spacing-02 p-4">
        <h2 className="body-05-bold">전화로 문의하기</h2>
        <div className="pt-spacing-02 body-02-medium text-text-secondary">
          <p>2018년 10월 18일부터 산업안전보건법에 따라</p>
          <p>고객응대근로자 보호조치를 시행하고 있습니다.</p>
          <p>고객응대근로자에게 폭언, 폭행 등을 하지 말아주세요.</p>
        </div>
      </div>

      <div className="px-4 pt-12">
        <TextField
          value={phoneNumber}
          label="고객센터 번호"
          onChange={() => {}}
          size="L"
          style="outlined"
        />
      </div>

      <footer className="w-full py-3 px-4 fixed bottom-4">
        <div className="pb-4">
          <ToastMessage
            message="고객센터 번호를 복사했어요"
            icon="check"
            open={isClicked}
            setOpen={setIsClicked}
          />
        </div>
        <ButtonMobile
          style="primary"
          size="L"
          type="text"
          state="enabled"
          text1="번호 복사하기"
          onClick={handleCopy}
        />
      </footer>
    </div>
  )
}
