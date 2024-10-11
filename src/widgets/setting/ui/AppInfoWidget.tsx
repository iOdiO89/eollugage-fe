'use client'

import { useRouter } from 'next/navigation'
import { TopBar } from '@eolluga/eolluga-ui'

export default function AppInfo() {
  const { push } = useRouter()
  return (
    <div className="pt-4">
      <TopBar leftIcon="close" title="앱 버전" onClickLeftIcon={() => push('/mypage/setting')} />
      <div className="mt-32 flex justify-center ">
        <div className="flex flex-col items-center justify-center gap-spacing-02">
          <div className="w-[80px] h-[80px] bg-Gray-30" />
          <p className="body-03-medium mt-2">최신 버전입니다</p>
          <p className="body-01-regular text-text-secondary">현재 버전 1.0.1</p>
        </div>
      </div>
    </div>
  )
}
