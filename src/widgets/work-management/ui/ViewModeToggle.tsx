import ViewModeToggleChip from './ViewModeToggleChip'

export default function ViewModeToggle({
  selectedType,
  setSelectedType,
}: {
  selectedType: 'week' | 'month'
  setSelectedType: (type: 'week' | 'month') => void
}) {
  return (
    <div className="bg-[#E0E0E0] rounded-[6px] p-1">
      <ViewModeToggleChip isActivated={selectedType === 'week'} onClick={() => setSelectedType('week')}>
        주간
      </ViewModeToggleChip>
      <ViewModeToggleChip isActivated={selectedType === 'month'} onClick={() => setSelectedType('month')}>
        월간
      </ViewModeToggleChip>
    </div>
  )
}
