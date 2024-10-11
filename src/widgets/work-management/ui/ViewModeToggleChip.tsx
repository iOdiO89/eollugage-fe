export default function ViewModeToggleChip({
  isActivated,
  onClick,
  children,
}: {
  isActivated: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      className={`body-02-bold rounded-1 py-2 px-[23px] ${isActivated ? 'bg-white ' : 'bg-[#E0E0E0] text-[#16161640]'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
