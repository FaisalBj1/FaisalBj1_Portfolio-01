<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sitemap.aspx.cs" Inherits="Wrench.sitemap" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Site Map)</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />
    </head>

    <body>
        <!-- heading -->
        <center><iframe src="page_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>

        <center>
            <img src="/images/add images/map.jpeg" usemap="#siteMap"  />
        </center>

        <map name="#siteMap">
            <area target="" alt="" title="" href="home.aspx"        coords="103,80,175,119"     shape="rect">
            <area target="" alt="" title="" href="sign_up.aspx"     coords="188,80,260,119"     shape="rect">
            <area target="" alt="" title="" href="sign_in.aspx"     coords="271,122,343,161"    shape="rect">
            <area target="" alt="" title="" href="index.aspx"       coords="187,170,259,209"    shape="rect">
            <area target="" alt="" title="" href="feedback.aspx"    coords="438,277,549,317"    shape="rect">
            <area target="" alt="" title="" href="Contact.aspx"     coords="354,276,435,316"    shape="rect">
            <area target="" alt="" title="" href="questions.aspx"   coords="187,275,268,315"    shape="rect">
            <area target="" alt="" title="" href="sitemap.aspx"     coords="552,276,633,316"    shape="rect">
            <area target="" alt="" title="" href="home.aspx"        coords="183,18,264,58"      shape="rect">
            <%--<area target="" alt="" title="" href="" coords="" shape="rect">--%>
            <%--<area target="" alt="" title="" href="" coords="" shape="rect">--%>
            <%--<area target="" alt="" title="" href="" coords="" shape="rect">--%>
            <%--<area target="" alt="" title="" href="" coords="" shape="rect">--%>
            <%--<area target="" alt="" title="" href="" coords="" shape="rect">--%>
        </map>

        <!-- make everything clear to user -->
        <br /><br /><br />
        <div style="color:red; background-color:yellow; width:fit-content; border-style:dashed; border-width:thin;">
            <p style="font-size: 11pt;">*** You can only click on some of the pages on the map so far...</p>
            <ul style="font-size: 9pt;">
                <li>Main Page</li>
                <li>Sign Up</li>
                <li>Sign In</li>
                <li>Home Page</li>
                <li>Recommendations</li>
                <li>Feedback</li>
                <li>Common Questions</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:1000; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>
