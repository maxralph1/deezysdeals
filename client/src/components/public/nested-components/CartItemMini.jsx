import { useContext, useState } from 'react'; 
import { CartContext } from '@/context/CartContext.jsx'; 


export default function CartItemMini({ itemId, 
                                        imgSrc, 
                                        title, 
                                        description = '', 
                                        oldPrice,
                                        currentPrice, 
                                        rating, 
                                        quantity }) { 
    const { addToCart, removeFromCart, applyDiscount, getTotalPriceWithDiscount, discount, clearCart } = useContext(CartContext); 

    return (
        <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
            <div className="col-4">
                <img src={ imgSrc }
                    alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
            </div>
            <div className="col-8 d-flex flex-column">
                <div className="text pb-1">
                    <h5 className="item-title fw-semibold">{ title?.slice(0, 20) } { (title?.length > 20) && '...' }</h5>
                    <p className="item-description">{ description?.slice(0, 20) }</p>
                    <p className="item-amount">
                        <s className="">{ oldPrice ? `${ (oldPrice)?.toFixed(2) }` : ''}</s>&nbsp;
                        <span className="fw-semibold text-success">${ (currentPrice)?.toFixed(2) }&nbsp;<span className="fw-bold">{ (quantity > 1) ? '($'+(currentPrice * quantity)?.toFixed(2)+')' : '' }</span>
                        </span>
                    </p>
                </div>
                <div className="w-100 d-flex justify-content-between gap-1">
                    <span>
                        <span 
                            type="button" 
                            onClick={ () => removeFromCart(itemId) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                className="bi bi-dash-circle-fill text-secondary" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                            </svg>
                        </span>
                    </span>
                    <span className="border border-secondary px-3 border-radius-35">
                        x&nbsp;{ quantity } 
                    </span>
                    <span>
                        <span 
                            type="button" 
                            onClick={ () => addToCart(itemId) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
        </article>
    )
}
