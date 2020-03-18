var y1=false, y2 = false , y3 = false, y4 = false;

$('#user').on('focus',function(){
  $('#user-message').html("设置后不可更改，中英文均可，最长14个英文或7个汉字");
});

$('#pwd').on('focus',function(){
  $('#pwd-message').html("长度为8-14个字符，字母/数字以及标点符号至少包含两种，不允许有空格和中文");
});

//设置用户名
$('#user').on('blur',function(){
  
  if($('#user').val() === ''){
    $('#user-pmessage').html('用户名不能为空!');
  }
  if(!/^([\u4e00-\u9fa5]{1,7})|([A-Za-z0-9_]{1,14})|([a-zA-Z0-9_\u4e00-\u9fa5]{1,14})$/.test($('#user').val())){
    $('#user-message').html('用户名仅支持中英文、数字和下划线,且不能为纯数字!');
    return ;
  }
  if(!/\D/.test($('#user').val())){
    $('#user-message').html('用户名仅支持中英文、数字和下划线,且不能为纯数字!');
    return ;
  }
  /*if(len>14){
    $('#user-message').html('用户名不能超过7个汉字或14个字符');
    return ;
  }*/
  else{
    $('#user-message').html('');
    y1 = true; 
  }
});

//填写手机号
$('#phone').on('blur',function(){
  if(!/^1[3456789]\d{9}$/.test($('#phone').val())){
    $('#phone-message').html("手机号码格式不正确!");
  }
  else{
    $('#phone-message').html('');
    y2 = true;
  }
});

//设置密码
$('#pwd').on('blur',function(){
  if(!/(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/.test($('#pwd').val())){
    $('#pwd-message').html("密码设置不符合要求!");
  }
  else{
    $('#pwd-message').html('');
    y3 = true;
  }
});

//获取验证码
var i=6,timer;
$('#get').on('click',function(){
    $('#get').attr("disabled",true);
    timer = setInterval(function(){
      i--;
      if(i == 0){
        $('#get').attr("disabled",false);
        clearInterval(timer);
        $('#get').val('获取验证码');
        $('#num-message').html('请求超时，请稍后再试');
        i = 6;
      }else{
        $('#get').val('获取中('+i+'s)');
     }
   },1000)
});

//获得验证码输入之后，再对码进行验证，正确则y4=true

$('#register').on('click',function(){
  if(y1 & y2 & y3 &y4){
    alert('注册成功!');
  }else{
    alert('注册失败！');//未校验验证码
  }
})

