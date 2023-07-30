import { useState, type FC } from 'react'

import { Button } from '@/components/ui/Button'
import { SmileIcon, CornerDownLeftIcon, ImageIcon } from 'lucide-react'
import MessageInput from './MessageInput'

const Footer: FC = () => {
  const [message, setMessage] = useState('')

  const handleInput = (value: string) => {
    setMessage(value)
  }

  return (
    <div className="grid gap-y-2 p-4">
      <MessageInput value={message} onInput={handleInput}></MessageInput>
      <div className="grid grid-cols-[auto_auto_1fr] items-center justify-items-end">
        <Button variant="ghost" size="icon">
          <SmileIcon size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <ImageIcon size={20} />
        </Button>
        <Button size="sm">
          <span className="mr-2">Send</span>
          <CornerDownLeftIcon className="text-slate-400" size={12}></CornerDownLeftIcon>
        </Button>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export default Footer