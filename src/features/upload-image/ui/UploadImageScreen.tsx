'use client'

import { useEffect, useState } from 'react'
import FlexBox from '@/shared/ui/Flexbox'
import { useRouter } from 'next/navigation'
import { ButtonMobile, Icon, TopBar } from '@eolluga/eolluga-ui'
import Link from 'next/link'
import { sendRNFunction } from '../utils/rnSender'
import { ImageUploadResultT } from '../types/imageUploadType'
import Image from 'next/image'
import { ToastMessage } from '@/shared'
import { getImageFromS3 } from '../api/getImage'

interface ImageUploadScreenProps {
  page: 'home' | 'join'
}

export default function ImageUploadScreen({ page }: ImageUploadScreenProps) {
  const router = useRouter()

  // eslint-disable-next-line
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [showToast, setShowToast] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [imageURL, setImageURL] = useState<string>('')

  const tempStoreId = 'storeId123'

  const onClickBackButton = () => router.back()

  const onClickSelectButton = () => {
    sendRNFunction('accessGallery', tempStoreId)
  }

  const onMessageEvent = (e: MessageEvent) => {
    e.stopPropagation()
    const message: { type: string; data: ImageUploadResultT } = JSON.parse(String(e.data))

    if (message.type === 'getImageUploadResult') {
      if (!message.data.isSuccess) {
        const failReason = message.data.reason
        switch (failReason) {
          case 'upload-fail':
            setErrorMessage('업로드에 실패했습니다.')
            break
          case 'not-select':
            setErrorMessage('사진이 선택되지 않았습니다.')
            break
          case 'presigned-url-error':
            setErrorMessage('다시 시도해주세요.')
            break
          default:
            setErrorMessage('다시 시도해주세요.')
        }
        setShowToast(true)
      } else {
        getImageFromS3(String(message.data.fileFullName)).then(url => {
          if (url.length !== 0) {
            setIsSuccess(true)
            setImageURL(url)
          } else {
            setErrorMessage('다시 시도해주세요.')
            setShowToast(true)
          }
        })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', onMessageEvent)
    document.addEventListener('message', onMessageEvent as EventListener)
  }, [])

  return (
    <FlexBox direction="col" className="w-full h-full">
      <TopBar
        leftIcon="chevron_left_outlined"
        title={page === 'home' ? '가게 대표 사진 추가' : ''}
        onClickLeftIcon={onClickBackButton}
      />
      <FlexBox direction="col" className="w-full h-full px-4 pt-6 justify-between">
        <FlexBox direction="col" className="w-full">
          {page === 'join' && (
            <div className="w-full head-02-bold mt-6">
              가게 메뉴판에 사용할
              <br />
              대표 이미지를 추가해주세요
            </div>
          )}
          <FlexBox
            direction="col"
            className={`w-full gap-spacing-03 ${page === 'join' && 'mt-12'}`}
          >
            <div className="w-full aspect-[3/2] bg-gray-200">
              {isSuccess ? (
                <Image
                  alt="store image"
                  src={imageURL}
                  className="w-full"
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <Image
                  alt="store default image"
                  src={require('@public/image/store_default_image.png')}
                  style={{ objectFit: 'contain', width: '100%' }}
                />
              )}
            </div>
            <FlexBox className="items-start w-full gap-4">
              <Icon icon="info_circle_filled" size={20} className="fill-support-info shrink-0" />
              <div className="w-full body-01-medium text-text-helper">
                예시처럼 매장의 전체 공간이 보이는 사진을 선택해주세요.
                <br />
                손님들이 있는 사진보다 손님들이 없는 사진을 선택해주세요.
              </div>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="col" className="w-full gap-2 py-3 px-4">
        <ButtonMobile
          size="L"
          style="primary"
          type="text"
          state="enabled"
          text1="앨범에서 선택하기"
          onClick={onClickSelectButton}
        />
        <FlexBox className="w-full justify-center">
          <Link
            href={page === 'join' ? '/home' : '/home'}
            className="py-3 label-02-bold text-text-disabled"
          >
            나중에 추가하기
          </Link>
        </FlexBox>
      </FlexBox>
      {showToast && (
        <ToastMessage
          icon="warning"
          open={showToast}
          setOpen={setShowToast}
          message={errorMessage}
        />
      )}
    </FlexBox>
  )
}
