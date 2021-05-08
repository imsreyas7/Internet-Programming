import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class cervlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html");

			PrintWriter out = response.getWriter();
			String res= request.getParameter("calc");
			
			

			out.println("<html>");
			out.println("<head><title>Calculator Servlet</title><link rel='stylesheet' href='styles_servlet.css'></head>");
			out.println("<body><h1>Calculator Servlet</h1>");
			out.println("<hr><br>");
			out.println(
					"<table align='center'><tr><th>RESULT</th><td>" + res + "</td></tr>");
			out.println("</body></html>");
			out.close();
		}
}