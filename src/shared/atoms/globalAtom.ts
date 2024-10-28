import { atom } from 'jotai'

export const isOwnerAtom = atom<boolean>(true)
export const storeNameAtom = atom<string>('')
export const isValidCodeAtom = atom<boolean>(false)
export const userNameAtom = atom<string>('')
