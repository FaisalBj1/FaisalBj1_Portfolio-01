<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="questions.aspx.cs" Inherits="Wrench.questions" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Common Questions</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />

        <style>
            div {
                font-family: 'Lucida Handwriting';
                font-size: 9pt;
                width: 65%;
                left: 25px;
                text-align: justify;
            }

            p {
                font-family: 'Lucida Handwriting';
                font-size: 9pt;
                width: 65%;
                text-align: justify;
                position: relative;
                left: 25px;
            }

            tr {
                font-size: 11pt;
                font-weight: 50;
                height: 29px;
            }

            h3 {
                background-color: #e5e5e5;
                color: #8d4d00;
                font-family: 'Comic Sans MS';
                font-size: 13pt;

            }

            nav {
                text-align: center;
                font-weight: lighter;
                color: white;
                border-right: 2px solid black;
                border-left: 2px solid black;
                width: 43%;
                background-image: url('/images/project images/header_background2.jpg');
                font-size: 11pt;
                font-family:Bahnschrift;
                border-radius: 25px;
                padding:5px;
            }

                nav ul {
                    display: none;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                nav:hover ul {
                    display: block;
                }

                nav ul li {
                    margin: 0;
                    padding:10px;
                    border-bottom: 0.25px solid black;
                    font-size: 9pt;
                    text-align: left;
                    border-top: 2px solid white;
                    background-color: #dbdbdb;
                    color: black;
                    border-radius: 20px;

                }

                    nav ul li:hover {
                        background-image: url('/images/project images/header_background2.jpg');
                        color: white;
                    }

                    nav ul a {
                        text-decoration: none;
                        text-decoration-color: none;
                        color: black;
                    }
        </style>
    </head>
    
    <body>
        <!-- heading -->
        <center><iframe src="page_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>

        <!-- hover Menu -->
        <center>
            <nav>Quick Navigation
                <ul>
                    <a href="#1"><li>What is WRENCH?</li></a>
                    <a href="#2"><li>What is the purpose of WRENCH?</li></a>
                    <a href="#3"><li>What is the main functions of WRENCH?</li></a>
                    <a href="#4"><li>What do We hope the finished site to accomplish? Who will be the users and maintainers of WRENCH?.</li></a>
                    <a href="#5"><li>Who are We going to attract intended visitors to WRENCH?</li></a>
                </ul>
            </nav>
        </center>

        <a id="1"></a>
        <h3>-What is WRENCH?</h3>
        <p>&nbsp Wrench is a website that provides multiple services to fix and provide maintenance for cars at any place the customers and cars owners are. The website also provides educational videos about car maintenance and 24/7 support to help any with their cars.</p>    

        <br />

        <a id="2"></a>
        <h3>-What is the purpose of WRENCH?</h3>
        <p>&nbsp Most of the people who have cars will find their selves using the websites whenever they need any help with their cars, whether it is a simple Issue or flat tire or also charging the dead battery and towing. Wrench website will help give the people a general knowledge about cars maintenance to avoid needing someone to fix their cars or even avoid breaking it in sometimes.</p>

        <br />

        <a id="3"></a>
        <h3>-What is the main functions of WRENCH?</h3>
        <div>
            <ul>
                <li>Main Page</li>
                <li>Sign Up</li>
                <li>Sign In</li>
                <li>Home Page</li>
                <li>Search</li>
                <li>Recommendations</li>
                <li>Feedback</li>
                <li>Common Questions</li>
                <li>Contact Us</li>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
                <%--<li></li>--%>
            </ul>
        </div>

        <br />

        <a id="4"></a>
        <h3>-What do We hope the finished site to accomplish? Who will be the users and maintainers of WRENCH?.</h3>
        <p>&nbsp Nowadays almost everyone has a car, most of them do not have enough knowledge to be able to fix their cars by themselves. So with the Wrench website, it will help the users to find the help they need with basically a click of a button, and also provide them with the knowledge that will decrease the needing for help to solve any problem with their cars.</p>
        <p>&nbsp The final chapter of developing this website is to maintain it. And what we going to do that is by making the database for the website it will automatically all the information about the users and what they are doing in the website, and the website will always be up to date in terms of design and user experience, and this how we will achieve our goal by maintaining the website properly.</p>

        <br />

        <a id="5"></a>
        <h3>-Who are We going to attract intended visitors to WRENCH?</h3>
        <div>
            <ul>
                <li>Wrench will provide the user the most friendly user interface.</li>
                <li>Wrench will help the users to fix what they’re from issues before they need any help from others.</li>
                <li>Wrench will give us the ability to contact us directly at any time.</li>
                <li>The users have the ability to tell us about their feedbacks & recommendations.</li>
                <li>The website will provide the user with a map of the website.</li>
            </ul>
        </div>

        <br />
        <br />
        <br />

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:1000; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>