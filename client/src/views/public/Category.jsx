import { Link, useParams } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { useCategoryExt } from '@/hooks/external/useFakeStoreCategory.jsx'; 
import ProductComponent2 from '@/components/public/nested-components/ProductComponent2.jsx'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 
import PaginationLinks from '@/components/public/nested-components/PaginationLinks.jsx';

export default function Category() { 
    const params = useParams(); 
    const { categoryExt, getCategoryExt } = useCategoryExt(params?.id); 

    return (
        <Layout> 
            <h2 className="px-3 fw-semibold border-bottom pb-2 fs-3 text-capitalize">{ categoryExt?.title }</h2>

            <div className="px-3 fs-6 d-flex justify-content-end align-items-center">
                <span>1-16 of over { categoryExt?.length } result{ categoryExt?.length > 0 && 's'} for</span>&nbsp;
                <span className="fw-semibold">"{params?.id}"</span>
            </div>
            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main"> 
                    <section className="products pt-3"> 
                        {(categoryExt?.length > 0) && (categoryExt?.map(categoryProduct => {
                            return (
                                <ProductComponent2 
                                    key = { categoryProduct?.id } 
                                    id = { categoryProduct?.id } 
                                    imgSrc =  { categoryProduct?.image }
                                    title = { categoryProduct?.title } 
                                    description = '' 
                                    oldPrice = '' 
                                    currentPrice = { categoryProduct?.price } 
                                    rating = { categoryProduct?.rating?.rate } 
                                    category = { categoryProduct?.category } />
                            )
                        }))}
                    </section>

                    <PaginationLinks /> 
                </div> 

            </section> 

        </Layout>
    )
}
