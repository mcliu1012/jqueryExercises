package com.mcliu.jqueryExercises.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Test {

    public static void main(String[] args) {
        List<User> xmlUserList = initXmlUserData();
        List<User> dbUserList = initDBUserData();

        testSysoUserList(xmlUserList);
        System.out.println("----------------");
        testSysoUserList(dbUserList);
        System.out.println("------------------------------------------------------------");

        Map<Integer, User> xmlUserMap = createUserMap(xmlUserList);
        Map<Integer, User> dbUserMap = createUserMap(dbUserList);


    }

    private static List<User> initXmlUserData() {
        List<User> xmlUserList = new ArrayList<User>();
        for (int i = 1; i <= 5; i++) {
            User user = new User();
            user.setId(i);
            user.setAge(20 + i);
            user.setUserName("xmlUserName" + i);
            xmlUserList.add(user);
        }
        return xmlUserList;
    }

    private static List<User> initDBUserData() {
        List<User> dbUserList = new ArrayList<User>();
        for (int i = 1; i <= 5; i++) {
            if (i == 2 || i == 3) {
                continue;
            }
            User user = new User();
            user.setId(i);
            user.setAge(20 + i);
            user.setUserName("dbUserName" + i);
            dbUserList.add(user);
        }
        return dbUserList;
    }

    private static void testSysoUserList(List<User> userList) {
        for (User user : userList) {
            System.out.println(user.getId());
            System.out.println(user.getUserName());
        }
    }

    private static Map<Integer, User> createUserMap(List<User> userList) {
        Map<Integer, User> userMap = new HashMap<Integer, User>();
        for (User user : userList) {
            userMap.put(user.getId(), user);
        }
        return userMap;
    }

}

class User {
    private int id;
    private String userName;
    private int age;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
