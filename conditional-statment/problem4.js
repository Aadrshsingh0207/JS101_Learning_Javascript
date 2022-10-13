let user_name="abc0123@gmail.com";
let password="123456";
let input_userID="abc0123@gmail.com";
let input_password="123457";
if(user_name==input_userID){
  if(password==input_password){
    console.log("successfully loged in");
  }else{
    console.log("incorrect password");
    
  }
}else{
  console.log("wrong username");
}