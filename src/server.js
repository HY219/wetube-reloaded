import express from "express"; //node_modules에서 express를 찾는 것을 알 수 있다. //express의 index.js를 불러온다.
import morgan from "morgan";

const PORT = 4000;

const app = express(); //express function을 사용하면 express application을 생성해준다. //app이 express application이 되었다.
const logger = morgan("dev");

//controller(=middleware)에 next인자(argument) 추가
const home = (req, res) => {
  console.log("I will respond."); //req가 request에 관한 정보를 가지고 있는 object이다.
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

// app.use(morgan("dev"));
app.use(logger);
app.get("/", home); //"/"(home)에 get request를 보낸다.
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //callback : server가 시작될 때 실행되는 함수 //port, callback함수
//button.addEventListener("click", handleClick)
