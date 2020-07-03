/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50623
Source Host           : localhost:3306
Source Database       : sign

Target Server Type    : MYSQL
Target Server Version : 50623
File Encoding         : 65001

Date: 2020-06-30 23:27:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_sign_info`
-- ----------------------------
DROP TABLE IF EXISTS `t_sign_info`;
CREATE TABLE `t_sign_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sign_info
-- ----------------------------
INSERT INTO `t_sign_info` VALUES ('1', 'sdfsdfsz', '2020-06-29 22:21:42', '2020-06-30 22:21:45', null);
INSERT INTO `t_sign_info` VALUES ('2', '111111', '2020-06-29 03:00:00', '2020-06-29 10:00:00', null);
INSERT INTO `t_sign_info` VALUES ('3', 'lalalal', '2020-06-30 00:00:00', '2020-07-01 00:00:00', null);

-- ----------------------------
-- Table structure for `t_sign_log`
-- ----------------------------
DROP TABLE IF EXISTS `t_sign_log`;
CREATE TABLE `t_sign_log` (
  `logId` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) DEFAULT NULL,
  `signId` bigint(20) DEFAULT NULL,
  `signtime` datetime DEFAULT NULL,
  PRIMARY KEY (`logId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sign_log
-- ----------------------------
INSERT INTO `t_sign_log` VALUES ('1', '2', '1', '2020-06-30 17:22:48');
INSERT INTO `t_sign_log` VALUES ('2', null, '1', '2020-06-30 17:23:09');
INSERT INTO `t_sign_log` VALUES ('3', '2', '1', '2020-06-30 18:40:10');
INSERT INTO `t_sign_log` VALUES ('4', '1', '1', '2020-06-30 18:40:30');
INSERT INTO `t_sign_log` VALUES ('5', '1', '1', '2020-06-30 18:43:44');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `userId` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `rname` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `utype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'zll', '郑路路', 'zll', '1');
INSERT INTO `t_user` VALUES ('2', 'z', 'z', 'z', '2');
