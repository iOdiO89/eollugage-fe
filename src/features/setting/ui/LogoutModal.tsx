import { ButtonMobile } from '@eolluga/eolluga-ui'

export default function LogoutModal({ setIsModalOpen }: { setIsModalOpen: () => void }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="w-[90%]">
        <div className="bg-white py-spacing-07 px-spacing-05 rounded-radius-05">
          <p className="pb-spacing-05 body-05-bold">로그아웃 하시나요?</p>
          <div className="flex gap-2">
            <ButtonMobile
              size="M"
              style="secondary"
              type="text"
              state="enabled"
              text1="닫기"
              onClick={setIsModalOpen}
            />
            <ButtonMobile size="M" style="primary" type="text" state="enabled" text1="확인" />
          </div>
        </div>
      </div>
    </div>
  )
}
