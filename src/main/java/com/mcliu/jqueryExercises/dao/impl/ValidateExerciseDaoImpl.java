package com.mcliu.jqueryExercises.dao.impl;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mcliu.jqueryExercises.dao.ValidateExerciseDao;
import com.mcliu.jqueryExercises.entity.User;

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

}
