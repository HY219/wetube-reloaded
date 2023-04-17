import express from "express"; //node_modules에서 express를 찾는 것을 알 수 있다. //express의 index.js를 불러온다.

const PORT = 4000;

const app = express(); //express function을 사용하면 express application을 생성해준다. //app이 express application이 되었다.

//request 관련 코드 여기에 작성
const handleHome = (req, res) => {
  return res.send("I still love you!");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome); //"/"(home)에 get request를 보낸다.
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //callback : server가 시작될 때 실행되는 함수 //port, callback함수
//button.addEventListener("click", handleClick)
