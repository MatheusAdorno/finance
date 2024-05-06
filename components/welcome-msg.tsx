'use client'

import { useUser } from '@clerk/nextjs'

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser()

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Olá novamente{user?.firstName ? ` ${user?.firstName}` : '!'} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#89B6FD]">
        Aqui está o seu relatório financeiro
      </p>
    </div>
  )
}

export default WelcomeMsg
