export default function WorkManagementWorkerHeader({ userName }: { userName: string }) {
  return (
    <header className="flex items-end h-[112px] w-full text-white bg-[#131313] p-[16px] body-03-bold-compact">
      {userName}님의 근무 기록
    </header>
  )
}
