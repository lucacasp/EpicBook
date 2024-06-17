import React from "react";
import heroImage from "../assets/banner-libro.avif";

function Welcome() {
    return (
        <div class="px-4 py-5 text-center hero">
            <img class="d-block mx-auto mb-4" src= { heroImage } alt="hero-bg-image" width="100%" height="100%"></img>
            <h1 class="display-5 fw-bold">Welcome to EpicBook</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">A place where you can read your favorite books.</p>
            </div>
        </div>
    )
}

export default Welcome