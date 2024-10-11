'use client'

import { useRouter } from 'next/navigation'
import { TopBar } from '@eolluga/eolluga-ui'

export default function BusinessInfoWidget() {
  const { push } = useRouter()
  return (
    <div className="pt-4">
      <TopBar leftIcon="close" title="사업자 정보" onClickLeftIcon={() => push('/mypage/setting')} />
      <div className="mt-4 p-spacing-04">
        <ul className="flex flex-col gap-spacing-02 py-spacing-02 px-spacing-03 rounded-radius-05 border-2 border-Gray-20 bg-layer-01 body-01-medium">
          <li className="flex justify-between py-spacing-04">
            <span>상호</span>
            <span>얼루가 컴퍼니</span>
          </li>
          <li className="flex justify-between py-spacing-04">
            <span>주소</span>
            <span>서울특별시 중구 퇴계로88길 20, B동 4층 411호</span>
          </li>
          <li className="flex justify-between py-spacing-04">
            <span>사업자등록번호</span>
            <span>634-31-01413</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
