<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sign_in.aspx.cs" Inherits="Wrench.sign_in" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Sign In</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />

        <style>
            input{
                width:100%;
            }

            td{
                width:230px;
            }
        </style>
    </head>

    <body>
        <!-- heading -->
        <center><iframe src="index_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>

        <br />
        <br />
        <br />

        <center>
            <form method="post" action="home.aspx">
                <table border="0">
                    <tbody>
                        <tr><td><label>Username:                </label></td><td><input type="text"     id="username" placeholder="Ex: Faisal.71_" />        </td></tr>
                        <tr><td><label style="color:grey;">or   </label>                                                                                          </tr>
                        <tr><td><label>E-Mail:                  </label></td><td><input type="email"    id="eMail" placeholder="Ex: Faisal_19@example.com" /></td></tr>
                        <tr><td><label>Password:                </label></td><td><input type="password" id="password" />                                     </td></tr>
                        <tr><td>&nbsp                                                                                                                        </td></tr>
                        <tr><td style="text-align:center;" colspan="2"><input type="submit" style="width:102%;" value="Sign in" />                           </td></tr>   
                    </tbody>
                </table>
            </form>  
        </center>

        <br /><br /><br /><br /><br /><br /><br />

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:1000; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>