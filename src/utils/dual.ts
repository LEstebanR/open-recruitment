const IS_SERVER = typeof window === 'undefined'

export function getURL(path: string) {
  const baseURL = IS_SERVER
    ? `${process.env.NEXT_PUBLIC_URL_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : window.location.origin
  return new URL(path, baseURL).toString()
}
