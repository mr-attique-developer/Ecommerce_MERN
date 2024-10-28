import React from 'react';

const ShopFiltering = ({ filter, filterData, setFilterData, clearFilter }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center text-xl sm:text-3xl font-light my-8">Filters</div>

      <div className="flex flex-wrap sm:flex-col justify-around p-4 gap-8">
        <div className="w-full sm:w-auto">
          <h1 className="text-lg font-semibold mb-2">By Category</h1>
          <hr className="mb-4" />
          <div className="flex flex-col gap-4 p-2">
            {filter?.categories.map((category) => (
              <label  className="flex items-center gap-2 cursor-pointer" key={category}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filterData.category === category}
                  onChange={(e) => setFilterData({ ...filterData, category: e.target.value })}
                  className="form-radio text-blue-600"
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <h1 className="text-lg font-semibold mb-2">By Colors</h1>
          <hr className="mb-4" />
          <div className="flex flex-col gap-4 p-2">
            {filter?.colors.map((color) => (
              <label className="flex items-center gap-2 cursor-pointer" key={color}>
                <input
                  type="radio"
                  name="colors"
                  value={color}
                  checked={filterData.color === color}
                  onChange={(e) => setFilterData({ ...filterData, color: e.target.value })}
                  className="form-radio text-blue-600"
                />
                <span className="capitalize">{color}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-auto  p-4 rounded-lg">
          <h1 className="text-lg font-semibold mb-2">By Price</h1>
          <hr className="mb-4 border-white" />
          <div className="flex flex-col gap-4 p-2">
            {filter?.price.map((price) => (
              <label className="flex items-center gap-2 cursor-pointer" key={price.label}>
                <input
                  type="radio"
                  name="price"
                  value={`${price.min} - ${price.max}`}
                  checked={filterData.price === `${price.min} - ${price.max}`}
                  onChange={(e) => setFilterData({ ...filterData, price: e.target.value })}
                  className="form-radio text-blue-600"
                />
                <span className="capitalize">{price.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={clearFilter}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 self-center mt-4"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ShopFiltering;