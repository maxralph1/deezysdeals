import { Link } from 'react-router-dom'; 
import { route } from '@/routes';  


export default function BrandComponent({ brand, imgSrc }) {
    return (
        <article> 
            <Link 
                to={ route('brands.show', { id: brand }) } 
                className="d-flex flex-column gap-2 text-decoration-none text-dark">
                    <span>
                        <img src={ imgSrc } style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                    </span>
                    <span className="fw-bold" style={{ textTransform: 'capitalize' }}>
                        { brand }
                    </span>
            </Link>
        </article>
    )
}
