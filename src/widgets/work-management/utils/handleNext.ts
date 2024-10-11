/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/default-param-last */
import { Dispatch, SetStateAction } from 'react'
import { MonthState, WeekState } from '../ui/DateSelector'
import getObjectWeekOfMonth from './getObjectOfWeekOfMonth'

const handleNext = (
  type: 'month' | 'week',
  weekState: WeekState,
  monthState: MonthState,
  setWeekState: Dispatch<SetStateAction<WeekState>>,
  setMonthState: Dispatch<SetStateAction<MonthState>>,
) => {
  const lastDayOfTheseMonth = new Date(weekState.year, weekState.month, 0).getDate()
  const dayOfTheseMonthLastDay = new Date(weekState.year, weekState.month, 0).getDay()
  const { weekOfMonth: monthWeekOfTheseMonthLastDay } = getObjectWeekOfMonth(
    new Date(weekState.year, weekState.month, 0),
  )
  const weeksInTheseMonth =
    monthWeekOfTheseMonthLastDay === 5 || monthWeekOfTheseMonthLastDay === 4
      ? monthWeekOfTheseMonthLastDay
      : getObjectWeekOfMonth(
          new Date(weekState.year, weekState.month - 2, lastDayOfTheseMonth - dayOfTheseMonthLastDay),
        ).weekOfMonth

  switch (type) {
    case 'month':
      if (monthState.month === 12) {
        setMonthState({
          year: monthState.year + 1,
          month: 1,
        })
      } else {
        setMonthState({
          year: monthState.year,
          month: monthState.month + 1,
        })
      }
      break
    case 'week':
      if (weekState.weekOfMonth === weeksInTheseMonth) {
        setWeekState({
          year: weekState.month + 1 > 12 ? weekState.year + 1 : weekState.year,
          month: weekState.month + 1 > 12 ? 1 : weekState.month + 1,
          weekOfMonth: 1,
        })
      } else {
        setWeekState({
          year: weekState.year,
          month: weekState.month,
          weekOfMonth: weekState.weekOfMonth + 1,
        })
      }
      break
    default:
      break
  }
}
export default handleNext
