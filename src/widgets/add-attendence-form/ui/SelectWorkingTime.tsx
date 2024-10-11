/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */

import { FormField, FormItem, FormLabel } from '@/shared/ui/shadcn/form'
import { Input } from '@/shared/ui/shadcn/input'
import { UseFormReturn } from 'react-hook-form'

export default function SelectWorkingTime({
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
      name="workingTime"
      render={({ field }) => (
        <FormItem className="flex flex-col space-y-1">
          <FormLabel className="body-02-regular text-[#6F6F6F]">근무 시간</FormLabel>
          <div className="flex space-x-4">
            <Input
              type="time"
              value={field.value.start || ''}
              onChange={e => {
                field.onChange({
                  ...field.value,
                  start: e.target.value,
                })
              }}
              className="w-1/2 justify-start text-[20px] font-medium h-[56px]"
              aria-label="출근 시간"
            />

            <Input
              type="time"
              value={field.value.end || ''}
              onChange={e => {
                field.onChange({
                  ...field.value,
                  end: e.target.value,
                })
              }}
              className="w-1/2 justify-start text-[20px] font-medium h-[56px]"
              aria-label="퇴근 시간"
            />
          </div>
        </FormItem>
      )}
    />
  )
}
