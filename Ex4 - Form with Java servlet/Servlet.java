import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Servlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html");

			PrintWriter out = response.getWriter();
			String id= request.getParameter("id");
			String name = request.getParameter("name");
			String designation = request.getParameter("designation");
			String dept = request.getParameter("dept");
			String salary = request.getParameter("salary");
			String phone = request.getParameter("phone");
			String address = request.getParameter("address");
			String dob = request.getParameter("dob");
			String gender = request.getParameter("gender");
			String status = request.getParameter("status");

			int sal = Integer.parseInt(salary);
			if ("RA".equals(designation)) {
				designation = "Research Assistant";
				sal *= 1;
			}
			else if ("TA".equals(designation)) {
				designation = "Teaching Assistant";
				sal *= 1.25;
			}
			else if ("AP".equals(designation)) {
				designation = "Associate Professor";
				sal *= 2;
			}
			else if ("Prof".equals(designation)) {
				designation = "Professor";
				sal *= 2.5;
			}

			out.println("<html>");
			out.println("<head><title>Employee Payroll</title><link rel='stylesheet' href='styles_servlet.css'></head>");
			out.println("<body><h1>Employee Payroll Details</h1>");
			out.println("<hr><br>");
			out.println(
					"<table align='center'><tr><th>ID</th><td>" + id + "</td></tr><tr><th>Name</th><td>" + name + "</td></tr><tr><th>Designation</th><td>" + designation + "</td></tr><tr><th>Department</th><td>" + dept + "</td></tr><tr><th>Basic Pay</th><td>" + salary + "</td></tr><tr><th>Gross Pay</th><td>" + sal + "</td></tr><tr><th>Contact</th><td>" + phone + "</td></tr><tr><th>Address</th><td>" + address + "</td></tr><tr><th>DOB</th><td>" + dob + "</td></tr><tr><th>Gender</th><td>" + gender + "</td></tr><tr><th>Marital Status</th><td>" + status + "</td></tr></table>");
			out.println("</body></html>");
			out.close();
		}
}