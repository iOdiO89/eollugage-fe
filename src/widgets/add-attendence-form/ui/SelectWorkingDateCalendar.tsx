/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/shadcn/form'
import { Input } from '@/shared/ui/shadcn/input'
import { isNaN } from 'lodash'
import { UseFormReturn } from 'react-hook-form'

export default function SelectWorkingDateCalendar({
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
      name="workingDate"
      render={({ field }) => (
        <FormItem className="flex flex-col space-y-1">
          <FormLabel className="body-02-regular text-[#6F6F6F]">근무 날짜</FormLabel>
          <FormControl>
            <Input
              type="date"
              value={
                field.value instanceof Date && !isNaN(field.value.getTime())
                  ? field.value.toISOString().substring(0, 10)
                  : ''
              }
              onChange={e => field.onChange(new Date(e.target.value))}
              className="w-full justify-start text-[20px] font-medium h-[56px]"
              aria-label="근무 날짜 선택"
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
