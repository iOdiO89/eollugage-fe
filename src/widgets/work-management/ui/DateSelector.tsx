'use client'

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */

import { useState } from 'react'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import handlePrev from '../utils/handlePrev'
import handleNext from '../utils/handleNext'
import getObjectWeekOfMonth from '../utils/getObjectOfWeekOfMonth'

export interface WeekState {
  year: number
  month: number
  weekOfMonth: number
}

export interface MonthState {
  year: number
  month: number
}

export default function DateSelector({ type }: { type: 'week' | 'month' }) {
  const [weekState, setWeekState] = useState<WeekState>({
    ...getObjectWeekOfMonth(new Date()),
  })

  const [monthState, setMonthState] = useState<MonthState>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  })

  return (
    <div className="flex space-x-2 justify-between body-04-bold-compact items-center">
      <PrevButton onClick={() => handlePrev(type, weekState, monthState, setWeekState, setMonthState)} />
      {type === 'week' ? (
        <p>{`${weekState.month || ''}월 ${weekState.weekOfMonth || ''}주차`}</p>
      ) : (
        <p>
          {monthState.year || ''}년 {monthState.month || ''}월
        </p>
      )}
      <NextButton
        type={type}
        weekState={weekState}
        monthState={monthState}
        onClick={() => handleNext(type, weekState, monthState, setWeekState, setMonthState)}
      />
    </div>
  )
}
