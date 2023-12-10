<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sql_test1.aspx.cs" Inherits="Wrench.TEST.sql_test1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>test</title>
    </head>

    <body>
        
        <form id="form1" runat="server">


            <asp:Label ID="Label1" runat="server" Text="First Name:"></asp:Label>
            <asp:TextBox ID="first_Name_tb" runat="server"></asp:TextBox>
            <p>
            <asp:Label ID="Label2" runat="server" Text="Last   Name:"></asp:Label>
            <asp:TextBox ID="last_Name_tb" runat="server"></asp:TextBox>
            </p>
            <asp:Button ID="insert_but" runat="server" Text="insert" OnClick="Button1_Click" />
            &nbsp;<asp:SqlDataSource ID="insert_connect" runat="server" ConnectionString="<%$ ConnectionStrings:358_Project_DatebaseConnectionString %>" InsertCommand="insert into users_table (First_Name, Last_Name) values (@fName, @lName)" SelectCommand="SELECT * FROM [test_table1]">
                <InsertParameters>
                    <asp:ControlParameter ControlID="first_Name_tb" Name="fName" PropertyName="Text" />
                    <asp:ControlParameter ControlID="last_Name_tb" Name="lName" PropertyName="Text" />
                </InsertParameters>
            </asp:SqlDataSource>
        </form>
        
    </body>
</html>
