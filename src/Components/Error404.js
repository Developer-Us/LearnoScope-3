import React from 'react'
import '../Styles/Error404.css';

export default function Error404() {
    return (
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Looks like you're lost :(
                                    </h3>

                                    <h4>The page you are looking for is not available!</h4>

                                    <a style={{borderRadius:"5%"}} href="/" className="link_404">Go Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}