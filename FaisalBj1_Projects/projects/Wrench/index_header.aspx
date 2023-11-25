<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index_header.aspx.cs" Inherits="Wrench.index_header" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>page_header</title>
        <link rel="stylesheet" type="text/css" href="header_StyleSheet1.css" />
        <style>
            th {
                width: 125px;
            }
        </style>
    </head>

    <body>
        <a href="index.aspx" target="_parent"><img src="images/project images/wrench_driver_titlelogo.png" width="99px" height="99px" /></a>
        <h1 style="position:absolute; right:25px; top:9px;">Wrench</h1>
        <h3 style="position:absolute; right:25px; top:53px;">1845772 | 1846798</h3>

        <%-- index top menu --%>
         <center>
            <table border="0">
                <tr>
                    <th><a href="home.aspx"    target="_parent">Guest   </a></th>
                    <th><a href="sign_in.aspx" target="_parent">Sign In </a></th>
                    <th><a href="sign_up.aspx" target="_parent">Sign Up </a></th>
                </tr>
            </table>
        </center>
    </body>
</html>