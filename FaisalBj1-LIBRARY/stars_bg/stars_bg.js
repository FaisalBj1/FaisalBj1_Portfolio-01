// footer code.
class Stars_Bg extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                section {
                    margin:  0;
                    padding: 0;
                    position:fixed;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                }
                section .star {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    animation: animate_stars 7s ease-in infinite;
                }
                section .star.star1 {
                    animation-delay: 0s;
                    background: url(/TEST/satrs_bg/imgs/star1.png);
                }
                section .star.star2 {
                    animation-delay: -1s;
                    background: url(/TEST/satrs_bg/imgs/star2.png);
                }
                section .star.star3 {
                    animation-delay: -2s;
                    background: url(/TEST/satrs_bg/imgs/star3.png);
                }
                section .star.star4 {
                    animation-delay: -3s;
                    background: url(/TEST/satrs_bg/imgs/star4.png);
                }
                section .star.star5 {
                    animation-delay: -4;
                    background: url(/TEST/satrs_bg/imgs/star5.png);
                }
                section .star.star6 {
                    animation-delay: -5;
                    background: url(/TEST/satrs_bg/imgs/star6.png);
                }
                section .star.star7 {
                    animation-delay: -6;
                    background: url(/TEST/satrs_bg/imgs/star7.png);
                }

                @keyframes animate_stars {
                    0%, 20%, 40%, 60%, 80%, 100% {
                        opacity: 0;
                    }
                    10%, 30%, 50%, 70%, 90% {
                        opacity: 1;
                    }
                }
            </style>

            <section>
                <div class="star star1"></div>
                <div class="star star2"></div>
                <div class="star star3"></div>
                <div class="star star4"></div>
                <!-- <div class="star star5"></div> -->
                <!-- <div class="star star6"></div> -->
                <!-- <div class="star star7"></div> -->
            </section>
            `
    }
}

customElements.define('stars-bg', Stars_Bg)