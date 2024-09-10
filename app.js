"use-strict";
{
    const suggestionsBox=document.getElementById("suggestions");
    const searchBar=document.getElementById("search-bar");

    const suggestions=["フローシェスノッカー"];

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

        if(searchTerm==="フローシェスノッカー"){
            const actions=[
                { turn: "1ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "3ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                { turn: "4ターン目", action: "単体攻撃" },
                { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "8ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                { turn: "9ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "10ターン目", action: "Snipe Stamp(単体強攻撃)"}
            ];

            const brokeActions=[
                { turn: "1ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "2ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
                { turn: "3ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "4ターン目", action: "Rage Wave(全体攻撃)" },
                { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)"},
                { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
                { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
                { turn: "8ターン目", action: "単体攻撃" },
                { turn: "00ターン目", action: "以降は1~8をループします。" },
            ];

            const tableBody=document.getElementById("table-body");
            tableBody.innerHTML="";
            tableBody.appendChild(createTable(actions));

            const brokeTableBody=document.getElementById("brokeTable-body");
            brokeTableBody.innerHTML="";
            brokeTableBody.appendChild(createTable(brokeActions));

            document.getElementById("action-table").style.display = "table";
            document.getElementById("brokeAction-table").style.display = "table";
            
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
        else{
            alert("該当キャラが存在しません。");
            document.getElementById("action-table").style.display = "none";
        }
    })

    //ブレイク後のグレードを計算
    document.getElementById("break-turn-button").addEventListener("click",()=>{
        const breakTurn=parseFloat(document.getElementById("break-turn").value);
        const tableRows=document.getElementById("brokeTable-body").getElementsByTagName("tr");
        const activationGrade=parseFloat(document.getElementById("activation").value);


        if(!Number.isNaN(breakTurn)){
            for(let i=0;i<tableRows.length;i++){
                tableRows[i].style.backgroundColor="initial";
            }
            for(let i=0;i<tableRows.length;i++){
                let j=2*i;
                if(j>=tableRows.length){
                    break;
                }
                tableRows[2*i].style.backgroundColor="#eee";
            }

            const targetIndex=activationGrade-1-(Math.floor(breakTurn)%activationGrade);
            tableRows[targetIndex].style.backgroundColor="#ffa07a";
            console.log(tableRows.length);
            for(let i=1;i<tableRows.length;i++){
                if(targetIndex+i*activationGrade>=tableRows.length-1){
                    break;
                }
                tableRows[targetIndex+i*activationGrade].style.backgroundColor="#ffa07a";
                
            }
            
        }
        else{
            alert("有効な数値を入力してください。");
        }
    });
}