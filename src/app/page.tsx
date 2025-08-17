'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { env } from '@/env/client'

export default function Page() {
  return (
    <div className="font-sans">
      Hello World {env.NEXT_PUBLIC_TEST} <ModeToggle />
    </div>
  )
}
