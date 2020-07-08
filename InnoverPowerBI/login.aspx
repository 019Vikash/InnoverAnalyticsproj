<!DOCTYPE HTML>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="InnoverPowerBI.login" %>

<html lang="zxx">

<head runat="server">
    <meta http-equiv="x-ua-compatible" content="IE=edge" >
	<title>Power BI</title>
	<!-- Meta tag Keywords -->
	
	<script>
		addEventListener("load", function () {
			setTimeout(hideURLbar, 0);
		}, false);

		function hideURLbar() {
			window.scrollTo(0, 1);
		}
	</script>
	<!-- Meta tag Keywords -->
	<!-- css files -->
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
	<!-- Style-CSS -->
	<link rel="stylesheet" href="css/font-awesome.css">
	<!-- Font-Awesome-Icons-CSS -->
	<!-- //css files -->
	<!-- web-fonts -->
	<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
	<!-- //web-fonts -->
</head>

<body>
	<style>
	 .header-w3l h1 span {
    color: #b8dc70;
}
	</style>
	<div class="video-w3l" data-vide-bg="img/1">
		<!--header-->
		
		<!--//header-->
		<div class="main-content-agile">
			<div class="sub-main-w3">
				<h2 style="background-image:url(img/innover.jfif);background-repeat: no-repeat;height: 80px;background-position: center;">
					<i class="" aria-hidden="true"></i>
				</h2>
                <h5><asp:Label runat="server" ID="lblGreeting" Text="" Width="100%" ForeColor="White"></asp:Label></h5>
				<form  runat="server">
					<div class="pom-agile">
						<span class="fa fa-user-o" aria-hidden="true"></span>
						  <asp:TextBox runat="server" ID="txtUsername" CssClass="input100" name="username" placeholder="Enter personal number"></asp:TextBox>
					</div>
					<div class="pom-agile">
						<span class="fa fa-key" aria-hidden="true"></span>
						<asp:TextBox runat="server" ID="txtPassword" CssClass="input100" name="pass" TextMode="Password" placeholder="Enter password"></asp:TextBox>

					</div>
					<%--<div class="sub-w3l">
						<div class="sub-agile">
							<input type="checkbox" id="brand1" value="">
							<label for="brand1">
								
						</div>
						
						<div class="clear"></div>
					</div>--%>
					<div class="right-w3l">
						  <asp:Button runat="server" ID="btnLogin" Text="Login"  OnClick="btnLogin_Click" />
					</div>
				</form>
			</div>
		</div>
		<!--//main-->
		<!--footer-->
		<%--<div class="footer">
			<p>&copy; 2018 Effective Login Form. All rights reserved | Design by
				<a href="http://w3layouts.com">W3layouts</a>
			</p>
		</div>--%>
		<!--//footer-->
	</div>

	<!-- js -->
	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/jquery.vide.min.js"></script>
	<!-- //js -->

</body>

</html>