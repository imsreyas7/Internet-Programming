import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ProfileServlet extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/sample";

		String USER = "root";
		String PASS = "Iccwc#2010";


        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        String name = (String) session.getAttribute("user");

		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM profile where username = '"+name+"'";
			Statement pst = conn.createStatement();

            ResultSet rs = pst.executeQuery(sql);
            out.println("<!DOCTYPE> <html>");
            out.println("<html><head><link rel='stylesheet' href='style.css'></head>");
            out.println("<body><h1><B>Welcome " + name + " to the profile page!!</B></h1>");
            out.println("<br><br>");
            out.println("<table>");
            while (rs.next()) {
                response.setContentType("text/html");
                int id = rs.getInt("id");
                int age = rs.getInt("age");
                String pro_name = rs.getString("name");
                String addr = rs.getString("address");

                out.println("<tr><th>Name: </th><td>" + pro_name + "</td></tr>");
                out.println("<tr><th>Age: </th><td>" + age + "</td></tr>");
                out.println("<tr><th>ID: </th><td>" + id + "</td></tr>");
                out.println("<tr><th>Address: </th><td>" + addr + "</td></tr>");
            }
            out.println("</table></body></html>");

            out.println("<form id='logoutform' action='http://localhost:8080/profile/LogoutServlet'>");
            out.println("<br><br><input type='submit' value='Logout' id='button'>");
            out.println("</form>");
            
			pst.close();
            conn.close();
            
			
		} catch (SQLException sql) {
			sql.printStackTrace();
			out.println(sql);
		} catch (Exception e) {
			e.printStackTrace();
			out.println(e);
		}
	}
}