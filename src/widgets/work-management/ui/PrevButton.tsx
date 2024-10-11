/* eslint-disable import/no-cycle */
import { Icon } from '@eolluga/eolluga-ui'

export default function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="이전">
      <Icon icon="chevron_left_outlined" />
    </button>
  )
}
