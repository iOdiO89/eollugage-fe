/* eslint-disable arrow-parens */

import AttendanceInfoItem, { AttendanceItem } from './AttendanceInfoItem'

export default function AttendanceInfoList() {
  const attendanceItems: AttendanceItem[] = [
    {
      id: '1',
      date: '9월 12일 (월)',
      time: '09:00 - 18:00',
    },
    {
      id: '2',
      date: '9월 12일 (월)',
      time: '09:00 - 18:00',
    },
    {
      id: '3',
      date: '9월 12일 (월)',
      time: '09:00 - 18:00',
    },
  ]
  if (attendanceItems.length === 0) {
    return (
      <div className="w-full pt-[120px] flex items-center justify-center">
        <p className="text-[##6F6F6F] body-02-medium">근무 정보가 아직 없어요</p>
      </div>
    )
  }
  return (
    <div className="px-[16px]">
      {attendanceItems.map(item => (
        <AttendanceInfoItem item={item} key={item.id} />
      ))}
    </div>
  )
}
