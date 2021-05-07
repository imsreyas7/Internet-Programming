import java.sql.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AddServ extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		try {	
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","root","Iccwc#2010");
			Statement stmt = conn.createStatement();
			String sql = "INSERT INTO sample VALUES (1, \"sample\");";
			stmt.executeUpdate(sql);
		}

		catch (Exception e) {
			e.printStackTrace();
		}
		out.println("Record Added <br> <form method=\"POST\" action=\"Patient\"> <input type=\"submit\" value=\"view\">");
	}
}