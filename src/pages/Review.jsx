import React from "react";
import HeroSection from "../components/HeroSection";
import ClientReviews from "../components/Reviews";

function Review() {
    const pageTitle = 'Review';
    return (
        <>
        <HeroSection pageTitle={pageTitle} />
        <ClientReviews/>
        </>
    );
}

export default Review;