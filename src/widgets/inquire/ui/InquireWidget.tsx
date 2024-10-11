'use client'

import { useRouter } from 'next/navigation'
import { TopBar, ButtonMobile } from '@eolluga/eolluga-ui'

export default function InquireWidget() {
  const { push } = useRouter()
  return (
    <div>
      <div className="pt-4">
        <TopBar leftIcon="chevron_left_outlined" title="문의하기" onClickLeftIcon={() => push('/mypage/setting')} />
      </div>

      <div className="mt-4 gap-spacing-02 p-4">
        <h2 className="body-05-bold">무엇이든 도와드릴게요</h2>
        <p className="mt-2 body-02-medium text-text-secondary">고객님이 만족하실 때까지 최선을 다해 도와드릴게요</p>
      </div>

      <footer className="w-full py-3 px-4 fixed bottom-4 flex flex-col gap-4">
        <ButtonMobile
          size="L"
          style="secondary"
          type="icon-left"
          state="enabled"
          text1="카카오톡으로 문의하기"
          iconKey="kakaotalk_login"
        />
        <ButtonMobile
          size="L"
          style="border"
          type="icon-left"
          state="enabled"
          text1="전화로 문의하기"
          iconKey="device_phone"
          onClick={() => push('/mypage/setting/inquire/byPhone')}
        />
      </footer>
    </div>
  )
}
