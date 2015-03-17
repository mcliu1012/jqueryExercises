package com.lj.mcliu.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

import com.lj.mcliu.dao.ValidateExerciseDao;
import com.lj.mcliu.entity.User;

@Repository("ValidateExerciseDao")
public class ValidateExerciseDaoImpl implements ValidateExerciseDao {
    protected Logger logger = LoggerFactory.getLogger(ValidateExerciseDaoImpl.class);

    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    @Qualifier("dataSourceMcliu")
    public void setDataSource(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    /**
     * Regist User
     */
    @Override
    public void insertUser(User user) throws Exception {
        String sql =
                " INSERT INTO t_user "
                        + " ( t_login_name , "
                        + "  t_password , "
                        + "  t_name ) "
                        + " VALUES "
                        + " ( "
                        + " :loginName, "
                        + " :password, "
                        + " :name "
                        + " )";
        // 参数作成
        Map<String, Object> key = new HashMap<>();
        key.put("loginName", user.getLoginName());
        key.put("password", user.getPassword());
        key.put("name", user.getName());
        this.namedParameterJdbcTemplate.update(sql, key);
    }

    /**
     * 取得所有注册用户的信息
     */
    public List<User> selectUserList() throws Exception {
        String sql = "SELECT "
                + "t_id, "
                + "t_login_name, "
                + "t_password, "
                + "t_name, "
                + "t_validate_code, "
                + "t_out_date "
                + "FROM t_user ";

        List<User> userList = this.namedParameterJdbcTemplate.query(sql, new UserListRowMapper());
        return userList;
    }

    protected class UserListRowMapper implements ParameterizedRowMapper<User> {

        @Override
        public User mapRow(ResultSet rs, int index) throws SQLException {
            User user = new User();
            user.setId(rs.getInt("t_id"));
            user.setLoginName(rs.getString("t_login_name"));
            user.setPassword(rs.getString("t_password"));
            user.setName(rs.getString("t_name"));
            user.setValidateCode(rs.getString("t_validate_code"));
            user.setOutDate(rs.getTimestamp("t_out_date"));
            return user;
        }

    }

}
