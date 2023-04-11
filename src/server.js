import express from "express"; //node_modules에서 express를 찾는 것을 알 수 있다. //express의 index.js를 불러온다.

const app = express(); //express function을 사용하면 express application을 생성해준다. //app이 express application이 되었다.

const handleListening = () => console.log("Server listening on port 4000");

app.listen(4000, handleListening); //callback : server가 시작될 때 실행되는 함수 //port, callback함수
