'use client'

import FlexBox from '@/shared/ui/Flexbox'
import { ButtonMobile, TextArea, TopBar } from '@eolluga/eolluga-ui'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState, useEffect } from 'react'

export default function NoticePage() {
  const router = useRouter()
  const [noticeText, setNoticeText] = useState('')
  const [buttonText, setButtonText] = useState('추가하기')

  useEffect(() => {
    if (noticeText.trim()) {
      // api 연결 후 디테일하게 수정 예정
      setButtonText('수정하기')
    } else {
      setButtonText('추가하기')
    }
  }, [])

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoticeText(event.target.value)
  }

  const handleFocus = () => {
    setButtonText('저장하기')
  }

  return (
    <FlexBox direction="col" className="py-3 h-full">
      <TopBar
        title="가게 공지사항"
        leftIcon="chevron_left_outlined"
        onClickLeftIcon={() => {
          router.push('/home')
        }}
      />
      <FlexBox direction="col" className="w-full mt-8 px-4 h-full justify-between">
        <div className="w-full" onFocus={handleFocus}>
          <TextArea
            size="L"
            placeholder="공지가 아직 없어요"
            value={noticeText}
            onChange={handleTextChange}
          />
        </div>
        <ButtonMobile size="L" style="primary" type="text" state="enabled" text1={buttonText} />
      </FlexBox>
    </FlexBox>
  )
}
