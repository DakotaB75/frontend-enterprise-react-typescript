import { memo } from 'react'


export const withMemo = <T extends object>(Component: React.FC<T>) => memo(Component)