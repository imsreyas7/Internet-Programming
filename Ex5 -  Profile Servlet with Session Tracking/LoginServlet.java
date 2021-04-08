import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class LoginServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/sample";

		String USER = "root";
		String PASS = "Iccwc#2010";


		PrintWriter out = response.getWriter();
		String user = request.getParameter("username");
		String pass = request.getParameter("password");

		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			String sql = "SELECT password FROM Profile where username = '"+user+"'";
			Statement pst = conn.createStatement();

            ResultSet rs = pst.executeQuery(sql);

            out.println("<!DOCTYPE html>");
            out.println("<html><head><link rel='stylesheet' href='style.css'></head><body style='font-size:15pt'>");

            if(rs.next()) {
                response.setContentType("text/html");
                String word = rs.getString("password");

                if (pass.equals(word)) {
                    HttpSession session = request.getSession();
                    session.setAttribute("user", user);
                    out.println("<h1><B>Welcome " + user + "<B></h1><br>");
                    out.println("<br><h2><a href='ProfileServlet'>View profile in detail</a></h2>");
                }
                else {
                    out.println("Invalid login");
                    RequestDispatcher rd = request.getRequestDispatcher("/index.html");
                    rd.forward(request, response);
                }
            }
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