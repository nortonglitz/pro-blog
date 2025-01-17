"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Post } from "@/db/types"
import { getPosts } from "@/db/actions/posts"

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

  // Fetch dos posts ao montar o provider
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching posts:", err)
        }
        setPosts(null)
      }
    }

    fetchPosts()
  }, [])

  // Memoriza o valor do contexto
  const value = useMemo(
    () => ({
      posts,
      setPosts
    }),
    [posts, setPosts] // Atualiza o valor apenas quando posts ou setPosts mudarem
  )

  return <PostsPageContext.Provider value={value}>{children}</PostsPageContext.Provider>
}
