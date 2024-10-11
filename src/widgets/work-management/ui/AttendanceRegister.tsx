'use client'

import formatDate from '@/widgets/work-management/utils/getTodayDate'
import AttendanceButton from './AttendanceButtonDialog'

export default function AttendanceRegister() {
  return (
    <div className="bg-[#F4F4F4] p-[16px] flex flex-col space-y-[12px]">
      <div className="flex flex-col space-y-1 ">
        <h3 className="body-03-bold-compact">출퇴근 등록</h3>
        <p className="body-01-medium text-[#6F6F6F]">{formatDate()}</p>
      </div>
      <div className="flex space-x-[14px] pb-[8px]">
        <AttendanceButton buttonText="출근" />
        <AttendanceButton buttonText="퇴근" />
      </div>
    </div>
  )
}
