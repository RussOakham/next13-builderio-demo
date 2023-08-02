import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
	children: React.ReactNode
	className?: string
}

const Container = ({
	children,
	as: Comp = 'section',
	className,
}: ContainerProps) => {
	return <Comp className={cn('container', className)}>{children}</Comp>
}

export default Container
