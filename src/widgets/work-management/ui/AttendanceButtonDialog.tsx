/* eslint-disable react/style-prop-object */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/shadcn/alert-dialog'
import formatTime from '../utils/formatTime'

export default function AttendanceButton({ buttonText }: { buttonText: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-[#161616] h-[80px] w-full rounded-lg text-white body-03-bold">
          {buttonText}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-lg max-w-[calc(100%-48px)] space-y-[24px] gap-0">
        <AlertDialogHeader className="space-y-4 text-left">
          <AlertDialogTitle className="body-05-bold">{buttonText} 처리 완료</AlertDialogTitle>
          <AlertDialogDescription className="body-02-regular text-[#161616]">
            {formatTime(new Date())}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:flex-col">
          <AlertDialogAction className="h-[40px]">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
