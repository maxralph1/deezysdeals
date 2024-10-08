import { useState } from 'react';  


export default function Help() { 
    const [helpToggle, setHelpToggle] = useState(false); 
    
    return (
        <section className="help"> 

            { helpToggle && 
                <div id="help-box" className="help-box card p-3">
                    <section>
                        <h4 className="fw-bold border-bottom">Chat with our AI HelpDesk</h4>
                    </section>
                    <section className="messages border-bottom w-100">
                        <div className="d-flex flex-column gap-2 pt-2 pb-3">
                            <article className="w-100 d-flex justify-content-start bg-dark rounded text-white text-start p-3 pe-5">
                                <span className="text-start">How may we help you today?</span>
                            </article>
                            
                            <article className="w-100 d-flex justify-content-end bg-body-tertiary rounded p-3 ps-5">
                                <span className="text-end">I need to set up my account</span>
                            </article> 

                            <article className="w-100 d-flex justify-content-start bg-dark rounded text-white text-start p-3 pe-5">
                                <span className="text-start">How may we help you today?</span>
                            </article>
                            
                            <article className="w-100 d-flex justify-content-end bg-body-tertiary rounded p-3 ps-5">
                                <span className="text-end">I need to set up my account</span>
                            </article>
                        </div> 
                        <div className="email-option mx-4 p-1 rounded bg-secondary text-white my-2">
                            <span className="w-75">Not satisfied with our AI response? <a href="#" className="text-decoration-none text-white fw-semibold">Email us</a>.</span>
                        </div>
                    </section> 

                    <section> 
                        <form action="" className="w-100 pt-3 d-flex justify-content-between align-items-center gap-1">
                            <div>
                                <div className="">
                                    <textarea className="form-control" placeholder="Ask our AI  ..." id="message" style={{ height: '50px' }}></textarea>
                                </div>
                            </div> 
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </div> 
                        </form>
                    </section>
                </div> 
            }

            <div 
                type="button" 
                onClick={ () => setHelpToggle(!helpToggle) }
                id="help-btn" 
                className="help-btn cursor-pointer d-flex align-items-center gap-1">
                <span className="text text-white">
                    Help
                </span> 
                <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-question-circle-fill text-white" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                </span>
            </div>
        </section> 
    )
}
