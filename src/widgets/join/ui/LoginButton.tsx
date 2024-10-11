'use client'

import { useRouter } from 'next/navigation'
import { Icon } from '@eolluga/eolluga-ui'

interface LoginButtonProps {
  type: 'apple' | 'kakao' | 'phone'
}

const style = {
  apple: {
    name: 'Apple',
    bg: 'bg-white',
    border: 'border-white',
    font: 'text-black/85',
  },
  kakao: {
    name: '카카오',
    bg: 'bg-[#FEE500]',
    border: 'border-[#FEE500]',
    font: 'text-black/85',
  },
  phone: {
    name: '전화번호',
    bg: 'bg-black/0',
    border: 'border-border-subtle-01',
    font: 'text-text-on-color',
  },
}

export default function LoginButton({ type }: LoginButtonProps) {
  const router = useRouter()

  const returnIcon = () => {
    switch (type) {
      case 'apple':
        return <Icon icon="apple" />
      case 'kakao':
        return <Icon icon="kakaotalk_login" />
      case 'phone':
        return <Icon icon="device_phone" className="fill-white" />
      default:
        return null
    }
  }

  const onClickLogin = () => {
    router.push('/home')
  }

  return (
    <button
      className={`flex w-full px-spacing-06 py-spacing-04 rounded-radius-04 border ${style[type]['bg']} ${style[type]['border']}`}
      onClick={onClickLogin}
    >
      {returnIcon()}
      <div className={`w-full body-03-medium text-center ${style[type]['font']}`}>
        {style[type]['name']}로 시작하기
      </div>
    </button>
  )
}
