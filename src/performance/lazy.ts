import { lazy } from 'react'


export function lazyRoute(importFn: () => Promise<any>) {
return async () => {
const module = await importFn()
return { Component: module.default }
}
}