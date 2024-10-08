import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { useProductsExt } from '@/hooks/external/useFakeStoreProducts.jsx'; 
import ProductComponent2 from '@/components/public/nested-components/ProductComponent2.jsx'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 
import PaginationLinks from '@/components/public/nested-components/PaginationLinks.jsx'; 


export default function Products() { 
    const { productsExt, getProductsExt } = useProductsExt(); 
    // const first_page = 1; 
    // const pageNumberForward = (posts?.meta?.current_page + 1 > posts?.meta?.last_page) ? posts?.meta?.last_page : posts?.meta?.current_page + 1; 
    // const pageNumberBackward = (posts?.meta?.current_page - 1 < first_page) ? first_page : posts?.meta?.current_page - 1; 

    return ( 
        <Layout> 
            <div className="px-3 fs-6 d-flex justify-content-end align-items-center">
                <span>{ productsExt?.length } item{ productsExt?.length > 0 && 's'}</span>
            </div>

            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main"> 

                    <section className="products pt-3">
                        {(productsExt?.length > 0) && (productsExt?.map(product => {
                            return (
                                <ProductComponent2 
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
                    </section> 

                    <PaginationLinks /> 
                </div> 
            
            </section>

        </Layout>
    )
}
