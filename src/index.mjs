import "./styles.css";

const onClickAdd = () =>{
  //テキストボックスの値の取得ろ初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

//divの生成
const div = document.createElement("div");
div.className = "list-row";

//liの生成
const li = document.createElement("li");
li.innerText = inputText;

// divの子要素にliを設定する
div.appendChild(li);
console.log(div);

//未完了リストに追加
document.getElementById("incomete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", ()=> onClickAdd());
