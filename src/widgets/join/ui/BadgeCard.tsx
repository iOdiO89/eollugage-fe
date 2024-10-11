import Image from 'next/image'
import FlexBox from '@/shared/ui/Flexbox'

export default function BadgeCard() {
  return (
    <FlexBox direction="col" className="relative w-full h-full">
      <div
        className="w-[232px] h-[336px] rounded-[16px] border-r-2 border-b-2"
        style={{
          background:
            'linear-gradient(155deg, var(--Background-inverse, #393939) 0%, var(--Background-brand, #131313) 100%)',
          borderColor: 'var(--Border-inverse, #161616)',
        }}
      >
        <FlexBox direction="col" className="gap-spacing-05 p-spacing-05">
          <Image width={192} height={51} alt="text1" src="/image/eollugage_badge_text1.svg" />
          <Image width={192} height={49} alt="text2" src="/image/eollugage_badge_text2.svg" />
        </FlexBox>
        <div className="body-05-bold-compact text-text-on-white pl-spacing-05 mt-[108px]">
          얼루가게
          <br />
          출입증
        </div>
      </div>
    </FlexBox>
  )
}
