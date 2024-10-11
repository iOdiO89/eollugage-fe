import Image from 'next/image'
import LoginButton from '@/widgets/join/ui/LoginButton'
import FlexBox from '@/shared/ui/Flexbox'
import styles from './page.module.css'

export default function Home() {
  return (
    <FlexBox
      direction="col"
      className="bg-black items-center w-full h-full justify-center pt-16 pb-spacing-08 gap-spacing-04 relative"
    >
      <div className={styles.titleAnimation}>
        <Image height={38} width={234} alt="text" src="/image/eollugage_title.png" />
      </div>
      <FlexBox direction="col" className={`${styles.bodyAnimation} justify-between w-full h-full`}>
        <div className="text-Gray-40 body-02-regular">간편하게 일하는 법</div>
        <div className={styles.backgroundImage} />
        <FlexBox direction="col" className="w-full px-spacing-04 gap-spacing-04">
          <LoginButton type="apple" />
          <LoginButton type="kakao" />
          <LoginButton type="phone" />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}
