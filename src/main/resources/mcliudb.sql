/*
Navicat MySQL Data Transfer

Source Server         : aliyun
Source Server Version : 50621
Source Host           : 123.57.19.36:3306
Source Database       : mcliudb

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2015-07-03 15:47:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `t_id` int(10) NOT NULL AUTO_INCREMENT,
  `t_login_name` varchar(255) NOT NULL COMMENT '用户名/邮箱地址',
  `t_password` varchar(255) NOT NULL COMMENT '密码',
  `t_name` varchar(255) DEFAULT NULL COMMENT '昵称',
  `t_validate_code` varchar(255) DEFAULT NULL COMMENT '验证码---修改密码用',
  `t_out_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '超时日期---修改密码用',
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'liujiahenan@gmail.com', 'a299a96a190eb443da9e2d3f167ecf36', 'liujia', null, null);
INSERT INTO `t_user` VALUES ('2', 'test', '3c0db929f70fb663554d113d41272180', 'test', null, null);
INSERT INTO `t_user` VALUES ('3', '11@163.com', 'b81d775176d941e31a910ec83ae78944', '11', null, null);
INSERT INTO `t_user` VALUES ('4', '756170415@qq.com', 'aa75df618e0cdec2111271bb8c222324', 'mudada', null, null);
INSERT INTO `t_user` VALUES ('5', 'lyt185864ly@163.com', 'e1ee4d2a1a7869e7e599e8513b4e0b25', '李银涛', null, null);
