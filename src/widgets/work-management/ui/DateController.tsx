'use client'

import { useState } from 'react'
import DateSelector from './DateSelector'
import ViewModeToggle from './ViewModeToggle'

export default function DateController() {
  const [selectedType, setSelectedType] = useState<'week' | 'month'>('week')
  return (
    <div className="h-[70px] w-full flex justify-between p-4 items-center">
      <DateSelector type={selectedType} />
      <ViewModeToggle selectedType={selectedType} setSelectedType={setSelectedType} />
    </div>
  )
}
