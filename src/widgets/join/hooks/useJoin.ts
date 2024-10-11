import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { isOwnerAtom, loginMethodAtom } from '@/shared/atoms/globalAtom'
import { stepAtom } from '../atoms/joinAtoms'

export default function useJoin() {
  const [step, setStep] = useAtom(stepAtom)
  const [isOwner, setIsOwner] = useAtom(isOwnerAtom)
  const [loginMethod, setLoginMethod] = useAtom(loginMethodAtom)

  const nextStep = useCallback(() => {
    setStep(prevStep => prevStep + 1)
  }, [setStep])

  const previousStep = useCallback(() => {
    setStep(prevStep => prevStep - 1)
  }, [setStep])

  const setEmployeeRole = useCallback(() => {
    setIsOwner(false)
  }, [setIsOwner])

  const setOwnerRole = useCallback(() => {
    setIsOwner(true)
  }, [setIsOwner])

  const setLoginMethodApple = useCallback(() => {
    setLoginMethod('apple')
  }, [setLoginMethod])

  const setLoginMethodPhone = useCallback(() => {
    setLoginMethod('phone')
  }, [setLoginMethod])

  const setLoginMethodKakao = useCallback(() => {
    setLoginMethod('kakao')
  }, [setLoginMethod])

  return {
    step,
    nextStep,
    previousStep,
    isOwner,
    setEmployeeRole,
    setOwnerRole,
    loginMethod,
    setLoginMethodApple,
    setLoginMethodKakao,
    setLoginMethodPhone,
  }
}
