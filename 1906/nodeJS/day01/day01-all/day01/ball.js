//��ϰ��˫ɫ�����ȡ1~33֮���6�����ֲ����ظ��������Ǵ�С��������ȡ1~16֮���1�����֣���󣩣����һ�������顣
var arr=[];
//ѭ������1~33�����뵽arr��
for(let i=1;i<=33;i++){
  arr.push(i);
}
var newArr=[];
//��arr�����ȡ6���������ظ�
for(let i=0;i<6;i++){
  //����ȡ��(�����*���鳤��)
  //��ȡ����±�
  var index=Math.floor(Math.random()*arr.length);
  newArr.push(arr[index]);
  //��arr��ɾ����ǰ��Ԫ�ء�������ͨ���±�
  arr.splice(index,1);
}
//�Խ������
newArr=newArr.sort((a,b)=>a-b);
//ȡ1~16֮��1�������
//0~15  +1
//0~1 * 16   0.1~15.9  0~15  +1   1~16
var blue=Math.floor(Math.random()*16)+1;
newArr.push(blue);
console.log(newArr);