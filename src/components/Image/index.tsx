import { useEffect, useRef, useState } from 'react'

let observer: IntersectionObserver | null = null
const LOAD_IMG_EVENT_TYPE = 'loadImage'

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE))
    }
  })
}

interface ImageProps {
  src: string
  lazy: boolean
  threshold: number
  block: boolean
  width: number
  height: number
  alt: string
  placeholder: string
  mode: 'cover' | 'fill' | 'contain'
}

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  block,
  width,
  height,
  alt,
  mode,
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode, //cover, fill, contain
  }

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }
    const handleLoadImage = () => setLoaded(true)

    const imgElement = imgRef.current
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
  }, [lazy])

  useEffect(() => {
    if (!lazy) return

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold })
    }
    imgRef.current && observer.observe(imgRef.current)

    return () => observer!.disconnect()
  }, [lazy, threshold])

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...imageStyle }}
    />
  )
}

export default Image
