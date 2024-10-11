/* eslint-disable arrow-parens */
import DragScrollWrapper from './DragScrollWrapper'
import WorkerItem, { Worker } from './WorkerItem'

export default function WorkerList({ workers }: { workers: Worker[] }) {
  return (
    <DragScrollWrapper>
      {workers.map((worker, i) => (
        <>
          {i === 0 && <span className="w-[16px] h-1" />}
          <WorkerItem worker={worker} key={worker.id} />
        </>
      ))}
    </DragScrollWrapper>
  )
}
