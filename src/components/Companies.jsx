import React, { Component } from "react";
import Slider from "react-slick";

export default class CompanyLogos extends Component {
    render() {
        const setting = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]

        };
        return (
            <div className=" companies align-items-center d-flex">
                {/* <div className="companies d-flex "> */}
                    <div className="container align-middle">
                        <div className=" companies-logo">
                            <Slider {...setting}>


                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-kupa.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-tarabara.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-shiram.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-codex.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-kupa.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-tarabara.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-shiram.png" className="mx-auto my-auto" alt="Habu" /></div>
                                <div className="mx-auto"><img src="assets/images/logo/company-logo/logo-codex.png" className="mx-auto my-auto" alt="Habu" /></div>

                            </Slider>
                         </div>
                   </div>
                {/* </div> */}
            </div>
        );
    }
}