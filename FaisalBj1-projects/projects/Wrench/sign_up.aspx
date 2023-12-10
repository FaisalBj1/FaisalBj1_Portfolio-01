<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sign_up.aspx.cs" Inherits="Wrench.sign_up" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <link rel="icon" href="/images/project images/wrench_driver_titlelogo.png" type="image/icon type">
        <title>Sign Up</title>
        <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />

        <%--<script src="functions.js"></script>--%>
        
        <style>
            input{
                width:100%;
            }

            td{
                width:230px;
            }
            .auto-style1 {
                height: 26px;
            }
        </style>

        <script type="text/javascript">
            //check password function...
            function checkPass() {
                var pass1 = document.getElementById("Password");
                var pass2 = document.getElementById("cPassword");

                //check 8 char or more...
                if (pass1.value.length < 8) {
                    alert("Password should be 8 characters ot  more")
                }

                //check if passwords match or not...
                if (pass1.value == pass2.value) {
                    alert("Password match");
                } else {
                    alert("Password NO match");
                }

            }//end of check password function.

            //adding row & input for other job...
            function addRowInputJob(){
                var choice = document.getElementById("job");
                var formTable = document.getElementById("sign_up_form_table");

                if (choice.value == "Other") {
                    var newRow = formTable.insertRow(7);
                    var cell1 = newRow.insertCell(0);
                    var cell2 = newRow.insertCell(1);

                    cell1.innerHTML = "<div style='color:grey;'>Enter your job:</div>";
                    cell2.innerHTML = "<input type='text' id='otherJob' placeholder='Ex: Engineer' />";
                } else {
                    if (formTable.rows.length > 17) {
                        formTable.deleteRow(7);
                    }
                }
            }//end of adding row & input for other job.
        </script>
    </head>

    <body>
        <form id="form1" runat="server">
        <!-- heading -->
        <center><iframe src="index_header.aspx" scrolling="no" width="100%" style="border:none;"></iframe></center>
            
        <br />
        <br />
        <br />

        <center>
                <table border="0" id="sign_up_form_table";>
                    <tbody>                        
                        <tr><td><label>Username:        </label></td><td><asp:TextBox runat="server"     id="username" placeholder="Ex: Faisal.71_" ></asp:TextBox>                                                               </td></tr>
                        <tr><td><label>First Name:      </label></td><td><asp:TextBox runat="server"     id="fName"    placeholder="Ex: Faisal" ></asp:TextBox>                                                                   </td></tr>
                        <tr><td><label>Last Name:       </label></td><td><asp:TextBox runat="server"     id="lName"    placeholder="Ex: Hamed" ></asp:TextBox>                                                                    </td></tr>
                        <tr><td><label>E-Mail:          </label></td><td><asp:TextBox runat="server"     id="eMail"    placeholder="Ex: Faisal_1999@Example.com" ></asp:TextBox>                                                  </td></tr>
                        <tr><td><label>Phone No:        </label></td><td><asp:TextBox runat="server"     id="phoneNo"  placeholder="Ex: +966512345678 or 0512345678" ></asp:TextBox>                                              </td></tr>
                        <tr><td><label>Gender:          </label></td><td><select                id="gender"   style="width:104%;">  
                                                                            <option>select your gender:    </option>
                                                                            <option>Male                   </option>
                                                                            <option>Female                 </option></select>                                                                               </td></tr>
                        <tr><td><label>Job:             </label></td><td><select                id="job"      style="width:104%;" onChange="addRowInputJob()">
                                                                            <option>select your job:       </option>
                                                                            <option>Student                </option>
                                                                            <option>No job                 </option>
                                                                            <option>Other                  </option></select>                                                                               </td></tr>
                        <tr><td><label>Date Of Birth:   </label></td><td><input type="date" style="width:102%;" />                                                                                          </td></tr>
                        <tr><td><label>Password:        </label></td><td><input type="password" id="Password" />                                                                                            </td></tr>
                        <tr><td><label>Confirm Password:</label></td><td><input type="password" id="cPassword" />                                                                                           </td></tr>
                        <tr><td colspan="2"><iframe src="terms_conditions.aspx" scrolling="yes" width=99% height=250px style="padding:5px;"></iframe>                                                       </td></tr>
                        <tr><td colspan="2"  style="font-family:'Agency FB'; text-align:left;" class="auto-style1"><label><input type="checkbox" style="width:10px;" />I have read and I agree the terms and conditions.</label></td></tr>
                        <tr><td colspan="2">&nbsp                                                                                                                                                           </td></tr>
                        <tr style="text-align:center;"><td><input type="reset" value="Reset" /></td><td style="text-align:center;"><input type="submit" value="Sign up" />                                  </td></tr>
                        <tr><td colspan="2">&nbsp                                                                                                                                                           </td></tr>
            <!--check--><tr><td colspan="2" style="text-align:center;"><input type="button" value="Check password" onclick="checkPass()"/>                                                                  </td></tr>
                        <%--<!--test --><tr><td colspan="2" style="text-align:center;"><input type="button" value="test" onclick="" />                                                                                      </td></tr>--%>
            <!--test2--><tr><td colspan="2" style="text-align:center;"><asp:Button ID="insert_But" runat="server" Text="insert test" OnClick="Button1_Click" />                                                                        </td></tr>
                    </tbody>
                </table>
        </center>

        <br /><br /><br /><br /><br /><br /><br />
        <asp:SqlDataSource ID="insert_connection" runat="server" ConnectionString="<%$ ConnectionStrings:358_Project_DatebaseConnectionString2 %>" SelectCommand="SELECT * FROM [test_Table1]" InsertCommand="insert into users_table (Username, First_Name, Last_Name, [E-Mail], Phone_No, Gender, Job, Date_Of_Birth, Password) values (@username, @fName, @lName, @eMail, @phoneNo, null, null, null, null)">
            <InsertParameters>
                <asp:ControlParameter ControlID="fName" Name="fName" PropertyName="Text" />
                <asp:ControlParameter ControlID="lName" Name="lName" PropertyName="Text" />
                <asp:ControlParameter ControlID="username" Name="username" PropertyName="Text" />
                <asp:ControlParameter ControlID="eMail" Name="eMail" PropertyName="Text" />
                <asp:ControlParameter ControlID="phoneNo" Name="phoneNo" PropertyName="Text" />
            </InsertParameters>
            </asp:SqlDataSource>
            

        <!--Go to top of the page-->
        <div  style="width:100%; background-color:#a1a1a1; text-align:center; font-family:Tahoma; font-weight:700; color:black; margin:0px;">
            <a href="#top" style="color:black; font-size:9pt; font-weight:100; text-decoration:none";>Go back to the top of the page</a>
        </div>

        <!-- Footer (at the bottom of the page -->
        <footer><iframe src="page_footer.aspx" scrolling ="no" width ="100%" height="65px" style="border:none;"></iframe></footer>
        </form>
    </body>
</html>