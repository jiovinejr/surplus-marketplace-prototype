import { useState } from 'react'
import { mockListings } from './mockListing'

type Listing = {
  id: number
  name: string
  supplier: string
  location: string
  price: number
  priceUnit: string
  quantity: number
  quantityUnit: string
  imageUrl: string
  condition: string
  packing: string
  minOrder: number
  category: string
  supplierNotes?: string
}

const categories = ['All', 'Fruit', 'Vegetables']

const ListingCard = ({ listing, onClick }: { listing: Listing; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-1 hover:ring-green-500 transition-all"
  >
    <img src={listing.imageUrl} alt={listing.name} className="w-full h-48 object-cover" />
    <div className="p-3">
      <p className="font-semibold text-white">{listing.name}</p>
      <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
        <span>{listing.supplier}</span>
        <span>·</span>
        <span>{listing.location}</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-green-400 font-bold">${listing.price} / {listing.priceUnit}</span>
        <span className="text-xs text-gray-400">{listing.quantity.toLocaleString()} available</span>
      </div>
    </div>
  </div>
)

const ListingDetail = ({ listing, onBack }: { listing: Listing; onBack: () => void }) => (
  <div className="max-w-screen-xl mx-auto">
    <button onClick={onBack} className="text-gray-400 hover:text-white text-sm mb-4 flex items-center gap-1">
      ← Back to Marketplace
    </button>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <img src={listing.imageUrl} alt={listing.name} className="w-full rounded-lg object-cover h-72" />
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-1">{listing.supplier} · {listing.location}</p>
        <h2 className="text-3xl font-bold text-white mb-4">{listing.name}</h2>
        <div className="bg-gray-800 rounded-lg p-5 mb-4">
          <p className="text-xs text-gray-400 uppercase mb-1">Pricing</p>
          <p className="text-4xl font-bold text-green-400">${listing.price} <span className="text-lg">/ {listing.priceUnit}</span></p>
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-xs text-gray-400 uppercase">Num Available</p>
              <p className="text-white font-semibold">{listing.quantity.toLocaleString()} {listing.quantityUnit}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Min Order</p>
              <p className="text-white font-semibold">{listing.minOrder} {listing.quantityUnit}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 mb-4">
          <p className="text-xs text-gray-400 uppercase mb-3">Details</p>
          <div className="space-y-2 text-sm">
            <div><span className="text-gray-400">Condition</span><p className="text-white">{listing.condition}</p></div>
            <div><span className="text-gray-400">Packing</span><p className="text-white">{listing.packing}</p></div>
            <div><span className="text-gray-400">Category</span><p className="text-white">{listing.category}</p></div>
            {listing.supplierNotes && (
              <div><span className="text-gray-400">Supplier Notes</span><p className="text-white italic">"{listing.supplierNotes}"</p></div>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 border border-gray-600 hover:border-green-500 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
            Make an Offer
          </button>
          <button className="flex-1 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<Listing | null>(null)

  const filtered = mockListings
    .filter(l => activeCategory === 'All' || l.category === activeCategory)
    .filter(l => l.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {selected ? (
        <ListingDetail listing={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Marketplace</h1>
              <p className="text-sm text-gray-400">Surplus fresh food for purchase</p>
            </div>
            <button className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              + Create a Listing
            </button>
          </div>
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white text-sm rounded-lg px-4 py-2 mb-4 border border-gray-700 focus:outline-none focus:border-green-500"
          />
          <div className="flex gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-sm">No listings match your search.</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {filtered.map(listing => (
                <ListingCard key={listing.id} listing={listing} onClick={() => setSelected(listing)} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}