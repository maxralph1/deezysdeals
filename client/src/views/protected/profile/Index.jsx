import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { useAddresses } from '@/hooks/useAddresses.jsx'; 
import { useAddress } from '@/hooks/useAddress.jsx'; 
import { useUser } from '@/hooks/useUser.jsx'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() { 
    const { user, signOut } = useContext(AuthContext); 
    const { addresses, getAddresses } = useAddresses(); 
    const { address, getAddress, createAddress, updateAddress, makeDefaultAddress } = useAddress(); 
    const { retrievedUser, getUser, updateUser } = useUser(user?.user?.username); 
    console.log(retrievedUser); 
    console.log(user?.user?.username); 
    // console.log(addresses); 

    const handleUpdateProfile = async e => {
        await updateUser(retrievedUser?.data);
    }

    const handleAddAddress  = async e => {
        e.preventDefault(); 

        await createAddress(address?.data); 
        address?.setData(''); 

        await getAddresses();
    }; 

    return ( 
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Profile</h2> 

                    <div className="py-3"> 
                        <section className="d-flex align-items-center flex-wrap column-gap-5 row-gap-3">
                            <div className="d-flex align-items-end gap-3">
                                <span>
                                    <img src="https://images.unsplash.com/photo-1517090186835-e348b621c9ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit-cover border border-secondary border-2 border-radius-35 box-shadow-1" style={{ width: '200px', height: '225px' }} alt="" />
                                </span> 
                                <span className="btn btn-dark border-radius-35 py-0 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="d-flex flex-column">
                                <h3>{ retrievedUser?.data?.first_name + ' ' + retrievedUser?.data?.last_name }</h3> 
                                <span className="fw-semibold">@{ retrievedUser?.data?.username }</span>
                                <span className="pt-0 mt-0">{ retrievedUser?.data?.email }</span> 
                            </div>
                        </section> 

                        <section className="pt-5"> 
                            <form onSubmit={ handleUpdateProfile } id="profile-form" className="profile-form"> 
                                <div className="fields">
                                    <div className="row mb-3 gap-3">
                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                            <label htmlFor="" className="label" id="first_name">First Name:</label>
                                            <input 
                                                type="text" 
                                                value={ retrievedUser?.data?.first_name ?? '' } 
                                                onChange={ event => retrievedUser.setData({
                                                    ...retrievedUser?.data,
                                                    first_name: event.target.value,
                                                }) }
                                                placeholder="e.g. Pae" 
                                                data-target="first_name" />
                                        </div>
                                    </div> 
                                    <div className="row mb-3 gap-3">
                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                            <label htmlFor="" className="label" id="last_name">Last Name:</label>
                                            <input 
                                                type="text" 
                                                value={ retrievedUser?.data?.last_name ?? '' } 
                                                onChange={ event => retrievedUser.setData({
                                                    ...retrievedUser?.data,
                                                    last_name: event.target.value,
                                                }) } 
                                                placeholder="e.g. Daezi" 
                                                data-target="last_name" />
                                        </div>
                                    </div> 
                                    <div className="row mb-3 gap-3">
                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                            <label htmlFor="" className="label" id="email">Email:</label>
                                            <input 
                                                type="email" 
                                                value={ retrievedUser?.data?.email ?? '' } 
                                                onChange={ event => retrievedUser.setData({
                                                    ...retrievedUser?.data,
                                                    email: event.target.value,
                                                }) } 
                                                placeholder="e.g. paedaezi@deezysdeals.com" 
                                                data-target="email" />
                                        </div>
                                    </div> 
                                    <div className="row mb-3 gap-3">
                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                            <label htmlFor="" className="label" id="username-label">Username:</label>
                                            <input type="text" defaultValue={ retrievedUser?.data?.username } placeholder="e.g. @paedaezi" data-target="username-label" disabled />
                                        </div>
                                    </div> 
                                    {/* <div className="row mb-3 gap-3">
                                        <div className="form border border-dark">
                                            <label htmlFor="" className="label" id="password">Password:</label>
                                            <input 
                                                type="password" 
                                                value={ retrievedUser?.data?.password ?? '' } 
                                                onChange={ event => retrievedUser.setData({
                                                    ...retrievedUser?.data,
                                                    password: event.target.value,
                                                }) } 
                                                placeholder="*********" 
                                                data-target="password" />
                                        </div>
                                    </div> 
                                    <div className="row mb-3 gap-3">
                                        <div className="form border border-dark">
                                            <label htmlFor="" className="label" id="repeat_password">Repeat Password:</label>
                                            <input type="password" placeholder="*********" data-target="repeat_password" />
                                        </div>
                                    </div>  */}
                                </div>

                                <div className="pt-3 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark px-3 border-radius-35">
                                        <span>Update</span>&nbsp;
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </section> 

                        <section className="pt-5 pe-3">
                            <h3 className="border-bottom pb-1 fs-5">Addresses (Shipping)</h3> 

                            <section className="d-flex justify-content-end">
                                <button type="button" className="btn btn-sm btn-dark px-3 border-radius-35" data-bs-toggle="modal" data-bs-target="#allModal">
                                    Add New Address
                                </button>

                                <div className="modal fade" id="allModal" tabIndex="-1" aria-labelledby="allModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center justify-content-between">
                                                <h3 className="modal-title fs-5 px-2" id="allModalLabel">Add New Address</h3>
                                                <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div> 
                                            <form onSubmit={ handleAddAddress }>
                                                <div className="modal-body" style={{ paddingRight: '2rem', paddingLeft: '2rem' }}>
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="full_name">Full Name:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.full_name ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    full_name: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. Pae Daezi" 
                                                                data-target="full_name" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="address_line_1">Address Line 1:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.address_line_1 ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    address_line_1: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. 123 Boulevard Street" 
                                                                data-target="address_line_1" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="address_line_2">Address Line 2:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.address_line_2 ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    address_line_2: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. 123 Boulevard Street" 
                                                                data-target="address_line_2" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="post_code">Post Code:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.post_code ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    post_code: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. 12345" 
                                                                data-target="post_code" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="town_city">Town/City:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.town_city ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    town_city: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. Mountain View" 
                                                                data-target="town_city" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="state_region">State/Region:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.state_region ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    state_region: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. Virginia" 
                                                                data-target="state_region" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="country">Country:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.country ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    country: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. USA" 
                                                                data-target="country" />
                                                        </div>
                                                    </div> 
                                                    <div className="row mb-3 gap-3">
                                                        <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                                            <label htmlFor="" className="label" id="phone">Phone:</label>
                                                            <input 
                                                                type="text" 
                                                                value={ address?.data?.phone ?? '' } 
                                                                onChange={ event => address.setData({
                                                                    ...address?.data,
                                                                    phone: event.target.value,
                                                                }) } 
                                                                placeholder="e.g. +123456789" 
                                                                data-target="phone" />
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="submit" className="border-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                        </svg>
                                                    </button>
                                                </div> 
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section> 

                            <section className="address-boxes pt-4">
                                <div class="row"> 
                                    {(addresses?.data?.length > 0) && 
                                        (addresses?.data?.sort((a, b) => (b?.default === true ? 1 : 0) - (a?.default === true ? 1 : 0))?.map((address, index) => { 
                                        // if (address?.default == true) {
                                            return (
                                                <div key={ index } class="col-sm-6 mb-3">
                                                    <div class="card box-shadow-1 border-radius-25 p-2"> 
                                                        <div class="card-body d-flex flex-column gap-1"> 
                                                            <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                                                <span className="fw-semibold">#{ index + 1 }</span>
                                                                { address?.default === false 
                                                                    ? <span 
                                                                            type="button" 
                                                                            onClick={ async () =>{
                                                                                await makeDefaultAddress(address); 
                                                                                await getAddresses();
                                                                            } }
                                                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                                                Make Default
                                                                        </span> 
                                                                            : <span 
                                                                                    className="btn btn-sm btn-success border-radius-35 py-0 fw-semibold">
                                                                                        Default
                                                                                </span> }
                                                            </div>
                                                            <h4 class="card-title fs-5">{ address?.full_name }</h4>
                                                            <span class="card-text fw-semibold">{ address?.address_line_1 }</span>
                                                            <span class="card-text">{ address?.address_line_2 }</span>
                                                            <span class="card-text">{ address?.post_code }</span>
                                                            <span class="card-text">{ address?.town_city }</span>
                                                            <span class="card-text">{ address?.state_region }</span>
                                                            <span class="card-text">{ address?.country }</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) 
                                        // } 
                                    }))}
                                </div>
                            </section>
                        </section>
                    </div>
                </div> 
            </div>
        </Layout>
    )
}
