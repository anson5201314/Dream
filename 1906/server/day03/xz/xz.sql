#�������ݿ�xz��������ڵĻ�
DROP DATABASE IF EXISTS xz;
#�������ݿ�xz
CREATE DATABASE xz;
#�������ݿ�xz
USE xz;
#���������û����ݵı�user
CREATE TABLE user(
  uid INT,
  uname VARCHAR(8),
  upwd VARCHAR(16),  #
  email VARCHAR(16),
  phone VARCHAR(11),
  sex VARCHAR(1), # m/f
  userName VARCHAR(8),
  regTime VARCHAR(10),  # 2018-12-25
  isOnline INT  #1/0
);
#��������
INSERT INTO user VALUES('1','dang','123456','dang@163.com','18912345678','m','�ֵ�','2018-12-25','1');
INSERT INTO user VALUES('2','jing','888888','jing@126.com','18796325874','m','���','2017-10-25','0');
#�޸�����
UPDATE user SET sex='f',regTime='2019-1-1' WHERE uid='2';
#ɾ������
DELETE FROM user WHERE uid='1';
#��ѯ����
SELECT * FROM user;

