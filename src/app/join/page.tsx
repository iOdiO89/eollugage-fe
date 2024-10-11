import FlexBox from '@/shared/ui/Flexbox'
import { RoleSelection } from '@/widgets'
import { TopBar } from '@eolluga/eolluga-ui'

export default function JoinPage() {
  return (
    <FlexBox
      direction="col"
      className="bg-white w-full h-full items-center w-full h-full relative "
    >
      <TopBar leftIcon="chevron_left_outlined" />
      <RoleSelection />
    </FlexBox>
  )
}
