import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { useCategoriesExt } from '@/hooks/external/useFakeStoreCategories.jsx'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 
import PaginationLinks from '@/components/public/nested-components/PaginationLinks.jsx';


export default function Categories() { 
    const { categoriesExt, getCategoriesExt } = useCategoriesExt(); 
    console.log(categoriesExt); 

    return ( 
        <Layout>
            <section className="grid grid-order-reverse pt-3 px-3"> 

                    <Aside />

                    <div className="main">

                        <section className="products pt-5 d-flex flex-wrap gap-4">
                            {(categoriesExt?.length > 0) && (categoriesExt?.map(category => {
                                return (
                                    <article className="card border-1 px-3 mb-5">
                                        <Link to={ route('categories.show', { id: category }) } className="text-decoration-none text-dark">
                                            <div className="card-body gap-0">
                                                <span className="card-title fs-4 text-capitalize">{ category }</span>
                                            </div>
                                        </Link>
                                    </article>
                                )
                            }))}
                        </section> 
                    
                        <PaginationLinks /> 
                        
                    </div> 

            </section>
        </Layout>
    )
}
