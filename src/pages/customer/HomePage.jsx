import { Icon } from '../../components/common/Icons.jsx'
import { OfferCard } from '../../components/common/OfferCard.jsx'
import { offers } from '../../data/offers.js'
export function HomePage({ onOfferClick, onPromos }) {
  return <div className="page-stack">
    <section className="hero-banner" aria-label="Welcome">
      <div className="hero-banner__copy"><span className="hero-kicker">WELCOME TO VAPEPOINTS</span><h1>What's new<br/>in store?</h1><p>See the latest store information in one place.</p><button type="button" className="btn btn-cream" onClick={onPromos}>Explore offers <Icon name="arrow" size={17}/></button></div>
      <div className="hero-banner__decoration" aria-hidden="true"><span>V</span></div>
    </section>
    <section aria-labelledby="featured-title">
      <div className="section-heading"><div><span className="section-caption">DISCOVER</span><h2 id="featured-title">Featured in store</h2></div><button type="button" className="text-action" onClick={onPromos}>See all <Icon name="arrow" size={16}/></button></div>
      <div className="offer-list"><OfferCard offer={offers[0]} onClick={onOfferClick} featured/><div className="offer-grid">{offers.slice(1, 3).map(offer => <OfferCard key={offer.id} offer={offer} onClick={onOfferClick}/>)}</div></div>
    </section>
    <section className="info-card surface-card"><span className="info-card__icon"><Icon name="store" /></span><div><h2>Visit us in store</h2><p>Offers shown here are UI examples, not active promotions. Purchasing and redemption happen at the counter.</p></div></section>
  </div>
}
