#�������ݿ�jd��������ڵĻ�
DROP DATABASE IF EXISTS jd;
#�������ݿ�jd
CREATE DATABASE jd;
#���봴�������ݿ�
USE jd;
#��������ѧ�����ݵı�student
CREATE TABLE student(
  sid INT,  #integer
  name VARCHAR(8),
  sex VARCHAR(1),  #m->��  f->Ů 
  score INT
);
#��������
INSERT INTO student VALUES('1','tom','m','85');
INSERT INTO student VALUES('2','jerry','f','92');
INSERT INTO student VALUES('3','king','m','78');
INSERT INTO student VALUES('4','����','m','87');
#�޸�����
UPDATE student SET name='zhang',score='97' WHERE sid='4';
#ɾ������
DELETE FROM student WHERE sid='3';

#��ѯ����
SELECT * FROM student;







