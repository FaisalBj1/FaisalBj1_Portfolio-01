<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="contact_us.aspx.cs" Inherits="Wrench.contact_us" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Contact Us</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />

        <style>
            .layer1 {
                position: absolute;
                top: 250px;
                left:200px;
                z-index:1;
                border-radius: 15px;
            }

            .layer2 {
                position: absolute;
                top: 300px;
                left:200px;
                z-index:2;
            }
        </style>

        <script>
            function picShow() {
                document.getElementById("saudiPic").style.display = 'block';
            }

            function picNo() {
                document.getElementById('saudiPic').style.display = 'none';
            }

            function textShow() {
                document.getElementById("text").innerHTML = "Hover on the black box to show pic";
            }
        </script>
    </head>

    <body>
        <!-- heading -->
        <center><iframe src="page_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>

        <!--layering test for excell -->
        <img class="layer1"; src="/images/project images/header_background.jpg" width='200px' height='200px' onmouseover="picShow()" onmouseout="picNo()" />
        <img class="layer2"; src="/images/add images/saudi.png" width='200px' height='100px' id="saudiPic" onmouseover="picShow()" />

        <br />
        <br />
        <br />

        <script>picNo();</script>
        <center><input type="button" value="Click here to show text" onclick="textShow()" /></center>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h3 id="text"></h3>


        <br /><br /><br /><br /><br /><br /><br /><br /><br />


        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:700; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>