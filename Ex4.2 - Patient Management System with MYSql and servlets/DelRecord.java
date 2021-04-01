import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DelRecord extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/sample";

		String USER = "root";
		String PASS = "Iccwc#2010";

		try {
			response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
			String pidi = request.getParameter("pid");
			String sql = "DELETE FROM patient_details WHERE id=" +pidi+ ";";
			stmt.executeUpdate(sql);
            stmt.close();
            
            out.println("<html>");
			out.println("<head><title>PMS</title><link rel='stylesheet' href='style.css'></head>");
			out.println("<body><h1>Patient Management System</h1>");
            out.println("Record Deleted");
            out.println("</body></html>");
            out.close();
            response.sendRedirect("index.html");

			
			
			stmt.close();
			conn.close();
		} catch (SQLException sql) {
			sql.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}