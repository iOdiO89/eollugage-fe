'use client'

import React from 'react'

import { useSetAtom } from 'jotai'
import WorkerSelector from './WorkerSelector'
import { selectedWorkerAtom } from '../atoms/workManagementAtoms'
import AttendanceInfo from './AttendanceInfo'
import AddAttendanceLink from './AddAttendanceLink'

export default function WorkManagementOwner() {
  const setSelectedWorkerID = useSetAtom(selectedWorkerAtom)
  setSelectedWorkerID('1')
  return (
    <>
      <WorkerSelector />
      <AttendanceInfo />
      <div className="bottom-[84px] right-4 absolute">
        <AddAttendanceLink />
      </div>
    </>
  )
}
