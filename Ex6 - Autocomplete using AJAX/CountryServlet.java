import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class CountryServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/sample";

		String USER = "root";
		String PASS = "Iccwc#2010";

		response.setContentType("text/xml;charset=UTF-8");
		PrintWriter pw = response.getWriter();
		String country = request.getParameter("country");
		country = country.toLowerCase();

		pw.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
		pw.append("<doc>");
		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			String sql = "SELECT country FROM countries where country LIKE '" + country + "%'";
			Statement pst = conn.createStatement();
			
			ResultSet rs = pst.executeQuery(sql);

			Integer count = 0;
			pw.append("<url>").append(sql).append("</url>");
		
			pw.append("<counlist>");
			while (rs.next() && count < 10) {
				String op_country = rs.getString("country");

				pw.append("<country>").append(op_country).append("</country>");

				// Uncomment to print nly 10 dishes
				// count+=1;
			}

			pw.append("</counlist></doc>");
			pst.close();
			conn.close();

		} catch (SQLException e) {
			throw new ServletException(e);
		} catch (Exception e) {
			e.printStackTrace();
			pw.println(e);
		}
	}
}