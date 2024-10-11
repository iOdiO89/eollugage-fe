/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */
import { Button } from '@/shared/ui/shadcn/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/shadcn/drawer'
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/shadcn/form'
import { cn } from '@/shared/utils/cn'
import { Worker } from '@/widgets/work-management/ui/WorkerItem'
import { Icon } from '@eolluga/eolluga-ui'
import { UseFormReturn } from 'react-hook-form'

const workers: Worker[] = [
  {
    id: '1',
    name: '김제니',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-1234-1234',
  },
  {
    id: '2',
    name: '박민수',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-2345-2345',
  },
  {
    id: '3',
    name: '이서준',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-3456-3456',
  },
  {
    id: '4',
    name: '최유나',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-4567-4567',
  },
  {
    id: '5',
    name: '김다훈',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-5678-5678',
  },
  {
    id: '6',
    name: '정하늘',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-6789-6789',
  },
  {
    id: '7',
    name: '이수정',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-7890-7890',
  },
  {
    id: '8',
    name: '박지훈',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-8901-8901',
  },
  {
    id: '9',
    name: '윤서영',
    image: '/worker-image.jpeg',
    position: '매니저',
    phoneNumber: '010-9012-9012',
  },
  {
    id: '10',
    name: '홍길동',
    image: '/worker-image.jpeg',
    position: '직원',
    phoneNumber: '010-0123-0123',
  },
]

export default function SelectWorkerDrawer({
  form,
}: {
  form: UseFormReturn<
    {
      workerID: string
      workingDate: Date
      workingTime: {
        start: string
        end: string
      }
    },
    any,
    undefined
  >
}) {
  return (
    <FormField
      control={form.control}
      name="workerID"
      render={({ field }) => (
        <FormItem className="flex flex-col space-y-1">
          <FormLabel className="body-02-regular text-[#6F6F6F]">근무자 선택</FormLabel>
          <FormControl>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-[20px] font-medium h-[56px]',
                    !field.value && 'text-[#A8A8A8]',
                  )}
                >
                  {field.value ? (
                    workers.find(worker => worker.id === field.value)?.name
                  ) : (
                    <span>근무자를 선택해주세요</span>
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>근무자 선택</DrawerTitle>
                  <DrawerDescription className="hidden" />
                </DrawerHeader>
                <div className="flex flex-col  ">
                  {workers.map(worker => (
                    <DrawerClose key={worker.id} asChild>
                      <Button
                        variant="ghost"
                        className={`justify-start ${field.value === worker.id ? 'text-[#161616]' : 'text-[#6F6F6F]'} body-02-medium `}
                        onClick={() => field.onChange(worker.id)}
                      >
                        {worker.name}
                        {worker.id === field.value && (
                          <span className="ml-auto">
                            <Icon icon="checkmark" />
                          </span>
                        )}
                      </Button>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
