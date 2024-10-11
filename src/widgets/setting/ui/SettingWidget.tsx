'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TopBar, Icon } from '@eolluga/eolluga-ui'
import LogoutModal from '@/features/setting/ui/LogoutModal'

export default function SettingsWidget() {
  const { push } = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="pt-4 pb-24">
      <TopBar leftIcon="chevron_left_outlined" title="설정" onClickLeftIcon={() => push('/mypage')} />
      <div>
        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <span>알림</span>
            <button onClick={() => push('/mypage/setting/alarm')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <span>개인정보 처리방침</span>
            <button onClick={() => push('/mypage/setting/privacy')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
          <li className="flex justify-between py-spacing-04">
            <span>문의하기</span>
            <button onClick={() => push('/mypage/setting/inquire')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <span>앱 버전</span>
            <button onClick={() => push('/mypage/setting/appInfo')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
          <li className="flex justify-between py-spacing-04">
            <span>사업자 정보</span>
            <button onClick={() => push('/mypage/setting/businessInfo')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <span>로그아웃</span>
            <button onClick={() => setIsModalOpen(true)}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
          <li className="flex justify-between py-spacing-04">
            <span>탈퇴하기</span>
            <button onClick={() => push('/mypage/setting/quit')}>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
        </ul>
      </div>
      {isModalOpen && <LogoutModal setIsModalOpen={() => setIsModalOpen(false)} />}
    </div>
  )
}
