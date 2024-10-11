/* eslint-disable @typescript-eslint/indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/default-param-last */
import { Dispatch, SetStateAction } from 'react'
import { MonthState, WeekState } from '../ui/DateSelector'
import getObjectWeekOfMonth from './getObjectOfWeekOfMonth'

const handlePrev = (
  type: 'month' | 'week',
  weekState: WeekState,
  monthState: MonthState,
  setWeekState: Dispatch<SetStateAction<WeekState>>,
  setMonthState: Dispatch<SetStateAction<MonthState>>,
) => {
  const lastDayOfThePrevMonth = new Date(weekState.year, weekState.month - 1, 0).getDate()
  const dayOfThePrevMonthLastDay = new Date(weekState.year, weekState.month - 1, 0).getDay()
  const { weekOfMonth: monthWeekOfPrevMonthLastDay } = getObjectWeekOfMonth(
    new Date(weekState.year, weekState.month - 1, 0),
  )
  const weeksInPrevMonth =
    monthWeekOfPrevMonthLastDay === 5 || monthWeekOfPrevMonthLastDay === 4
      ? monthWeekOfPrevMonthLastDay
      : getObjectWeekOfMonth(
          new Date(weekState.year, weekState.month - 2, lastDayOfThePrevMonth - dayOfThePrevMonthLastDay),
        ).weekOfMonth

  switch (type) {
    case 'month':
      if (monthState.month === 1) {
        setMonthState({
          year: monthState.year - 1,
          month: 12,
        })
      } else {
        setMonthState({
          year: monthState.year,
          month: monthState.month - 1,
        })
      }
      break
    case 'week':
      if (weekState.weekOfMonth === 1) {
        setWeekState({
          year: weekState.month - 1 <= 0 ? weekState.year - 1 : weekState.year,
          month: weekState.month - 1 <= 0 ? 12 : weekState.month - 1,
          weekOfMonth: weeksInPrevMonth,
        })
      } else {
        setWeekState({
          year: weekState.year,
          month: weekState.month,
          weekOfMonth: weekState.weekOfMonth - 1,
        })
      }
      break
    default:
      break
  }
}
export default handlePrev
