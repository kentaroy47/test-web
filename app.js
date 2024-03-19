document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const entriesDiv = document.getElementById('entries');

    // アクセスカウンターの初期化と表示
    initAccessCounter();

    // テスト記事の表示
    createTestEntries();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const date = document.getElementById('date').value;
        const entry = document.getElementById('entry').value;

        const entryDiv = createEntryElement(date, entry);
        entriesDiv.appendChild(entryDiv);

        form.reset();
    });

    // 記事の作成
    function createEntryElement(date, entry) {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <h3>${date}</h3>
            <p>${entry}</p>
            <div class="actions">
                <button class="edit-btn">編集</button>
                <button class="delete-btn">削除</button>
            </div>
        `;

        const editBtn = entryDiv.querySelector('.edit-btn');
        const deleteBtn = entryDiv.querySelector('.delete-btn');

        editBtn.addEventListener('click', function () {
            editEntry(entryDiv, date, entry);
        });

        deleteBtn.addEventListener('click', function () {
            deleteEntry(entryDiv);
        });

        return entryDiv;
    }

    // 記事の編集
    function editEntry(entryDiv, date, entry) {
        const newEntry = prompt('エントリーを編集:', entry);
        if (newEntry !== null) {
            entryDiv.querySelector('p').textContent = newEntry;
        }
    }

    // 記事の削除
    function deleteEntry(entryDiv) {
        if (confirm('本当に削除しますか？')) {
            entryDiv.remove();
        }
    }

    // テスト記事の作成
    function createTestEntries() {
        const testEntries = [
            { date: '2023-03-10', entry: 'サイバーパンクな一日だった。ネオンに彩られた街を散策し、ハッカーたちと情報を交換した。' },
            { date: '2023-03-11', entry: '新しいサイバーウェアを手に入れた。能力が大幅に向上するはずだ。明日からの任務が楽しみだ。' },
            { date: '2023-03-12', entry: 'サイバー空間での出会い。彼女は強力なAIプログラムを開発していると言っていた。協力できそうだ。' },
        ];

        testEntries.forEach(function (testEntry) {
            const entryDiv = createEntryElement(testEntry.date, testEntry.entry);
            entriesDiv.appendChild(entryDiv);
        });
    }
});

// アクセスカウンターの初期化と表示
function initAccessCounter() {
    const countSpan = document.getElementById('count');
    let count = localStorage.getItem('accessCount');

    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }

    count++;
    localStorage.setItem('accessCount', count);
    countSpan.textContent = count;
}