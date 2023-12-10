<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="feedback.aspx.cs" Inherits="Wrench.feedback" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Feedback</title>
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
        <center><iframe src="page_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>

        <!-- feeback form -->
        <br /><br /><br />
        <center>
            <form method = "post" action="home.aspx">
                <table border="0">
                    <tbody>
                        <tr><td><label>E-Mail:                    </label></td><td><input type="text" />                            </td></tr>
                        <tr><td><label>Type of feedback:          </label></td><td><select style="width:104%;">
                                                                                        <option>General Feedback    </option>
                                                                                        <option>Complaint           </option>
                                                                                        <option>Recommendation      </option>
                                                                                                                           </select></td></tr>
                        <tr><td><label>Write your feedback below: </label>                                                          </td></tr>
                        <tr><td colspan="2"><textarea style="width:100.5%; height:150px;"></textarea>                                </td></tr>
                        <tr><td colspan="2">&nbsp                                                                                   </td></tr>
                        <tr><td colspan="2" style="text-align:center;"><input type="submit" value="Submit" style="width:52%;" />   </td></tr>
                    </tbody>
                </table>
            </form>  
        </center>
        <br /><br /><br />

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:700; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
    </body>
</html>