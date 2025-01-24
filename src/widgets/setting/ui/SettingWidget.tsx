'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { TopBar, Icon } from '@eolluga/eolluga-ui'
import LogoutModal from '@/features/setting/ui/LogoutModal'
import { sendRNFunction } from '@/shared'

export default function SettingsWidget({ storeId }: { storeId: string }) {
  const { push } = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    sendRNFunction('setSafeAreaEdges', ['bottom'])
  }, [])

  return (
    <div className="pt-4 pb-24">
      <TopBar
        leftIcon="chevron_left_outlined"
        title="설정"
        onClickLeftIcon={() => push(`/${storeId}/mypage`)}
      />
      <div>
        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <Link href={`/${storeId}/mypage/setting/alarm`} className="flex w-full justify-between">
              <span>알림</span>
              <Icon icon="chevron_right_outlined" />
            </Link>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <Link
              href={`/${storeId}/mypage/setting/privacy`}
              className="flex w-full justify-between"
            >
              <span>개인정보 처리방침</span>
              <Icon icon="chevron_right_outlined" />
            </Link>
          </li>
          <li className="flex justify-between py-spacing-04">
            <Link
              href={`/${storeId}/mypage/setting/inquire`}
              className="flex w-full justify-between"
            >
              <span>문의하기</span>
              <Icon icon="chevron_right_outlined" />
            </Link>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <button
              type="button"
              onClick={() => sendRNFunction('getAppInfo')}
              className="flex w-full justify-between"
            >
              <span>앱 버전</span>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
          <li className="flex justify-between py-spacing-04">
            <Link
              href={`/${storeId}/mypage/setting/businessInfo`}
              className="flex w-full justify-between"
            >
              <span>사업자 정보</span>
              <Icon icon="chevron_right_outlined" />
            </Link>
          </li>
        </ul>

        <div className="h-[12px] bg-Gray-10" />

        <ul className="flex flex-col gap-spacing-02 px-4 py-2">
          <li className="flex justify-between py-spacing-04">
            <button
              type="button"
              className="flex w-full justify-between"
              onClick={() => setIsModalOpen(true)}
            >
              <span>로그아웃</span>
              <Icon icon="chevron_right_outlined" />
            </button>
          </li>
          <li className="flex justify-between py-spacing-04">
            <Link href={`/${storeId}/mypage/setting/quit`} className="flex w-full justify-between">
              <span>탈퇴하기</span>
              <Icon icon="chevron_right_outlined" />
            </Link>
          </li>
        </ul>
      </div>
      {isModalOpen && <LogoutModal setIsModalOpen={() => setIsModalOpen(false)} />}
    </div>
  )
}
