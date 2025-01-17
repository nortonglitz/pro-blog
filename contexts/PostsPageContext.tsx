"use client"

import React, { createContext, useContext, useState } from "react"
import { Post } from "@/db/types"

// Define o formato do contexto
interface PostsPageContextValue {
  posts: Post[] | null | undefined
  setPosts: React.Dispatch<React.SetStateAction<Post[] | null | undefined>>
}

// Cria o contexto com um valor inicial vazio
const PostsPageContext = createContext<PostsPageContextValue | undefined>(undefined)

// Hook para facilitar o uso do contexto
export const usePosts = (): PostsPageContextValue => {
  const context = useContext(PostsPageContext)
  if (!context) {
    throw new Error("usePosts must be used within a PostsPageProvider")
  }
  return context
}

// Componente que fornece o contexto
export const PostsPageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[] | null | undefined>(undefined)

  return (
    <PostsPageContext.Provider value={{ posts, setPosts }}>{children}</PostsPageContext.Provider>
  )
}
