<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="page_header.aspx.cs" Inherits="Wrench.page_header" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>page_header</title>
        <link rel="stylesheet" type="text/css" href="header_StyleSheet1.css" />
    </head>

    <body>
        <a href="home.aspx" target="_parent"><img src="images/project images/wrench_driver_titlelogo.png" width="99px" height="99px" /></a>
        <h1 style="position:absolute; right:25px; top:9px;">Wrench</h1>
        <h3 style="position:absolute; right:25px; top:53px;">1845772 | 1846798</h3>
    
        <%-- all pages top menu --%>
        <center>
            <table border="0">
                <tr>
                    <th><a href="home.aspx"         target="_parent">Home                           </a></th>
                    <th><a href="sitemap.aspx"      target="_parent">Site Map                       </a></th>
                    <th><a href="feedback.aspx"     target="_parent">Feedback                       </a></th>
                    <th><a href="contact_Us.aspx"   target="_parent">Contact us                     </a></th>
                    <th><a href="questions.aspx"    target="_parent">Common Questions               </a></th>
                    <th><a href="index.aspx"        target="_parent" style="color:red;"> Sign out   </a></th>
                </tr>
            </table>
        </center>
    </body>
</html>

