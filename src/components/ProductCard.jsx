const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="card bg-white border border-gray-100 shadow-lg hover:border-purple-100 transition-all p-8 relative flex flex-col">
      {/* Tag */}
      {product.tag && (
        <span className={`absolute top-5 right-5 badge badge-${product.tagType} py-3 px-4 font-medium`}>
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-16 h-16 mb-6 p-4 rounded-2xl bg-purple-50 flex items-center justify-center">
        <img src={`/src/assets/products/${product.icon}`} alt={product.name} className="w-full" />
      </div>

      {/* Content */}
      <h2 className="text-2xl font-bold text-slate-950">{product.name}</h2>
      <p className="text-slate-600 text-sm my-4 flex-grow">{product.description}</p>

      {/* Price */}
      <div className="text-4xl font-bold text-slate-950 mb-6">
        ${product.price}<span className="text-sm font-normal text-slate-400">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 text-slate-700">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className="text-success text-xl">✓</span> {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button 
        onClick={() => onAdd(product)} 
        className="btn btn-primary w-full rounded-full shadow-md shadow-purple-100 mt-auto"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;