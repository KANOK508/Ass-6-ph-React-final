// const Cart = ({ items, onRemove, onCheckout }) => {
//   const total = items.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">
//       <h2 className="text-3xl font-bold text-slate-950 mb-8">Your Cart</h2>
      
//       {items.length === 0 ? (
//         <div className="text-center py-16 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//           </svg>
//           <p className="text-lg">Your cart is currently empty.</p>
//           <p className="text-sm mt-1">Start adding premium tools to see them here!</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {items.map(item => (
//             <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
//               <div className="flex items-center gap-5">
//                 <img src={`/products/${item.icon}`} className="w-14 h-14 p-2 bg-purple-50 rounded-xl" alt="" />
//                 <div>
//                   <h4 className="font-bold text-lg text-slate-950">{item.name}</h4>
//                   <p className="text-primary font-semibold">${item.price}</p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => onRemove(item.id)} 
//                 className="text-red-400 hover:text-red-600 font-medium text-sm p-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="flex justify-between items-center pt-8">
//             <span className="text-2xl font-bold text-slate-950">Total:</span>
//             <span className="text-3xl font-bold text-slate-950">${total}</span>
//           </div>
//           <button onClick={onCheckout} className="btn btn-primary w-full rounded-full shadow-lg shadow-purple-100 mt-6 h-14">
//             Proceed To Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


const Cart = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-slate-950 mb-8">Your Cart</h2>
      
      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <p className="text-lg">Your cart is currently empty.</p>
          <p className="text-sm mt-1">Start adding premium tools to see them here!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
              <div className="flex items-center gap-5">
                {/* ✅ CORRECT PATH: Starts with / because it's in the public folder */}
                <img 
                  src={`/products/${item.icon}`} 
                  className="w-14 h-14 p-2 bg-purple-50 rounded-xl object-contain" 
                  alt={item.name} 
                />
                <div>
                  <h4 className="font-bold text-lg text-slate-950">{item.name}</h4>
                  <p className="text-primary font-semibold">${item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id)} 
                className="text-red-400 hover:text-red-600 font-medium text-sm p-2 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center pt-8">
            <span className="text-2xl font-bold text-slate-950">Total:</span>
            <span className="text-3xl font-bold text-slate-950">${total}</span>
          </div>
          <button onClick={onCheckout} className="btn btn-primary w-full rounded-full shadow-lg shadow-purple-100 mt-6 h-14">
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;