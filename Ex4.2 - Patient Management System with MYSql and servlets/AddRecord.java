import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddRecord extends HttpServlet{

    public void doGet(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException{

        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String url="jdbc:mysql://localhost:3306/sample";
        String username = "root";
        String password= "Iccwc#2010";
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String id = request.getParameter("id");
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        String gender = request.getParameter("gender");
        String address = request.getParameter("address");
        String marstat = request.getParameter("marital");
        String dov = request.getParameter("dov");


        try{
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, username, password);
            Statement stmt = conn.createStatement();

            String sql = "INSERT INTO patient_details(id, name, age, gender, address, marital, dov) VALUES('";
            sql+=id;sql+="', '";
            sql+=name;sql+="', '";
            sql+=age;sql+="', '";
            sql+=gender;sql+="', '";
            sql+=address;sql+="', '";
            sql+=marstat;sql+="', '";
            sql+=dov;sql+="');";
            stmt.executeUpdate(sql);
            stmt.close();
            
            out.println("<html>");
			out.println("<head><title>PMS</title><link rel='stylesheet' href='style.css'></head>");
			out.println("<body><h1>Patient Management System</h1>");
            out.println("Record Added: "+ name +"<br> <form method=\"POST\" action=\"/Ex42/Patient\"> <input type=\"submit\" value=\"View Records\">");
            out.println("</body></html>");
            out.close();
            response.sendRedirect("index.html");

        stmt.close();
        conn.close();
        }
        catch(Exception e){
            out.println(e.toString());
        }
    }
}