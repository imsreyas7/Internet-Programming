import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class LogoutServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html><head><link rel='stylesheet' href='style.css'></head><body>");
		try {
            HttpSession session = request.getSession();
            if (session.getAttribute("user") != null) {
                String name = (String) session.getAttribute("user");
                session.invalidate();
                out.println("<h1><B>Logged " + name + " out succesfully!!<B></h1><br>");
            }
			
        } catch (Exception e) {
            e.printStackTrace();
            out.println(e);
        }
        out.println("<h2 id='timer'></h2>");
        out.println("<script src='logout.js'></script>");
	}
}