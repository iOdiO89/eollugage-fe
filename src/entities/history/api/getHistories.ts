'use server'

import { axiosServerInstance } from '@/shared'
import { Histories } from '../types/history'

const getHistories = async (
  storeId: string | null,
  memberId?: string | null,
  type?: 'WEEKLY' | 'MONTHLY',
  year?: number,
  month?: number,
  weekOfMonth?: number | null,
): Promise<Histories> => {
  try {
    if (!storeId || !memberId || !type) throw new Error('storeId, memberId는 필수입니다.')

    const { data } = await axiosServerInstance.get(
      `/v1/stores/${storeId}/members/${memberId}/histories?year=${year}&month=${month}${type === 'WEEKLY' ? `&week=${weekOfMonth}` : ''}`,
    )
    return data
  } catch (e) {
    console.error('error', e)
    return {
      storeId: storeId || '',
      memberId: memberId || null,
      type: type || 'WEEKLY',
      year: year || 0,
      month: month || 0,
      weekOfMonth: weekOfMonth || 0,
      histories: [],
    }
  }
}
export default getHistories
