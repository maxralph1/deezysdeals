import { Link, useParams } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { useProductExt } from '@/hooks/external/useFakeStoreProduct.jsx'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 


export default function Product() { 
    const params = useParams(); 
    const { productExt, getProductExt } = useProductExt(params?.id); 
    console.log(productExt); 

    return (
        <Layout>

            <section className="grid grid-order-reverse pt-3 px-3"> 

                    <Aside />

                    <div className="main">
                        <section className="products pt-3">
                            <article className="card border-0 mb-5">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-md-5">
                                            <div id="carouselExample" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4 text-capitalize">{ productExt?.title }</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold fs-1">${ productExt?.price }</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="24"
                                                            fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path
                                                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </section>

                        <section>
                            <h4 className="fw-semibold fs-5 border-bottom pb-2">About this item</h4> 

                            <div>
                                <ul>
                                    <li style={{ marginLeft: 'unset' }}>
                                        Powerful Performance: Equipped with an Intel Celeron N5100 processor (4C/4T, 1.1/2.8GHz) and integrated Intel UHD
                                        Graphics, ensuring smooth and efficient multitasking for everyday computing tasks.
                                    </li>
                                    <li>
                                        Generous Storage & Memory: Features 32GB DDR4 RAM and a 1TB SSD for fast data access and ample storage space, perfect
                                        for storing large files and applications.
                                    </li>
                                    <li>
                                        Sleek Design & Display: 15.6" FHD (1920x1080) anti-glare display delivers clear and vibrant visuals. The laptop has a
                                        modern and durable design with a black PC-ABS chassis, weighing just 1.7 kg (3.75 lbs) for portability.
                                    </li> 
                                    <li>
                                        Enhanced Connectivity & Security: Includes multiple ports for versatile connectivity - USB 2.0, USB 3.2 Gen 1, HDMI
                                        1.4b, and RJ-45 Ethernet. Features Wi-Fi 5, Bluetooth 5.1, a camera privacy shutter, Firmware TPM 2.0 for added
                                        security, and comes with Windows 11 Pro pre-installed.
                                    </li> 
                                    <li>
                                        Complete Accessory Package for Ultimate Convenience: Alongside the laptop, this package includes a set of valuable
                                        accessories to enhance your computing experience. You'll receive a 512GB external hard drive for additional storage, a
                                        microfiber cloth for keeping your screen clean and smudge-free, and a hotkey sticker sheet to speed up your workflow.
                                        Find your special voucher inside due to package size constraints. Claim your free exclusive gifts with a simple scan,
                                        shipped at no extra cost!
                                    </li>
                                </ul>
                            </div> 

                            <div className="pt-4">
                                <span>
                                    <a href="#features-table" className="text-dark fw-semibold fs-6">View More Features</a>
                                </span>
                            </div>
                        </section>
                    </div>

            </section> 

            <section className="features px-3 pt-5">
                <details>
                    <summary>
                        <h4 className="fw-semibold fs-5 border-bottom pb-2">Features</h4>
                    </summary> 

                    <div id="features-table" className="pt-3">

                    </div>

                    <div className="table-responsive col-md-9">
                        <table className="table table-hover align-middle">
                            <tbody>
                                <tr>
                                    <th scope="row">Standing screen display size</th>
                                    <td colSpan="2">15.6 Inches</td>
                                </tr>
                                <tr>
                                    <th scope="row">Max Screen Resolution</th>
                                    <td>1920 x 1080 Pixels</td>
                                </tr>
                                <tr>
                                    <th scope="row">Processor</th>
                                    <td>2.8 GHz celeron</td>
                                </tr>
                                <tr>
                                    <th scope="row">RAM</th>
                                    <td>32 GB DDR4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hard Drive</th>
                                    <td>1 TB SSD</td>
                                </tr>
                                <tr>
                                    <th scope="row">Graphics Coprocessor</th>
                                    <td>Intel UHD Graphics</td>
                                </tr>
                                <tr>
                                    <th scope="row">Chipset Brand</th>
                                    <td>Intel</td>
                                </tr>
                                <tr>
                                    <th scope="row">Card Description</th>
                                    <td>Integrated</td>
                                </tr>
                                <tr>
                                    <th scope="row">Number of USB 2.0 Ports</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th scope="row">Number of USB 3.0 Ports</th>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">Brand</th>
                                    <td>Lenovo</td>
                                </tr>
                                <tr>
                                    <th scope="row">Series</th>
                                    <td>V15</td>
                                </tr>
                                <tr>
                                    <th scope="row">Item model number</th>
                                    <td>V15</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hardware Platform</th>
                                    <td>PC</td>
                                </tr>
                                <tr>
                                    <th scope="row">Item Weight</th>
                                    <td>5.04 pounds</td>
                                </tr>
                                <tr>
                                    <th scope="row">Product Dimensions</th>
                                    <td>14.14 x 9.28 x 0.78 inches</td>
                                </tr>
                                <tr>
                                    <th scope="row">Item Dimensions LxWxH</th>
                                    <td>14.14 x 9.28 x 0.78 inches</td>
                                </tr>
                                <tr>
                                    <th scope="row">Color</th>
                                    <td>Black</td>
                                </tr>
                                <tr>
                                    <th scope="row">Processor Brand</th>
                                    <td>Intel</td>
                                </tr>
                                <tr>
                                    <th scope="row">Number of Processors</th>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Computer Memory Type</th>
                                    <td>DDR4 SDRAM</td>
                                </tr>
                                <tr>
                                    <th scope="row">Flash Memory Size</th>
                                    <td>1TB</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hard Drive Interface</th>
                                    <td>Solid State</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </section>

        </Layout>
    )
}
