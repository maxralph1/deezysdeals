import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import ProductComponent1 from '@/components/public/nested-components/ProductComponent1.jsx'; 
import { useProductsExt } from '@/hooks/external/useFakeStoreProducts.jsx'; 


export default function Suggestions() { 
    const { productsExt, getProductsExt } = useProductsExt(); 
    
    return (
        <section className="suggestions pt-5 mt-2 px-3">
            <h3 className="fw-bold border-bottom pb-2 fs-4">You Might Also Like</h3> 

            <div className="nav-scroller">
                <nav className="nav w-100 justify-content-between py-3" style={{ height: '325px', overflowY: 'hidden' }}>
            
                    { (productsExt?.length > 0) && (productsExt?.map(product => {
                        return (
                            <ProductComponent1 
                                key = { product?.id } 
                                id = { product?.id } 
                                imgSrc =  { product?.image }
                                title = { product?.title } 
                                description = '' 
                                oldPrice = '' 
                                currentPrice = { product?.price } 
                                rating = { product?.rating?.rate } 
                                category = { product?.category } />
                        )
                    }))}
            
                </nav>
            </div>
        </section>
    )
}
