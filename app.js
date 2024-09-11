"use-strict";
{
    const suggestionsBox=document.getElementById("suggestions");
    const searchBar=document.getElementById("search-bar");
    const difficulty=document.getElementById("difficulty");

    const suggestions=["フローシェスノッカー"];

    let actions=[];

    let brokeActions=[];

//ひらがなをカタカナに変換する関数
    function translate(input){
        return input.replace(/[\u3041-\u3096]/g,match=(match)=>{
            return String.fromCharCode(match.charCodeAt(0)+0x60);
        })
    }

//検索プログラム
    searchBar.addEventListener("input",()=>{
        const input=searchBar.value;
        const katakanaInput=translate(input);
        suggestionsBox.innerHTML="";

    //検索フォームに文字が入力されたら、候補が表示されるプログラム
        if(katakanaInput){
            const filteredSuggestions=suggestions.filter(suggestion=>
                suggestion.startsWith(katakanaInput)
            );

            if(filteredSuggestions.length>0){
                suggestionsBox.style.display="block";
                filteredSuggestions.forEach(suggestion=>{
                    const suggestionItem=document.createElement("div");
                    suggestionItem.textContent=suggestion;
                    suggestionItem.addEventListener("click",()=>{
                        searchBar.value=suggestion;
                        suggestionsBox.style.display="none";
                    })
                    suggestionsBox.appendChild(suggestionItem);
                })
            }
            else{
                suggestionsBox.style.display="none";
            }
        }
        else{
            suggestionsBox.style.display="none";
        }
    });

//検索結果を表示するプログラム
    document.getElementById("search-button").addEventListener("click",()=>{
        const searchTerm=translate(searchBar.value);
        const difficultyNum=difficulty.value;

        if(searchTerm==="フローシェスノッカー"){
            if(difficultyNum>0&&difficultyNum<=60){
            actions=[
                { turn: "1ターン目", action: "単体攻撃" },
                { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "3ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "4ターン目", action: "単体攻撃" },
                { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                { turn: "6ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "7ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "00ターン目", action: "以降は1~7をループします。" },
               
            ];
            brokeActions=[
                { turn: "1ターン目", action: "単体攻撃" },
                { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "3ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "4ターン目", action: "単体攻撃" },
                { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                { turn: "6ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "7ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "00ターン目", action: "以降は1~7をループします。" },
              
            ]
            getTableBody();
         }
            else if(difficultyNum>60&&difficultyNum<=90){
                actions=[
                    { turn: "1ターン目", action: "単体攻撃" },
                    { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "3ターン目", action: "Rage Wave(全体攻撃)"},
                    { turn: "4ターン目", action: "単体攻撃" },
                    { turn: "5ターン目", action: "Double Smash(全体攻撃+混乱1ターン)"},
                    { turn: "6ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "8ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "9ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "10ターン目", action: "Rage Wave(全体攻撃)"},
                    { turn: "00ターン目", action: "以降は1~10をループします。" },
                ];
                brokeActions=[
                    { turn: "1ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "3ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "4ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "5ターン目", action: "Double Smash(全体攻撃+混乱1ターン)"},
                    { turn: "6ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "8ターン目", action: "Double Smash(全体攻撃+混乱1ターン)"},
                    { turn: "9ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "10ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "00ターン目", action: "以降は1~10をループします。" },
                ]
                getTableBody();
            }

            else if(difficultyNum>90&&difficultyNum<=120){
                actions=[
                    { turn: "1ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "3ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "4ターン目", action: "単体攻撃" },
                    { turn: "5ターン目", action: "DP回復"},
                    { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "8ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "9ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "10ターン目", action: "DP回復"},
                    { turn: "00ターン目", action: "以降は1~10をループします。" },
                ];
                brokeActions=[
                    { turn: "1ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "2ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "3ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "4ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                    { turn: "6ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "7ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "8ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "9ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "10ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "00ターン目", action: "以降は1~10をループします。" },
                ]
                getTableBody();
            }

            else if(difficultyNum>120&&difficultyNum<=140){
                actions=[
                    { turn: "1ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "3ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                    { turn: "4ターン目", action: "単体攻撃" },
                    { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                    { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "8ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                    { turn: "9ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "10ターン目", action: "Snipe Stamp(単体強攻撃)"},
                    { turn: "00ターン目", action: "以降は1~10をループします。" },
                ];
                brokeActions=[
                    { turn: "1ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "2ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                    { turn: "3ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "4ターン目", action: "Rage Wave(全体攻撃)" },
                    { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                    { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                    { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                    { turn: "8ターン目", action: "単体攻撃" },
                    { turn: "00ターン目", action: "以降は1~8をループします。" },
                ]
                getTableBody();
            }
            else{
                alert("該当キャラが存在しません。");
                document.getElementById("action-table").style.display = "none";
                document.getElementById("brokeAction-table").style.display = "none";
            }
        }

       addColor();
    })

    calculateGrade();





    //関数一覧
    //グレードが発動するターンと見出しと00ターン目を着色
    function addColor(){
        const tableRows=document.getElementById("table-body").getElementsByTagName("tr");
        const activationGrade=parseFloat(document.getElementById("activation").value);//変数が重複しています。
        if(!Number.isNaN(activationGrade)){
        for(let i=1;i<tableRows.length;i++){
        if(i*activationGrade>=tableRows.length){
            break;
        }
       tableRows[i*activationGrade-1].style.backgroundColor="#ffa07a";
        }
        }
        else{
            alert("該当キャラが存在しません。");
            document.getElementById("action-table").style.display = "none";
            document.getElementById("brokeAction-table").style.display = "none";
        }
    }
    //ブレイク後のグレードを計算
    function calculateGrade(){
        const brokeTableRows=document.getElementById("brokeTable-body").getElementsByTagName("tr");
        document.getElementById("break-turn-button").addEventListener("click",()=>{
        const breakTurn=parseFloat(document.getElementById("break-turn").value);
        const activationGrade=parseFloat(document.getElementById("activation").value);
        if(!Number.isNaN(breakTurn)){
            for(let i=0;i<brokeTableRows.length-1;i++){
                brokeTableRows[i].style.backgroundColor="initial";
            }
            for(let i=0;i<brokeTableRows.length-1;i++){
                let j=2*i;
                if(j>=brokeTableRows.length-1){
                    break;
                }
                brokeTableRows[2*i].style.backgroundColor="#eee";
            }

            const targetIndex=activationGrade-1-(Math.floor(breakTurn)%activationGrade);
            brokeTableRows[targetIndex].style.backgroundColor="#ffa07a";
            for(let i=1;i<brokeTableRows.length;i++){
                if(targetIndex+i*activationGrade>=brokeTableRows.length-1){
                    break;
                }
                brokeTableRows[targetIndex+i*activationGrade].style.backgroundColor="#ffa07a";
                
            }
            
        }
        else{
            alert("有効な数値を入力してください。");
        }
    });

    }
//tableBodyを取得するプログラム
    function getTableBody(){
        const tableBody=document.getElementById("table-body");
        tableBody.innerHTML="";
        tableBody.appendChild(createTable(actions));

        const brokeTableBody=document.getElementById("brokeTable-body");
        brokeTableBody.innerHTML="";
        brokeTableBody.appendChild(createTable(brokeActions));

        document.getElementById("action-table").style.display = "table";
        document.getElementById("brokeAction-table").style.display = "table";
    }

     //テーブルを表示するプログラム
     function createTable(actions) {
        const fragment = document.createDocumentFragment(); 
    
        actions.forEach(element => {
            const row = document.createElement("tr");
            const turnCell = document.createElement("td");
            const actionCell = document.createElement("td");
    
            turnCell.textContent = element.turn;
            actionCell.textContent = element.action;
    
            row.appendChild(turnCell);
            row.appendChild(actionCell);
    
            fragment.appendChild(row); 
        });
    
        return fragment; // forEachで作ったものを一度に渡す
    }
}