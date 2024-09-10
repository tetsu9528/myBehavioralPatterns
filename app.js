const suggestionsBox = document.getElementById("suggestions");
const searchBar = document.getElementById("search-bar");

const suggestions = ["フローシェスノッカー"]; // 予測候補を追加

// ひらがなをカタカナに変換する関数
function hiraganaToKatakana(input) {
    return input.replace(/[\u3041-\u3096]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
}

searchBar.addEventListener("input", function() {
    const input = searchBar.value;
    const katakanaInput = hiraganaToKatakana(input); // 入力をカタカナに変換
    suggestionsBox.innerHTML = "";  // 前回の候補をクリア

    if (katakanaInput) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.startsWith(katakanaInput)
        );
        
        if (filteredSuggestions.length > 0) {
            suggestionsBox.style.display = "block";
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement("div");
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener("click", function() {
                    searchBar.value = suggestion;
                    suggestionsBox.style.display = "none";
                });
                suggestionsBox.appendChild(suggestionItem);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
});

document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = hiraganaToKatakana(searchBar.value); // 検索時にもカタカナに変換
    
    if (searchTerm === "フローシェスノッカー") {
        const actions = [
            { turn: "1ターン目", action: "Rage Wave(全体攻撃)" },
            { turn: "2ターン目", action: "Snipe Stamp(単体強攻撃)" },
            { turn: "3ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
            { turn: "4ターン目", action: "単体攻撃" },
            { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)", grade: true },
            { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
            { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
            { turn: "8ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
            { turn: "9ターン目", action: "Rage Wave(全体攻撃)" },
            { turn: "10ターン目", action: "Snipe Stamp(単体強攻撃)", grade: true }
        ];

        const actions2 = [
            { turn: "1ターン目", action: "Snipe Stamp(単体強攻撃)" },
            { turn: "2ターン目", action: "Double Clash(全体攻撃+攻撃デバフ1ターン)" },
            { turn: "3ターン目", action: "Snipe Stamp(単体強攻撃)" },
            { turn: "4ターン目", action: "Rage Wave(全体攻撃)" },
            { turn: "5ターン目", action: "Snipe Stamp(単体強攻撃)", grade: true },
            { turn: "6ターン目", action: "Double Smash(全体攻撃+混乱1ターン)" },
            { turn: "7ターン目", action: "Snipe Stamp(単体強攻撃)" },
            { turn: "8ターン目", action: "単体攻撃" },
            { turn: "00ターン目", action: "以降は1~8をループします。" },
        ];

        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";  // 既存のデータをクリア
        actions.forEach(action => {
            const row = document.createElement("tr");
            const turnCell = document.createElement("td");
            const actionCell = document.createElement("td");

            turnCell.textContent = action.turn;
            actionCell.textContent = action.action;

            row.appendChild(turnCell);
            row.appendChild(actionCell);
            tableBody.appendChild(row);
        });

        const tableBody2 = document.getElementById("table-body2");
        tableBody2.innerHTML = "";  // 既存のデータをクリア
        actions2.forEach(action2 => {
            const row = document.createElement("tr");
            const turnCell = document.createElement("td");
            const actionCell = document.createElement("td");

            turnCell.textContent = action2.turn;
            actionCell.textContent = action2.action;

            row.appendChild(turnCell);
            row.appendChild(actionCell);
            tableBody2.appendChild(row);
        });

        document.getElementById("action-table").style.display = "table";
        document.getElementById("action-table2").style.display = "table";
    } else {
        alert("該当キャラが存在しません。");
        document.getElementById("action-table").style.display = "none";
    }
});

document.getElementById("break-turn-button").addEventListener("click", function() {
    const breakTurn = parseFloat(document.getElementById("break-turn").value);
    const tableRows = document.getElementById("table-body2").getElementsByTagName("tr");

    if (!isNaN(breakTurn)) {
        // 全てのtrの背景色をリセット
        for (let i = 0; i < tableRows.length; i++) {
            tableRows[i].style.backgroundColor = "initial"; // 背景色をデフォルトに戻す
        }
        for(let i=0;i<tableRows.length;i++){
            let j=2*i;
            if(j>=tableRows.length){
                break;
            }
            tableRows[2*i].style.backgroundColor="#eee";
        }
       
        // あまりを計算してそのあまりに5を足す
        const targetIndex = 4-(Math.floor(breakTurn) % 5);

        // その位置にあるtrの背景色を赤にする
        if (targetIndex < tableRows.length) {
            tableRows[targetIndex].style.backgroundColor = "#ffa07a";
            if(targetIndex<4){
                tableRows[targetIndex+4].style.backgroundColor = "#ffa07a";
            }
        } else {
            alert("指定されたターンは範囲外です。");
        }
    } else {
        alert("有効な数値を入力してください。");
    }
});
