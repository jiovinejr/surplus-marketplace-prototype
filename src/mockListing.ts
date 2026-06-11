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

export const mockListings: Listing[] = [
  {
    id: 1,
    name: 'On the Vine Tomatoes',
    supplier: 'C&J Farms',
    location: 'Manahawkin, NJ',
    price: 50,
    priceUnit: 'pallet',
    quantity: 820,
    quantityUnit: 'pallets',
    imageUrl: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400',
    condition: 'Grade A, field fresh',
    packing: '25 lb boxes, 48 per pallet',
    minOrder: 5,
    category: 'Vegetables',
    supplierNotes: 'Harvested this week, ready to move'
  },
  {
    id: 2,
    name: 'Large Bins of Watermelon',
    supplier: 'Pemberton Brothers',
    location: 'New York, NY',
    price: 10,
    priceUnit: 'bin',
    quantity: 312,
    quantityUnit: 'bins',
    imageUrl: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400',
    condition: 'Grade A',
    packing: 'Field bins, approx 1,000 lbs each',
    minOrder: 10,
    category: 'Fruit',
  },
  {
    id: 3,
    name: 'Broccoli',
    supplier: 'American Produce',
    location: 'Dallas, TX',
    price: 2,
    priceUnit: 'case',
    quantity: 1020,
    quantityUnit: 'cases',
    imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400',
    condition: 'Grade A',
    packing: '20 lb cases',
    minOrder: 50,
    category: 'Vegetables',
  },
  {
    id: 4,
    name: 'Strawberries',
    supplier: 'American Produce',
    location: 'Dallas, TX',
    price: 5,
    priceUnit: 'bin',
    quantity: 106,
    quantityUnit: 'bins',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    condition: 'Grade A, fresh picked',
    packing: '8 oz flats, 12 per case',
    minOrder: 10,
    category: 'Fruit',
  },
  {
    id: 5,
    name: 'Russet Potatoes',
    supplier: 'Ardmore Produce',
    location: 'Des Moines, IA',
    price: 20,
    priceUnit: 'pallet',
    quantity: 5000,
    quantityUnit: 'pallets',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
    condition: 'Grade A, fresh picked',
    packing: '20 lb bags, 50 per pallet, wrapped',
    minOrder: 20,
    category: 'Vegetables',
    supplierNotes: 'Buyer fell through, these are ready to go'
  },
  {
    id: 6,
    name: 'Fingerling Potatoes',
    supplier: 'Ardmore Produce',
    location: 'Des Moines, IA',
    price: 15,
    priceUnit: 'bin',
    quantity: 2410,
    quantityUnit: 'bins',
    imageUrl: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=400',
    condition: 'Grade A',
    packing: '50 lb bins',
    minOrder: 5,
    category: 'Vegetables',
  },
]