"use client"

import { useState, useEffect } from "react"

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export default function YouTubeVideo({ videoId, title }: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoData, setVideoData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Fetch video data
    const fetchVideoData = async () => {
      try {
        // In a real application, you would use the YouTube Data API
        // For this example, we'll just set some basic data
        setVideoData({
          title: title || "Project Demo Video",
          thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        })
        setIsLoaded(true)
      } catch (err) {
        setError("Failed to load video data")
        console.error(err)
      }
    }

    fetchVideoData()
  }, [videoId, title])

  if (error) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading video...</div>
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={videoData?.title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}
