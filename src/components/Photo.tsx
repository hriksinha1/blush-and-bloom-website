import type { ImageManifestItem } from '../data/images'

export type PhotoProps = {
  image: ImageManifestItem
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'auto' | 'high' | 'low'
  decorative?: boolean
  objectPosition?: string
  aspectRatio?: string
}

export function Photo({
  image,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  decorative = false,
  objectPosition,
  aspectRatio,
}: PhotoProps) {
  return (
    <img
      src={image.src}
      alt={decorative ? '' : image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: objectPosition ?? image.focal ?? '50% 50%',
        display: 'block',
        background: 'linear-gradient(135deg, rgba(233, 211, 211, 0.65), rgba(183, 124, 131, 0.25))',
        aspectRatio: aspectRatio ?? `${image.width} / ${image.height}`,
      }}
    />
  )
}
