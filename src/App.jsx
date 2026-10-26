import { useState } from 'react'
import { AppShell } from './components/layout/AppShell.jsx'
import { HomePage } from './pages/customer/HomePage.jsx'
import { PromosPage } from './pages/customer/PromosPage.jsx'
import { ActivityPage } from './pages/customer/ActivityPage.jsx'
import { ProfilePage } from './pages/customer/ProfilePage.jsx'
import { PromoDetailPage } from './pages/customer/PromoDetailPage.jsx'
import { demoMember } from './data/member.js'
import { offers } from './data/offers.js'

/** Navigation stays local while auth, routing, and backend requirements are pending. */
export default function App() {
  const [tab, setTab] = useState('home')
  const [selectedOfferId, setSelectedOfferId] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const selectedOffer = offers.find((offer) => offer.id === selectedOfferId)

  function goToTab(nextTab, options = {}) {
    setSelectedOfferId(null)
    setShowFavoritesOnly(Boolean(options.favoritesOnly))
    setTab(nextTab)
    window.scrollTo?.({ top: 0, behavior: 'instant' })
  }
  function viewOffer(id) {
    setSelectedOfferId(id)
    window.scrollTo?.({ top: 0, behavior: 'instant' })
  }
  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <AppShell member={demoMember} activeTab={tab} onTabChange={goToTab} showBack={Boolean(selectedOffer)} onBack={() => setSelectedOfferId(null)}>
      {selectedOffer ? (
        <PromoDetailPage offer={selectedOffer} isFavorite={favorites.includes(selectedOffer.id)} onFavorite={() => toggleFavorite(selectedOffer.id)} />
      ) : tab === 'home' ? (
        <HomePage member={demoMember} onOfferClick={viewOffer} onPromos={() => goToTab('promos')} />
      ) : tab === 'promos' ? (
        <PromosPage offers={offers} onOfferClick={viewOffer} favorites={favorites} favoritesOnly={showFavoritesOnly} onToggleFavorite={toggleFavorite} />
      ) : tab === 'activity' ? (
        <ActivityPage />
      ) : (
        <ProfilePage member={demoMember} onActivity={() => goToTab('activity')} onFavorites={() => goToTab('promos', { favoritesOnly: true })} />
      )}
    </AppShell>
  )
}
