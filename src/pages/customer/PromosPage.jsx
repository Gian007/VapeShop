import { useState } from 'react'
import { categories } from '../../data/offers.js'
import { OfferCard } from '../../components/common/OfferCard.jsx'
export function PromosPage({ offers, onOfferClick, favorites, favoritesOnly, onToggleFavorite }) {
  const [category, setCategory] = useState('All')
  const filtered = offers.filter((offer) => (category === 'All' || offer.category === category) && (!favoritesOnly || favorites.includes(offer.id)))
  return <div className="page-stack">
    <div className="page-title"><span className="section-caption">EXPLORE</span><h1>{favoritesOnly ? 'Saved offers' : 'Promos & Bundles'}</h1><p>Browse illustrative in-store listings. No online checkout.</p></div>
    <div className="filter-row" role="group" aria-label="Offer category">{categories.map(item => <button key={item} type="button" className={`filter-chip ${category === item ? 'is-selected' : ''}`} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
    <div className="offer-list">{filtered.map(offer => <div key={offer.id} className="offer-row"><OfferCard offer={offer} onClick={onOfferClick}/><button type="button" className="save-button" aria-label={favorites.includes(offer.id) ? `Remove ${offer.title} from saved` : `Save ${offer.title}`} aria-pressed={favorites.includes(offer.id)} onClick={() => onToggleFavorite(offer.id)}><Icon name="heart" size={19}/></button></div>)}</div>
    {filtered.length === 0 && <div className="empty-state surface-card"><h2>No saved offers in this category</h2><p>Browse offers and tap the heart to save one.</p></div>}
    <p className="disclaimer">Demo listings only. Availability, prices, and promotional eligibility must be verified before publication.</p>
  </div>
}
