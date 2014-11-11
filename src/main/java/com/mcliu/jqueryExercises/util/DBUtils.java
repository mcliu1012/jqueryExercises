package com.mcliu.jqueryExercises.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class DBUtils {
    /**
     * Get MySQL Connection
     */
    public static Connection getMySqlConnection() {
        ResourceBundle resourceBundle = ResourceBundle.getBundle("jdbc");

        Connection connection = null;
        String url = resourceBundle.getString("url");
        String driverName = resourceBundle.getString("driverName");
        String username = resourceBundle.getString("username");
        String password = resourceBundle.getString("password");
        try {
            Class.forName(driverName);
            connection = DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    /**
     * Close all resources
     */
    public static void close(Connection con, PreparedStatement ps, ResultSet rs) {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (ps != null) {
            try {
                ps.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
