'use client'

import { isOwnerAtom } from '@/shared/atoms/globalAtom'
import { useAtom } from 'jotai'
import WorkManagementWorker from './WorkManagementWorker'
import WorkManagementOwner from './WorkManagementOwner'

export default function WorkManagement() {
  const isOwner = useAtom(isOwnerAtom)

  return isOwner ? <WorkManagementOwner /> : <WorkManagementWorker />
}
