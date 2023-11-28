// header.
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                body {
                    height: 100svh;
                }

                header ,my-header {
                    width: 100%;
                    margin-bottom: auto;
                    border-bottom: solid 0.25px var(--primary-color);
                    backdrop-filter: blur(15px);
                }

                nav {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    text-align: center;
                    align-items: center;
                    padding: 0.5rem 1.5rem;
                    background: transparent;
                    margin: 0;
                }

                        
                nav label i:hover, .logo:hover, ul li:hover {
                    transition: all 0.15s ease-out;
                    transform: scale(1.25);
                }
                nav label i:not(hover), .logo:not(hover), ul li:not(hover) {
                    transition: all 0.25s ease-out;
                    transform: scale(1);
                }

                nav ul {
                    list-style: none;
                    display: flex;
                    gap: 2rem;
                    padding: 0;
                    margin: 0;
                }
                nav :where(a, ul li, i) {
                    color: var(--link-color);
                    text-decoration: none;
                    cursor: pointer;
                }

                #toggle_icon {
                    display: none;
                }

                /* style for smaller screens */
                @media (max-width: 50em){
                    #toggle_icon {
                        display: block;
                    }
                    nav .menu{
                        width: 100%;
                        /* height: 100svh; */
                        display: none;
                    }
                    nav ul {
                        flex-direction: column;
                        align-items: center;
                        padding: 0.5rem 0;
                    }
                    nav label {
                        color: var(--text-color);
                        cursor: pointer;
                    }
                    nav #toggle:checked ~ .menu {
                            display: block;
                            animation: slideIn 0.75s ease-out;
                                                        
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
                    <a href="#index.html" class="logo" style="font-weight: bold;">FAISAL BANJAR</a>
                    <input type="checkbox" name="" id="toggle" style="display: none;">
                    <label for="toggle" id="toggle_icon"><i class="fa-solid fa-bars"></i></label>
                    <div class="menu">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><label id="light_icon"><i class="fa-solid fa-sun"  onclick="toggleTheme()"></i></label></li>
                            <li><label id="dark_icon" ><i class="fa-solid fa-moon" onclick="toggleTheme()"></i></label> </li>
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
                body {
                    height: 100svh;
                }

                footer ,my-footer {
                    background: linear-gradient(to top, var(--primary-color), rgba(0,0,0,0));
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
                        color: var(--text-color);
                        font-size: 0.75vw;
                    }
                    footer .footer-heading {
                        color: transparent;
                        font-weight: 100;
                        font-size: 2.5vw;
                        -webkit-text-stroke: 0.025rem var(--text-color);
                        text-transform: uppercase;
                        letter-spacing: 3px;
                    }

                    footer .links {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        font-size: 1vw;
                        gap: 15px;
                    }
                    footer .links a {
                        color: var(--fifth-color);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    footer .links a:hover {
                        transform: scale(1.15);
                        transition: transform 0.25s ease-out;
                        color: var(--fourth-color);

                    }
                    footer .links a:not(hover) {
                        transform: scale(1);
                        transition: transform 0.25s ease-out;
                    }

                    .social_media_container {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 7px;
                    }
                    .social_media_container a i {
                        font-size: 1.25vw;
                        color: var(--text-color);
                    }
                    .social_media_container a i:hover {
                        transform: scale(1.15);
                        transition: transform 0.25s ease-out;
                        color: var(--fourth-color);
                    }
                    .social_media_container a i:not(hover) {
                        transform: scale(1);
                        transition: transform 0.25s ease-out;
                    }

                    @media  (max-width: 50em) {
                        footer .links, footer .social_media_container {
                            flex-direction: column;
                        }
                    }
            </style>    
            
            <footer>
                <a href="#"><h2 class="footer-heading">Faisal Sami Banjar</h2></a>
            
                <div class="links">
                    <a href="/FaisalBj1_Projects">Projects</a>
                    <a href="">link</a>
                    <a href="">link</a>
                    <br><br><br>
                </div>
            
                <div class="social_media_container">
                    <a href="https://facebook.com/" target="_blank" aria-placeholder="hello"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://instagram.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href="https://snapchat.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-snapchat"></i></a>
                    <a href="https://x.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
                    <a href="https://wa.me/+966562629866" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
                    
                    <a href="https://www.linkedin.com/in/faisal-banjar-943b791ba/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-github"></i></a>
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
