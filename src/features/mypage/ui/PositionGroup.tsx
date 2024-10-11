'use client'

import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Icon } from '@eolluga/eolluga-ui'
import { PositionGroupProps } from '@/shared/types/myPageTypes'

export default function PositionGroup({ id, position, items, index, length }: PositionGroupProps) {
  return (
    <div>
      <Droppable droppableId={id}>
        {droppabledProvided => (
          <ul
            className="flex flex-col gap-spacing-02 p-4"
            {...droppabledProvided.droppableProps}
            ref={droppabledProvided.innerRef}
          >
            <li className="body-03-bold text-text-primary justify-content">{position}</li>
            {items.map((item, idx) => (
              <Draggable key={item.id} draggableId={item.id} index={idx}>
                {draggableProvided => (
                  <li
                    className="flex justify-between py-spacing-04"
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                  >
                    <span>{item.name}</span>
                    <div {...draggableProvided.dragHandleProps}>
                      <Icon icon="draggable" />
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {droppabledProvided.placeholder}
          </ul>
        )}
      </Droppable>
      {index !== length - 1 && <div className="h-[12px] bg-Gray-10" />}
    </div>
  )
}
