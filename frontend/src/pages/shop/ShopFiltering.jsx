import React from 'react'

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
        <h3>Filters</h3>

        {/* Kategori Filter */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Kategori</h4>
            <hr />
            {
                filters.categories.map((category) => (
                    <label key={category} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="category"  // Gunakan "category" untuk nama yang konsisten
                            id={`category-${category}`}  // Id harus unik
                            value={category} 
                            checked={filtersState.category === category} 
                            onChange={(e) => setFiltersState({ ...filtersState, category: e.target.value })}
                        />
                        <span className='ml-1'>{category}</span>
                    </label>
                ))
            }
        </div>

        {/* Warna Filter */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Warna</h4>
            <hr />
            {
                filters.colors.map((color) => (
                    <label key={color} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="color"  // Nama "color" konsisten
                            id={`color-${color}`}  // Id harus unik
                            value={color} 
                            checked={filtersState.color === color} 
                            onChange={(e) => setFiltersState({ ...filtersState, color: e.target.value })}
                        />
                        <span className='ml-1'>{color}</span>
                    </label>
                ))
            }
        </div>

        {/* Price Range Filter */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Harga</h4>
            <hr />
            {
                filters.priceRanges.map((range) => (  // Menggunakan filters.priceRanges
                    <label key={range.label} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="priceRanges"  // Nama "priceRanges"
                            id={`priceRanges-${range.label}`}  // Id harus unik
                            value={`Rp.${range.min}-Rp.${range.max}`}  // Format harga dengan interpolasi string
                            checked={filtersState.priceRanges === `Rp.${range.min}-Rp.${range.max}`} 
                            onChange={(e) => setFiltersState({ ...filtersState, priceRanges: e.target.value })}
                        />
                        <span className='ml-1'>{range.label}</span>
                    </label>
                ))
            }
        </div>
        <button onClick={clearFilters} className='bg-primary py-1 px-4 text-white rounded'>Reset semua filter</button>
    </div>
  )
}

export default ShopFiltering
