/* eslint-disable @typescript-eslint/indent */
const colors = [
  'in-gray',
  'out-red',
  'out-orange',
  'in-green',
  'out-blue',
  'in-magenta',
  'out-purple',
  'in-teal',
] as const

export default function getRandomColor():
  | 'in-gray'
  | 'in-red'
  | 'in-green'
  | 'in-blue'
  | 'in-cyan'
  | 'in-magenta'
  | 'in-purple'
  | 'in-teal'
  | 'out-red'
  | 'out-red-2'
  | 'out-orange'
  | 'out-blue'
  | 'out-cyan'
  | 'out-purple'
  | undefined {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex] // 반환되지 않을 경우 undefined 허용
}
