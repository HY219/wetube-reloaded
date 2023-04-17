import express from "express"; //node_modules에서 express를 찾는 것을 알 수 있다. //express의 index.js를 불러온다.

const PORT = 4000;

const app = express(); //express function을 사용하면 express application을 생성해준다. //app이 express application이 되었다.

//controller(=middleware)에 next인자(argument) 추가
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); //req가 request에 관한 정보를 가지고 있는 object이다.
  next(); //다음 함수를 호출해준다.
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("You made continue.");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middle ware");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to Private lounge.");
};

//순서 중요 (use 다음 URL에서 get)
app.use(logger); //모든 route에 함수를 사용(적용)한다.
app.use(privateMiddleware);
app.get("/", handleHome, logger); //"/"(home)에 get request를 보낸다.
app.get("/protected", handleProtected, logger);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //callback : server가 시작될 때 실행되는 함수 //port, callback함수
//button.addEventListener("click", handleClick)
