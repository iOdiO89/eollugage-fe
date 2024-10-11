/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-parens */
import { useAtomValue } from 'jotai'
import { Worker } from './WorkerItem'
import WorkerList from './WorkerList'
import { selectedWorkerAtom } from '../atoms/workManagementAtoms'

const workers: Worker[] = [
  {
    id: '1',
    name: '김제니',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-1234-1234',
  },
  {
    id: '2',
    name: '박민수',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-2345-2345',
  },
  {
    id: '3',
    name: '이서준',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-3456-3456',
  },
  {
    id: '4',
    name: '최유나',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-4567-4567',
  },
  {
    id: '5',
    name: '김다훈',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-5678-5678',
  },
  {
    id: '6',
    name: '정하늘',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-6789-6789',
  },
  {
    id: '7',
    name: '이수정',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-7890-7890',
  },
  {
    id: '8',
    name: '박지훈',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-8901-8901',
  },
  {
    id: '9',
    name: '윤서영',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-9012-9012',
  },
  {
    id: '10',
    name: '홍길동',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-0123-0123',
  },
]

export default function WorkerSelector() {
  const selectedWorkerID = useAtomValue(selectedWorkerAtom)
  return (
    <div className="pb-[16px] pt-[24px] bg-[#131313] text-white overflow-hidden">
      <div className="flex space-x-[8px] mb-[16px] px-[16px] ">
        <h2 className="body-03-bold-compact">근무자</h2>
        <p className="body-01-medium-compact text-[#A8A8A8]">근무자를 선택해주세요</p>
      </div>
      <WorkerList workers={workers} />
      <p className="body-03-bold-compact mt-[12px] px-[16px]">
        {workers.find(worker => worker.id === selectedWorkerID)?.phoneNumber || ''}
      </p>
    </div>
  )
}
