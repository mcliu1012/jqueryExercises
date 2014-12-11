package com.mcliu.jqueryExercises.dao.impl;

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
        // TODO 自動生成されたメソッド・スタブ

    }

}
