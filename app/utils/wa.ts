export const WA_NUMBER = '6281234567890'
export const wa = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`