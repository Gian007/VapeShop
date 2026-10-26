import { formatPeso } from '../../data/offers.js'
import { Icon } from './Icons.jsx'
export function OfferArt({ offer, large = false }) {
  return <div className={`offer-art offer-art--${offer.theme} ${large ? 'offer-art--large' : ''}`} aria-hidden="true"><div className="art-rings" /><span className="art-symbol">{offer.symbol}</span><span className="art-caption">VAPEPOINTS • DEMO</span></div>
}
export function OfferCard({ offer, onClick, featured = false }) {
  return <button type="button" className={`offer-card surface-card ${featured ? 'offer-card--featured' : ''}`} onClick={() => onClick(offer.id)} aria-label={`View ${offer.title}`}>
    <div className="offer-card__text">
      <span className="eyebrow">{offer.eyebrow}</span>
      <h3>{offer.title}</h3>
      <span className="offer-card__subtitle">{offer.category} · In-store only</span>
      <div className="price-row"><strong>{formatPeso(offer.price)}</strong><s>{formatPeso(offer.originalPrice)}</s></div>
    </div>
    <div className="offer-card__media"><OfferArt offer={offer} /></div>
    <span className="offer-card__arrow"><Icon name="chevron" size={18}/></span>
  </button>
}
