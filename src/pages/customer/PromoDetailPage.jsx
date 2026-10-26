import { OfferArt } from '../../components/common/OfferCard.jsx'
import { Icon } from '../../components/common/Icons.jsx'
import { formatPeso } from '../../data/offers.js'
export function PromoDetailPage({ offer, isFavorite, onFavorite }) {
  return <div className="page-stack detail-page">
    <div className="detail-hero"><OfferArt offer={offer} large/></div>
    <div className="detail-heading"><div><span className="eyebrow">{offer.eyebrow}</span><h1>{offer.title}</h1></div><button type="button" className="icon-button surface-card" onClick={onFavorite} aria-label={isFavorite ? 'Remove from saved offers' : 'Save offer'} aria-pressed={isFavorite}><Icon name="heart"/></button></div>
    <div className="detail-price"><strong>{formatPeso(offer.price)}</strong><s>{formatPeso(offer.originalPrice)}</s><span className="saving-badge">Sample price</span></div>
    <p className="muted-copy">{offer.description}</p>
    <section className="surface-card detail-section"><h2>What's included</h2><div className="included-grid">{offer.includes.map((item, index) => <div className="included-item" key={item}><span aria-hidden="true">{index + 1}</span><p>{item}</p></div>)}</div></section>
    <section className="surface-card detail-note"><Icon name="store"/><div><h2>In-store only</h2><p>Ask staff for confirmed availability and eligibility.</p></div></section>
    <div className="detail-disclaimer">Illustrative concept. No offer is active or redeemable through this preview.</div>
  </div>
}
