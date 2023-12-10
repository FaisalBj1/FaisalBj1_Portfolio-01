//general---

const timestamp = new Date().getTime();

const root = document.documentElement;

// css
document.head.insertAdjacentHTML('beforeend', `
<link rel="stylesheet" href="/style-01.css?dev=${timestamp}">
<link rel="stylesheet" href="/vendor/fontawesome-06/css/all.css?dev=${timestamp}">
<style>:root {display:none;}</style>
`);

// to prevent unstyled HTML flashing
window.addEventListener('load', () => {
    setTimeout(function() {
        // :root {display:none;} in the page.
        root.style.display = 'block';
    }, 250);//ms
});
  
// -------------------------------------------------------------------------------------------------------------------------------------
// theme control---

// initializing the theme
root.setAttribute('data-theme', 'dark');

window.addEventListener('load', () => {
    // Initialize the toggle icon based on the current theme
    updateToggleIcon();

    // Theme toggle
    document.getElementById('theme_icon').addEventListener('click', function () {
        // Toggle the theme
        if (root.getAttribute('data-theme') === 'light') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        }

        // Update the toggle icon
        updateToggleIcon();
    });

    function updateToggleIcon() {
        // Update the toggle icon based on the current theme
        if (root.getAttribute('data-theme') === 'dark') {
            document.getElementById('theme_icon').classList.add('fa-sun');
            document.getElementById('theme_icon').classList.remove('fa-moon');
        } else {
            document.getElementById('theme_icon').classList.remove('fa-sun');
            document.getElementById('theme_icon').classList.add('fa-moon');
        }
    }
});
  

