#�������ݿ�dangdang���������
DROP DATABASE IF EXISTS dangdang;
#�������ݿ�dangdang
CREATE DATABASE dangdang;
#��������ݿ�
USE dangdang;
#��������ͼ�����ݵı�book
CREATE TABLE book(
  bid INT,
  title VARCHAR(16),
  price INT
);
#�������
INSERT INTO book VALUES('1','one','86');
INSERT INTO book VALUES('2','two','78');
#��ѯ����
SELECT * FROM book;
