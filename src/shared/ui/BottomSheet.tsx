import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import FlexBox from './Flexbox'

const bottomSheetVariants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
}

interface BottomSheetProps {
  open: boolean
  children: ReactNode // children 타입 추가
}

export default function BottomSheet({ open, children }: BottomSheetProps) {
  const minY = 60
  const bottomSheetHeight = typeof window !== 'undefined' ? window.innerHeight - minY : 600 // SSR 방지

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full z-50"
      initial="hidden"
      animate={open ? 'visible' : 'hidden'}
      exit="hidden"
      variants={bottomSheetVariants}
      transition={{ duration: 0.2 }}
    >
      <FlexBox
        direction="col"
        className={`w-full h-[${bottomSheetHeight}px] items-center rounded-t-2xl justify-center relative p-spacing-04 bg-white`}
      >
        {/* Header */}
        <div className="w-10 h-1 items-center rounded-full bg-button-secondary mb-spacing-04" />
        {/* Dynamic Content */}
        {children} {/* children을 통해 동적인 컨텐츠 삽입 */}
      </FlexBox>
    </motion.div>
  )
}
