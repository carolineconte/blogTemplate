"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

//componente para nao precisar transformar o layout em 'use client'.
export const ThemeProvider = ({ children }) => {

  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  if(mounted){
    return <div className={theme}>{children}</div>
  }

}
