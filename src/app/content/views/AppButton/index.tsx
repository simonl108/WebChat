import { type ReactNode, type FC, useState } from 'react'
import { SettingsIcon, MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export interface AppButtonProps {
  children?: ReactNode
}

const AppButton: FC<AppButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleOpenOptionsPage = () => {
    console.log(browser.runtime)

    browser.runtime.sendMessage('open-options-page').then((response) => {
      console.log('Popup response:', response)
    })
  }

  return (
    <div className="fixed bottom-5 right-5 z-top grid select-none justify-center gap-y-3">
      <div className="grid gap-y-3" inert={!open && ''}>
        <Button
          variant="outline"
          data-state={open ? 'open' : 'closed'}
          className="h-10 w-10 rounded-full p-0 shadow fill-mode-forwards data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        >
          <MoonIcon size={20} />
        </Button>
        <Button
          variant="outline"
          data-state={open ? 'open' : 'closed'}
          className="h-10 w-10 rounded-full p-0 shadow fill-mode-forwards data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        >
          <SunIcon size={20} />
        </Button>
        <Button
          onClick={handleOpenOptionsPage}
          variant="outline"
          data-state={open ? 'open' : 'closed'}
          className="h-10 w-10 rounded-full p-0 shadow fill-mode-forwards data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        >
          <SettingsIcon size={20} />
        </Button>
      </div>
      <Button onClick={handleToggle} className="relative z-10 h-10  w-10 rounded-full p-0 text-xs shadow">
        {children}
      </Button>
    </div>
  )
}

AppButton.displayName = 'AppButton'

export default AppButton