// -------------------------------------------------------------------------------------------------------------------------------------
// header code---

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                body {
                    
                }
                my-header {
                    width: 100%;
                    margin-bottom: auto;
                    border-bottom: solid 0.25px var(--primary-color);
                    backdrop-filter: blur(15px);
                }
                my-header * {
                    color: var(--primary-color);
                    text-decoration: none;
                }
                nav {
                    display: grid;
                    grid-template-areas: 'logo nav_menu icons';
                    padding: 0 1.5rem;
                    background: transparent;
                    margin: 0;
                    justify-content: stretch;
                }
                nav .logo {
                    grid-area: logo;
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;

                }
                nav .icons {
                    grid-area: icons;
                    display: flex;
                    flex-direction: row;
                    justify-content: end;
                    align-items: center;
                    gap: 15px;
                }
                nav .menu {
                    grid-area: nav_menu;
                    display: flex;
                    flex-direction: row;
                }
                nav .menu ul{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    gap: 21px;
                    transform: translate(-4rem);
                    place-content: center;
                }
                nav .menu * {
                    text-decoration: none;
                    list-style: none;
                }
                nav i {
                    font-size: 1.35rem;
                    cursor: pointer;
                }
                        
                nav label:hover,  nav ul li:hover {
                    transition: all 0.15s ease-out;
                    transform: scale(1.15);
                }
                nav label:not(hover),  nav ul li:not(hover) {
                    transition: all 0.25s ease-out;
                    transform: scale(1);
                }

                .menu_icon_anim {
                    display: none;
                    cursor: pointer;
                }
                .menu_icon_anim input {
                    display: none;
                }
                .menu_icon_anim svg {
                    /* The size of the SVG defines the overall size */
                    height: 2rem;
                    /* Define the transition for transforming the SVG */
                    transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);
                }
                .line {
                    fill: none;
                    stroke: var(--primary-color);
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 3;
                    /* Define the transition for transforming the Stroke */
                    transition: stroke-dasharray 750ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 750ms cubic-bezier(0.4, 0, 0.2, 1);
                }
                .line-top-bottom {
                    stroke-dasharray: 12 63;
                }
                .line-top-bottom {
                    stroke-dasharray: 12 63;
                }
                .menu_icon_anim input:checked + svg {
                    transform: rotate(-45deg);
                }
                .menu_icon_anim input:checked + svg .line-top-bottom {
                    stroke-dasharray: 20 300;
                    stroke-dashoffset: -32.42;
                }

                /* style for different screens */
                /* [laptop] */
                @media screen and (min-width: 1025px){
                    /* default */
                }
                /* [ipad] */
                @media screen and (min-width: 768px) and (max-width: 1024px) { 
                    .menu_icon_anim {
                        display: block;
                    }
                    nav {
                        grid-template-areas: 
                        'logo icons'
                        'nav_menu nav_menu';
                        padding: 0.5rem 1.5rem;
                    }
                    nav .menu {
                        display: none;
                    }
                    nav .menu ul{
                        flex-direction: column;
                        transform: translate(-1.5rem);
                    }
                    nav #toggle-02:checked ~ .menu {
                        display: block;
                        animation: menu_slide 0.75s ease-out;
                    }  
                }
                /* [phone] */
                @media screen and (max-width: 767px){
                    .menu_icon_anim {
                        display: block;
                    }
                    nav {
                        grid-template-areas: 
                        'logo icons'
                        'nav_menu nav_menu';
                        padding: 0.5rem 1.5rem;
                    }
                    nav .menu {
                        display: none;
                    }
                    nav .menu ul{
                        flex-direction: column;
                        transform: translate(-1.5rem);
                    }
                    nav #toggle-02:checked ~ .menu {
                        display: block;
                        animation: menu_slide 0.75s ease-out;
                    }  
                }
                       
                @keyframes menu_slide {
                    from {
                        opacity: 0;
                        transform: translateY(-17px);
                    } to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

            </style>

            <nav> 
                <a class="logo" href="./" style="font-weight: bold;">FAISAL BANJAR</a>

                <input type="checkbox" id="toggle-02" style="display: none;">
                <div class="icons">
                    <label class="menu_icon_anim" id="menu_icon" for="toggle">
                        <input type="checkbox" id="toggle" style="display: none;">
                        <svg viewBox="0 0 32 32">
                        <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path class="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                    <div>
                        <label><i id="theme_icon" class="fa-solid fa-sun"></i></label>
                    </div>
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="/FaisalBj1_Projects/projects.html">Projects</a></li>
                    </ul>
                </div>
            </nav>
            `
    }
}

customElements.define('my-header', MyHeader)

// to display the meny when toggle is clicked.
window.addEventListener('load', () => {
    document.getElementById('menu_icon').addEventListener('click', function() {
        if (document.getElementById('toggle').checked) {
            document.getElementById('toggle-02').checked = true;
        } else {
            document.getElementById('toggle-02').checked = false;
        }
    });
});

// -------------------------------------------------------------------------------------------------------------------------------------
// footer code---

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                body {
                    
                }

                footer, my-footer{
                    border-top: solid 1px var(--primary-color);
                    backdrop-filter: blur(15px);
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content:space-evenly;
                    text-align: center;
                    align-items: center;
                    
                    gap: 1em;
                    padding: 0;
                    margin-top: auto; 
                    width: 100%;
                    // background: linear-gradient(0, var(--primary-color), rgba(0, 0, 0, 0.0));
                }
                    footer a {
                        color: var(--accent-color);
                        text-decoration: none;
                    }
                    footer p {
                        color: var(--accent-color);
                        font-size: 0.75rem;
                    }
                    footer .footer-heading {
                        color: transparent;
                        font-weight: 100;
                        font-size: 2.5rem;
                        -webkit-text-stroke: 0.025rem var(--text-color);
                        text-transform: uppercase;
                        letter-spacing: 3px;
                    }
                    .social_media_container {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 7px;
                    }
                    .social_media_container a i {
                        font-size: 1.75rem;
                        color: var(--text-color);
                    }
                    .social_media_container a i:hover {
                        transform: scale(1.15);
                        transition: transform 0.25s ease-out;
                        color: var(--accent-color);
                    }
                    .social_media_container a i:not(hover) {
                        transform: scale(1);
                        transition: transform 0.25s ease-out;
                    }

                    p a {
                        color: var(--text-color);

                    }


            </style>    
            
            <footer>
                <!-- <a href="#">LOGO</a> -->
                <br/>
            
                <div class="social_media_container">
                    <a href="https://facebook.com/" target="_blank" aria-placeholder="hello"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://instagram.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href="https://t.snapchat.com/Eo0muP3W" target="_blank"><i class="fa-brands fa-square-snapchat"></i></a>
                    <a href="https://x.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://wa.me/+966562629866" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/faisal-banjar-943b791ba/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/FaisalBj1" target="_blank"><i class="fa-brands fa-square-github"></i></a>
                </div>
        
                <div>
                    <p>Copyright ©${new Date().getFullYear()} All rights reserved | Desined & Developed by <a href="http://FaisalBj1.com" target="_blank">FaisalBj1</a></p>
                </div>
            </footer>
            `
    }
}

customElements.define('my-footer', MyFooter)

// -------------------------------------------------------------------------------------------------------------------------------------
// TEST--- 


