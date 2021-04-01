import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class Patient extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/sample";

		String USER = "root";
		String PASS = "Iccwc#2010";

		try {
			response.setContentType("text/html");
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
			String sql = "SELECT * FROM patient_details";
			ResultSet rs = stmt.executeQuery(sql);

			PrintWriter out = response.getWriter();
			out.println("<html>");
			out.println("<head><title>PMS</title><link rel='stylesheet' href='style.css'></head>");
			out.println("<body><h1>Patient Records</h1>");
			
			out.println("<table><tr><th> ID </th><th> NAME </th><th> AGE </th><th> GENDER </th><th> ADDRESS </th><th> MARITAL STATUS </th><th> DATE OF VISIT </th></tr>");

			while (rs.next()) {
				int id = rs.getInt("id");
				int age = rs.getInt("age");
				String name = rs.getString("name");
				String gender = rs.getString("gender");
				String addr = rs.getString("address");
				String status = rs.getString("marital");
				String dov = rs.getString("dov");

				
			out.println("<tr><td>" + id + "</td><td>" + name + "</td><td>" + age + "</td><td>" + gender + "</td><td>" + addr + "</td><td>" + status + "</td><td>" + dov + "</td></tr>");

				
				//out.println("Patient ID : " + id + "<br>");
				//out.println("Name : " + name + "<br>");
				//out.println("Age : " + age + "<br>");
				//out.println("Gender : " + gender + "<br>");
				//out.println("Address : " + addr + "<br>");
				//out.println("Marital Status : " + status + "<br>");
				//out.println("Date of visit : " + dov + "<br>");
				out.println("<br>");
				
			}
			out.println("</table>");
			out.println("</body></html>");
			out.close();
			
			stmt.close();
			conn.close();
		} catch (SQLException sql) {
			sql.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}