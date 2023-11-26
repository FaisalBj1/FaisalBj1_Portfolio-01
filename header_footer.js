// header.
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                header ,my-header {
                    width: 100%;
                    margin-bottom: auto;
                }

                nav {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    background-color: var(--secondary-color);
                    background: linear-gradient(to bottom, var(--secondary-color), rgba(0,0,0,0));
                    margin: 0;
                    padding: 1rem 1.5rem;
                    width: 100%;
                }

                nav :where(.logo, label) {
                    font-weight: bold;
                    color: var(--text-color);
                }
                
                nav label i:hover, .logo:hover {
                    transition: all 0.15s ease-out;
                    transform: scale(1.07);
                }
                nav label i:not(hover), .logo:not(hover) {
                    transition: all 0.25s ease-out;
                    transform: scale(1);
                }

                nav ul li:hover {
                    transition: all 0.25s ease-out;
                    transform: scale(1.25);
                }
                nav ul li:not(hover) {
                    transition: all 0.35s ease-out;
                    transform: scale(1);
                }

                nav ul {
                    list-style: none;
                    display: flex;
                    gap: 2rem;
                }
                nav a {
                    text-decoration: none;
                    color: var(--text-color);
                }
                nav #toggle,  nav label {
                    display: none;
                }

                /* light/dark toggle icon */
                nav :where(#toggle_light, #toggle_dark) {
                        display: none;
                }

                /* style for smaller screens */
                @media (max-width: 50em){
                    nav .menu{
                        width: 100%;
                        display:none;
                    }
                    nav ul {
                        flex-direction: column;
                        align-items: center;
                        padding: 0.5rem 0;
                    }
                    nav label {
                        display: inline-flex;
                        color: var(--text-color);
                        cursor: pointer;
                    }
                    nav #toggle:checked ~ .menu {
                        display: block;
                        animation: slideIn 0.5s ease-out;
                    }                                
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-9px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
            
            <header>
                <nav>
                    <a href="#index.html" class="logo">FAISAL BANJAR</a>
                    <input type="checkbox" name="" id="toggle">
                    <label for="toggle"><i class="fa-solid fa-bars" style="color: var(--text-color)"></i></label>
                    <div class="menu">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Projects</a></li>

                            <li><input type="checkbox" name="" id="toggle_light"> <label for="toggle_light" id="light_icon"><i class="fa-solid fa-sun"  style="color: var(--text-color)"></i></label></li>
                            <li><input type="checkbox" name="" id="toggle_dark" > <label for="toggle_dark"  id="dark_icon" ><i class="fa-solid fa-moon" style="color: var(--text-color)"></i></label></li>
                        </ul>
                    </div>
                </nav>
            </header>
            `
    }
}

customElements.define('my-header', MyHeader)

// -------------------------------------------------------------------------------------------------------------------------------------

// footer code.
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                footer ,my-footer {
                    background: linear-gradient(to top, var(--secondary-color), rgba(0,0,0,0));
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content:space-evenly;
                    text-align: center;
                    align-items: center;
                    
                    gap: 1em;
                    padding: 0;
                    margin : 0;
                    margin-top: auto; 
                    width: 100%;
                }
                    footer a {
                        color: var(--text-color);
                        text-decoration: none;
                    }
                    footer p {
                        color: var(--fifth-color);
                    }
                    footer .footer-heading {
                        color: transparent;
                        font-weight: 500;
                        font-size: 2.5em;
                        -webkit-text-stroke: 0.025em var(--text-color);
                        text-transform: uppercase;
                        font-family: 'poppins', sans-serif;
                    }
                    footer .links a {
                        color: var(--fifth-color);
                        margin: 0 10px;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .social_media_container {
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    .social_media_ {
                        width: clamp(px, 50%, 1000px);
                        text-align: center;
                        overflow: hidden;
                    }
                        .social_media_ a i {
                            font-size: 2em;
                            color: var(--text-color);
                            margin: 0.5rem;
                        }
            </style>    
            
            <footer>
                <a href="#"><h2 class="footer-heading">Faisal Sami Banjar</h2></a>
            
                <div>
                    <p class="links">
                        <a href="/FaisalBj1_Projects">Projects</a>
                        <a href="">link</a>
                        <a href="">link</a>
                    </p>
                </div>
            
                <div class="social_media_container">
                    <div class="social_media_">
                        <a href="https://facebook.com/" target="_blank" aria-placeholder="hello"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://instagram.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                        <a href="https://snapchat.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-snapchat"></i></a>
                        <a href="https://x.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
                        <a href="https://wa.me/+966562629866" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
                        <a href="https://www.linkedin.com/in/faisal-banjar-943b791ba/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            
                <div>
                    <p>Copyright ©<script>document.write(new Date().getFullYear());</script> All rights reserved | Built & Developed by <a href="http://FaisalBj1.com" target="_blank">FaisalBj1</a></p>
                </div>
            </footer>
            `
    }
}

customElements.define('my-footer', MyFooter)

// -------------------------------------------------------------------------------------------------------------------------------------
