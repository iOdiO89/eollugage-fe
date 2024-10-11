'use client'

import { useRouter } from 'next/navigation'
import { TopBar } from '@eolluga/eolluga-ui'

interface PrivacyPolicyContent {
  subTitle: string
  content: string[]
}
interface PrivacyPolicyData {
  title: string
  sections: PrivacyPolicyContent[]
}

export default function PrivacyWidget({
  privacyPolicyData,
}: {
  privacyPolicyData: PrivacyPolicyData
}) {
  const { push } = useRouter()
  return (
    <div className="pt-4">
      <TopBar
        leftIcon="close"
        title="개인정보처리방침"
        onClickLeftIcon={() => push('/mypage/setting')}
      />
      <div className="mt-4">
        <ul className="flex flex-col gap-spacing-02 p-4">
          <li className="pt-spacing-04">
            <p className="body-01-bold">{privacyPolicyData.title}</p>
          </li>

          <li className="py-spacing-02">
            <h2 className="pb-spacing-01">{privacyPolicyData.sections[0].subTitle}</h2>
            <p className="body-01-regular pb-spacing-01">
              {privacyPolicyData.sections[0].content[0]}
            </p>
            <p className="body-01-regular">
              {privacyPolicyData.sections[0].content[1]} <br />
              {privacyPolicyData.sections[0].content[2]} <br />
              {privacyPolicyData.sections[0].content[3]}
            </p>
          </li>

          <li className="py-spacing-02">
            <h2 className="pb-spacing-01">{privacyPolicyData.sections[1].subTitle}</h2>
            <p className="body-01-regular pb-spacing-01">
              {privacyPolicyData.sections[1].content[0]}
            </p>
            <p className="body-01-regular">{privacyPolicyData.sections[1].content[1]}</p>
          </li>

          <li className="py-spacing-02">
            <h2 className="pb-spacing-01">{privacyPolicyData.sections[2].subTitle}</h2>
            <p className="body-01-regular pb-spacing-01">
              {privacyPolicyData.sections[2].content[0]}
            </p>
            <p className="body-01-regular">
              {privacyPolicyData.sections[2].content[1]} <br />
              {privacyPolicyData.sections[2].content[2]} <br />·
              {privacyPolicyData.sections[2].content[3]}
            </p>
          </li>

          <li className="py-spacing-02">
            <h2 className="pb-spacing-01">{privacyPolicyData.sections[3].subTitle}</h2>
            <p className="body-01-regular pb-spacing-01">
              {privacyPolicyData.sections[3].content[0]}
            </p>
            <p className="body-01-regular">
              {privacyPolicyData.sections[3].content[1]} <br />
              {privacyPolicyData.sections[3].content[2]}
            </p>
          </li>

          <li className="py-spacing-02">
            <h2 className="pb-spacing-01">{privacyPolicyData.sections[4].subTitle}</h2>
            <p className="body-01-regular pb-spacing-01">
              {privacyPolicyData.sections[4].content[0]}
            </p>
            <p className="body-01-regular">
              {privacyPolicyData.sections[4].content[1]} <br />
              {privacyPolicyData.sections[4].content[2]} <br />
              {privacyPolicyData.sections[4].content[3]}
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
