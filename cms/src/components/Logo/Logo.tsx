'use client'
import React, { useEffect, useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const [logoUrl, setLogoUrl] = useState<string>("https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg")
  const [altText, setAltText] = useState<string>("Payload Logo")

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/globals/site-settings')
        if (response.ok) {
          const data = await response.json()
          if (data?.adminLogo?.url) {
            setLogoUrl(data.adminLogo.url)
          } else if (data?.siteLogo?.url) {
            setLogoUrl(data.siteLogo.url)
          }
          if (data?.siteTitle) {
            setAltText(data.siteTitle)
          }
        }
      } catch (error) {
        console.error('Failed to fetch site settings for logo:', error)
      }
    }
    fetchSettings()
  }, [])

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt={altText}
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={className || 'max-w-[9.375rem] w-full h-[34px] object-contain'}
      src={logoUrl}
    />
  )
}
