/** Neutral placeholder offers; replace only with shop-approved, compliant content. */
export const offers = [
  { id: 'welcome', title: 'Welcome Bundle', eyebrow: 'FEATURED', category: 'Bundles', price: 999, originalPrice: 1300, description: 'Illustrative bundle card for reviewing the customer interface.', includes: ['Product A', 'Product B', 'Accessory'], theme: 'sand', symbol: '◈' },
  { id: 'essentials', title: 'Essentials Set', eyebrow: 'SAMPLE', category: 'Bundles', price: 650, originalPrice: 750, description: 'Sample in-store offering. Details are not yet configured by the shop.', includes: ['Item A', 'Item B'], theme: 'stone', symbol: '✳' },
  { id: 'accessories', title: 'Accessory Set', eyebrow: 'SAMPLE', category: 'Accessories', price: 450, originalPrice: 550, description: 'Placeholder listing for design preview only.', includes: ['Accessory A', 'Accessory B'], theme: 'peach', symbol: '◇' },
  { id: 'limited', title: 'Seasonal Collection', eyebrow: 'PREVIEW', category: 'Collections', price: 700, originalPrice: 850, description: 'Example seasonal card. Not a live offer.', includes: ['Item A', 'Item B', 'Item C'], theme: 'sage', symbol: '✦' },
]
export const categories = ['All', 'Bundles', 'Accessories', 'Collections']
export const formatPeso = (value) => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(value)
