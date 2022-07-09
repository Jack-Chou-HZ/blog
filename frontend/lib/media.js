import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  console.log(`url: ${url}, imageUrl: ${imageUrl}`)
  return imageUrl
}
