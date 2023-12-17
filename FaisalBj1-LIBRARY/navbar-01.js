// theme control---

// initializing/retrieving the theme
if (localStorage.getItem("theme") == null){
    root.setAttribute('data-theme', 'dark');
} else {
    root.setAttribute('data-theme', localStorage.getItem("theme"));
}

var theme = root.getAttribute('data-theme');

//storing the theme
const storeTheme = function(theme){
    localStorage.setItem("theme", theme);
}

window.addEventListener('load', () => {
    // Initialize the toggle icon based on the current theme
    updateToggleIcon();

    // Theme toggle
    document.getElementById('theme_icon').addEventListener('click', function () {
        // Toggle the theme
        if (theme === 'light') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        } 
        theme = root.getAttribute('data-theme');

        storeTheme(theme);    
        
        // Update the toggle icon
        updateToggleIcon();
    });

    function updateToggleIcon() {
        // Update the toggle icon based on the current theme
        if (theme === 'dark') {
            document.getElementById('theme_icon').classList.add('fa-moon');
            document.getElementById('theme_icon').classList.remove('fa-sun');
        } else {
            document.getElementById('theme_icon').classList.remove('fa-moon');
            document.getElementById('theme_icon').classList.add('fa-sun');
        }
    }

});

// -------------------------------------------------------------------------------------------------------------------------------------
// header code---

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                 my-header {
                    /*
                    position: absolute;
                    top: 0;
                    z-index: 9999999;
                    */

                    width: 100%;
                    padding: 9px 15px;
                    margin-bottom: auto;
                    background: transparent;
                    border-bottom: solid 1px var(--primary-color);
                }
                my-header * {
                    color: var(--primary-color);
                    box-sizing: border-box;
                    text-decoration: none;
                }
                nav {
                    display: grid;
                    grid-template-areas: 'logo nav_menu icons';
                    margin: 0;
                    padding: 0;
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
                    transform: translate(-3rem);
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

                .menu_icon_animation {
                    display: none;
                    cursor: pointer;
                }
                .menu_icon_animation input {
                    display: none;
                }
                .menu_icon_animation svg {
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
                .menu_icon_animation input:checked + svg {
                    transform: rotate(-45deg);
                }
                .menu_icon_animation input:checked + svg .line-top-bottom {
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
                    .menu_icon_animation {
                        display: block;
                    }
                    nav {
                        grid-template-areas: 
                        'logo icons'
                        'nav_menu nav_menu';
                    }
                    nav .menu {
                        display: none;
                    }
                    nav .menu ul{
                        flex-direction: column;
                        transform: translate(0);
                    }
                    nav #toggle-02:checked ~ .menu {
                        display: block;
                        animationation: fade_in .75s ease-out;
                    }  
                }
                /* [phone] */
                @media screen and (max-width: 767px){
                    .menu_icon_animation {
                        display: block;
                    }
                    nav {
                        grid-template-areas: 
                        'logo icons'
                        'nav_menu nav_menu';
                    }
                    nav .menu {
                        display: none;
                    }
                    nav .menu ul{
                        flex-direction: column;
                        transform: translate(0);
                    }
                    nav #toggle-02:checked ~ .menu {
                        display: block;
                        animationation: fade_in .75s ease-out;
                    }  
                }
            </style>

            <nav> 
                <a class="logo" href="/" style="font-weight: bold;">FAISAL BANJAR</a>

                <input type="checkbox" id="toggle-02" style="display: none;">
                <div class="icons">
                    <label class="menu_icon_animation" id="menu_icon" for="toggle">
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
                        <li><a href="#">Résumé</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="/FaisalBj1-projects">Projects</a></li>
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