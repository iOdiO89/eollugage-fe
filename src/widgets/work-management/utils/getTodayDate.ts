const formatDate = () => {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }
  const formatter = new Intl.DateTimeFormat('ko-KR', options)
  const parts = formatter.formatToParts(today)

  const year = parts.find(part => part.type === 'year')?.value || ''
  const month = parts.find(part => part.type === 'month')?.value || ''
  const date = parts.find(part => part.type === 'day')?.value || ''
  const day = parts.find(part => part.type === 'weekday')?.value || ''

  return `${year}년 ${month}월 ${date}일 (${day})`
}

export default formatDate
