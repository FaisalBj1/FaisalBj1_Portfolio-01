<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Wrench.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Main (index)</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />

        <style>
            .picContainer {
                width: 65%;
                background-image: url('/images/project images/header_background2.jpg');
                margin: 15px;
                padding:7px;
                border-radius: 15px;
            }

                .picContainer h3 {
                    color: white;
                    margin:3px;
                    font-family:Montserrat;
                    font-size: 9pt;
                }

                .picContainer img {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    border-radius: 11px;
                }

                .picContainer p {
                    color: white;
                    font-family:Montserrat;
                    font-size: 8pt;
                }
        </style>
    </head>

    <body>
        <!-- heading -->
        <center><iframe src="index_header.aspx" scrolling ="no" width="100%" style="border:none; margin:0px; padding:0px;"></iframe></center>

        <br />

        <center>
        <div class="picContainer"">
            <h3>What is WRENCH?</h3>
            <p>Wrench is a website that provides multiple services to fix and provide maintenance for cars at any place the customers and cars owners are. The website also provides educational videos about car maintenance and 24/7 support to help any with their cars.</p>
        </div>
        </center>
        <br /><br /><br /><br /><br />


        <center>
            <h2 style="text-shadow: 2px 2px dimgrey;">Some of our services</h2>
            <div class="picContainer">
                <h3>Dead Battery</h3>
                <img src="/images/add images/battery.jpeg" />
            </div>
            <br /><br />
            <div class="picContainer">
                <h3>Flat tire</h3>
                <img src="/images/add images/repair_flat_tire.png" />
            </div>
            <br /><br />
            <div class="picContainer">
                <h3>Help you anywhere</h3>
                <img src="/images/add images/pic1.jpg" />
            </div>
            <br /><br />
        </center>

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:1000; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>