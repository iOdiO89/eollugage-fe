'use client'

import HomeBundle from '@/widgets/home/ui/HomeBundle'
import { Icon, TextField, Scrim, Dialog } from '@eolluga/eolluga-ui'
import Header from '@/widgets/home/ui/Header'
import FlexBox from '@/shared/ui/Flexbox'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { isOwnerAtom } from '@/shared/atoms/globalAtom'

const workdata = [
  {
    id: 1,
    store: '얼루가게',
    position: '매니저',
    time: '08:00',
  },
  {
    id: 2,
    store: '매장 1',
    position: '직원',
    time: '09:00',
  },
  {
    id: 3,
    store: '매장 2',
    position: '직원',
    time: '10:00',
  },
  {
    id: 4,
    store: '매장 3',
    position: '매니저',
    time: '11:00',
  },
]

const fooddata = [
  {
    id: 1,
    title: '얼루가게',
    description:
      '매주 화요일마다 발주 부탁드립니다. 매주 화요일마다 발주 부탁드립니다. 가나다라마바사아자차카타파하',
  },
  {
    id: 2,
    title: '얼루가게',
    description: '매주 화요일마다 발주 부탁드립니다.',
  },
]

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nowModal, setNowModal] = useState<{ title: string; description: string } | null>(null)
  const router = useRouter()

  const [isOwner] = useAtom(isOwnerAtom)

  const canNext = currentIndex + 2 < workdata.length
  const canPrev = currentIndex > 0

  const nextSlide = () => {
    if (canNext) {
      setCurrentIndex(prevIndex => prevIndex + 2)
    }
  }

  const prevSlide = () => {
    if (canPrev) {
      setCurrentIndex(prevIndex => prevIndex - 2)
    }
  }

  const handleOpen = (item: { title: string; description: string }) => {
    setNowModal(item)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setNowModal(null)
  }

  return (
    <>
      <Header />
      <div className="mt-[76px]">
        {isOwner && (
          <div
            className="flex flex-row items-center mx-4 mb-6 px-3 pb-[11px] pt-[9px] border border-border-title-01 rounded-lg
           justify-between"
            onClick={() => {
              router.push('/home/upload-image')
            }}
            aria-hidden="true"
          >
            <FlexBox direction="col" className="gap-2 w-full items-start">
              <div className="body-02-bold-compact">가게 사진을 손님들이 보고싶어 해요</div>
              <div className="body-01-medium-compact text-text-helper">가게 사진 추가하러 가기</div>
            </FlexBox>
            <Icon icon="chevron_right_outlined" size={20} className="fill-icon-secondary" />
          </div>
        )}
        <FlexBox direction="col" className="gap-8 mx-4">
          <HomeBundle
            title="가게 공지"
            rightChild={
              <button
                onClick={() => {
                  router.push('/home/notice')
                }}
              >
                <Icon icon="chevron_right_outlined" size={20} />
              </button>
            }
            lowChild={
              <TextField
                size="L"
                placeholder="공지가 아직 없어요"
                value=""
                onChange={() => {}} // 디자인 피드백 후 수정
                style="outlined"
              />
            }
          />
          <HomeBundle
            title="금일 근무자"
            description="출근 시간순으로 나열되어 있습니다"
            rightChild={
              <FlexBox className="gap-5">
                <button
                  onClick={prevSlide}
                  disabled={canNext}
                  className="disabled:cursor-not-allowed"
                >
                  <Icon
                    icon="chevron_left_outlined"
                    size={20}
                    className={canPrev ? 'fill-icon-primary' : 'fill-icon-disabled'}
                  />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={canPrev}
                  className="disabled:cursor-not-allowed"
                >
                  <Icon
                    icon="chevron_right_outlined"
                    size={20}
                    className={canNext ? 'fill-icon-primary' : 'fill-icon-disabled'}
                  />
                </button>
              </FlexBox>
            }
            lowChild={
              <div className="flex flex-row gap-4 w-full">
                {workdata.slice(currentIndex, currentIndex + 2).map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 py-3 px-4 rounded bg-layer-01 w-full"
                  >
                    <div className="w-full">
                      <div className="body-04-medium-compact">{item.store}</div>
                      <div className="body-01-medium-compact text-text-secondary">
                        {item.position}
                      </div>
                    </div>
                    <div className="body-02-medium-compact w-full">{item.time}</div>
                  </div>
                ))}
              </div>
            }
          />
          <HomeBundle
            title="발주 리스트"
            description="발주 항목을 수정하려면 클릭해주세요"
            rightChild={
              <button
                onClick={() => {
                  router.push('/home/order')
                }}
              >
                <Icon icon="add" size={24} />
              </button>
            }
            lowChild={
              <div className="grid grid-cols-2 gap-4 w-full">
                {fooddata.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 p-4 border border-border-subtle-01 rounded"
                    onClick={() => handleOpen(item)}
                    aria-hidden="true"
                  >
                    <div className="body-04-medium-compact w-full">{item.title}</div>
                    <div className="body-03-medium-compact text-text-secondary w-full line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </FlexBox>
        {open && nowModal && (
          <Scrim
            className="fixed inset-0 z-40 flex items-center justify-center"
            onClick={handleClose}
          >
            <Dialog
              open={open}
              onClose={handleClose}
              title={nowModal.title}
              description={nowModal.description}
              dismissible
              leftText=""
              rightText=""
            />
          </Scrim>
        )}
      </div>
    </>
  )
}
