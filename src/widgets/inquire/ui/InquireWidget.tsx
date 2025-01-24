'use client'

import { useRouter } from 'next/navigation'
import { TopBar, ButtonMobile, Icon } from '@eolluga/eolluga-ui'
import { sendRNFunction } from '@/shared'

export default function InquireWidget({ storeId }: { storeId: string }) {
  const { push } = useRouter()

  return (
    <div>
      <div className="pt-4">
        <TopBar
          leftIcon="chevron_left_outlined"
          title="문의하기"
          onClickLeftIcon={() => push(`/${storeId}/mypage/setting`)}
        />
      </div>

      <div className="mt-4 gap-spacing-02 p-4">
        <h2 className="body-05-bold">무엇이든 도와드릴게요</h2>
        <p className="mt-2 body-02-medium text-text-secondary">
          고객님이 만족하실 때까지 최선을 다해 도와드릴게요
        </p>
      </div>

      <footer className="w-full py-3 px-4 fixed bottom-4 flex flex-col gap-4">
        <button
          onClick={() => sendRNFunction('openKakaoInquire')}
          type="button"
          className="w-full h-[64px] py-spacing-05 px-spacing-07 gap-spacing-04 flex justify-center items-center bg-[#FEE500] text-text-on-color rounded-radius-04 shrink-0"
        >
          <span className="left-icon">
            <Icon icon="kakaotalk_login" className="fill-text-on-color" />
          </span>
          <span className="text-black shrink-0">카카오톡으로 문의하기</span>
        </button>
        <ButtonMobile
          size="L"
          style="border"
          type="icon-left"
          state="enabled"
          text1="전화로 문의하기"
          iconKey="device_phone"
          onClick={() => push(`/${storeId}/mypage/setting/inquire/byPhone`)}
        />
      </footer>
    </div>
  )
}
