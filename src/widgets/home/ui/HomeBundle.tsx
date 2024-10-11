import FlexBox from '@/shared/ui/Flexbox'

interface HomeBundleProps {
  title: string
  description?: string
  rightChild: React.ReactNode
  lowChild: React.ReactNode
}

export default function HomeBundle({ title, description, rightChild, lowChild }: HomeBundleProps) {
  return (
    <FlexBox direction="col" className="gap-3 w-full">
      <FlexBox className="w-full justify-between items-start">
        <div>
          <div className="body-03-bold-compact">{title}</div>
          <div className="body-01-medium-compact text-text-helper mt-1">{description}</div>
        </div>
        {rightChild}
      </FlexBox>
      {lowChild}
    </FlexBox>
  )
}
