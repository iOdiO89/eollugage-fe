import AttendanceInfoList from './AttendanceInfoList'
import DateController from './DateController'

export default function AttendanceInfo() {
  return (
    <div>
      <DateController />
      <div className="w-full h-[1px] bg-[#E0E0E0]" />
      <AttendanceInfoList />
    </div>
  )
}
