import clsx from 'clsx'
import React from 'react'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx('container py-16 md:py-24 2xl:max-w-7xl', className)}>{children}</div>
}

export default Container
