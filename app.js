const quiz = [
    {
        question: "次のうち、JavaScriptのデータ型ではないものはどれですか？",
        answers: [
            "String",
            "Number",
            "Boolean",
            "Character"
        ] ,
        correct: "Character"
    }, {
        question: "Pythonでリストの要素数を取得するために使用する関数はどれですか？",
        answers: [
            "length()",
            "count()",
            "size()",
            "len()"
        ] ,
        correct: "len()"
    }, {
        question: "次のうち、HTMLでリンクを作成するために使用するタグはどれですか？",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ] ,
        correct: "<a>"
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}


const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    } else {
        window.alert("不正解");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert("終了！！あなたの正解数は" + score + "/" + quizLength + "です") 
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

setupQuiz();