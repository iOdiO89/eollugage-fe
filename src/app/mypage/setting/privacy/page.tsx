import PrivacyWidget from '@/widgets/setting/ui/PrivacyWidget'
import privacyPolicyData from '@/widgets/setting/data/privacyPolicy.json'

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyWidget privacyPolicyData={privacyPolicyData} />
    </main>
  )
}
