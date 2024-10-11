export interface PositionItem {
  id: string
  name: string
}

export interface PositionGroupType {
  id: string
  position: string
  items: PositionItem[]
}

export interface PositionGroupProps {
  id: string
  position: string
  items: PositionItem[]
  index: number
  length: number
}

export type SettingsView = 'alarm' | 'appInfo' | 'businessInfo' | 'privacy' | 'quit' | 'settings'

export type InquireView = 'byPhone' | 'inquire'
