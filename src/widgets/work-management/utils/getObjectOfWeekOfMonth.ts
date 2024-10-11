/* eslint-disable no-fallthrough */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable max-len */

const getObjectWeekOfMonth = (date: Date) => {
  const dateOfToday = date.getDate()
  const dayOfTheFirstWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const daysOfTheFirstWeek = dayOfTheFirstWeek === 0 ? 1 : 7 - dayOfTheFirstWeek + 1
  // 0 = 일요일, 5 = 금요일 ~ 토요일 (주차가 전달 5주차인 경우에 해당)
  const isFiveWeekOfMonthOfTheFirstWeek = dayOfTheFirstWeek === 0 || dayOfTheFirstWeek > 4
  const dayOfTheLastWeek = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  // 0 = 일요일, 4 = 목요일 ~ 토요일(주차가 이번달 5주차인 경우에 해당)
  const isFiveWeekOfMonthOfTheLastWeek = dayOfTheLastWeek >= 4 || dayOfTheLastWeek === 0

  switch (true) {
    case isFiveWeekOfMonthOfTheFirstWeek: {
      let dateOfTheStartWeek = 1 + daysOfTheFirstWeek
      // 오늘 날짜가 직전 달 5주차에 속할 때
      if (dateOfToday < dateOfTheStartWeek) {
        return {
          year: date.getMonth() - 1 === -1 ? date.getFullYear() - 1 : date.getFullYear(),
          month: date.getMonth(),
          weekOfMonth: 5,
        }
      }

      // 1주차부터 5주차까지 반복
      for (let i = 1; i < 6; i++) {
        if (i === 5) {
          // 다음달 1주차에 속할 때
          if (!isFiveWeekOfMonthOfTheLastWeek) {
            return {
              year: date.getMonth() + 2 > 12 ? date.getFullYear() + 1 : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1,
            }
          }
        }

        if (dateOfTheStartWeek <= dateOfToday && dateOfToday <= dateOfTheStartWeek + 6) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i,
          }
        }
        dateOfTheStartWeek += 7
      }
    }
    default: {
      let dateOfTheStartWeek = 1

      // 오늘 날짜가 이번 달 1주차에 속할 때
      if (dateOfToday >= dateOfTheStartWeek && dateOfToday < dateOfTheStartWeek + daysOfTheFirstWeek) {
        return {
          year: date.getMonth() ? date.getFullYear() : date.getFullYear(),
          month: date.getMonth() + 1,
          weekOfMonth: 1,
        }
      }
      dateOfTheStartWeek += daysOfTheFirstWeek

      // 2주차부터 5주차까지 반복
      for (let i = 2; i < 6; i++) {
        if (i === 5) {
          // 다음달 1주차에 속할 때
          if (!isFiveWeekOfMonthOfTheLastWeek) {
            return {
              year: date.getMonth() + 2 > 12 ? date.getFullYear() + 1 : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1,
            }
          }
        }

        if (dateOfTheStartWeek <= dateOfToday && dateOfToday <= dateOfTheStartWeek + 6) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i,
          }
        }
        dateOfTheStartWeek += 7
      }
      return {
        year: 0,
        month: 0,
        weekOfMonth: 0,
      }
    }
  }
}

export default getObjectWeekOfMonth
