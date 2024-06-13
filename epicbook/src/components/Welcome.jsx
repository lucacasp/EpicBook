import React from "react";
import heroImage from "../assets/banner-libro.avif";

function Welcome() {
    return (
        <div class="px-4 py-5 text-center hero">
            <img class="d-block mx-auto mb-4" src= { heroImage } alt="hero-bg-image" width="100%" height="100%"></img>
        </div>
    )
}

export default Welcome