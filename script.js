let currentQuizIndex = 0;

let score = 0;

let quizSet = [];

const TOTAL_QUESTIONS = 6;

let gameLog = [];

let currentDifficulty = 'easy';

let isProcessing = false;

const charIdColors = {
  '01': '#d4e1e8',

  '02': '#ffb1b4',

  '03': '#ffef23',

  '04': '#cf0000',

  '05': '#293b95',

  '06': '#5bffde',

  '07': '#4e3076',

  '08': '#ff9500',

  '09': '#820000',

  11: '#8b9c15',

  12: '#325339',

  13: '#69350b'
};

let choiceMode = 'sin';

function toggleChoiceMode() {
  const btn = document.getElementById('mode-toggle-btn');

  if (choiceMode === 'sin') {
    choiceMode = 'org';

    btn.innerText = '選択肢：所属優先';
  } else if (choiceMode === 'org') {
    choiceMode = 'all';

    btn.innerText = '選択肢：全ランダム';
  } else {
    choiceMode = 'sin';

    btn.innerText = '選択肢：属性優先';
  }

  btn.style.color = '#888';
}

function toggleOrgMenu() {
  const overlay = document.getElementById('org-menu-overlay');

  overlay.classList.toggle('hidden');

  if (!overlay.classList.contains('hidden')) {
    setupOrgMenu(); // メニューを開くたびに再構築して確実性を高める
  }
}

function setupOrgMenu() {
  const orgList = document.getElementById('org-list');

  orgList.innerHTML = '';

  // charDataから重複なく所属を抽出

  const orgs = [...new Set(charData.map((c) => c.org))];

  orgs.forEach((orgName) => {
    const btn = document.createElement('button');

    btn.style.width = '100%';

    btn.style.margin = '5px 0';

    btn.style.padding = '10px';

    btn.style.background = '#2a2a2a';

    btn.style.color = '#fff';

    btn.style.border = '1px solid #444';

    btn.innerText = orgName;

    btn.onclick = (e) => {
      e.stopPropagation(); // 親の閉じイベントを防止

      const index = charData.findIndex((c) => c.org === orgName);

      if (index !== -1) {
        currentQuizIndex = index;

        showQuestion();

        toggleOrgMenu();
      }
    };

    orgList.appendChild(btn);
  });
}

function startCheckMode() {
  currentDifficulty = 'check';

  document.getElementById('title-screen').classList.add('hidden');

  document.getElementById('quiz-screen').classList.remove('hidden');

  document.getElementById('back-to-title-btn').classList.remove('hidden');

  document.getElementById('org-jump-btn').classList.remove('hidden');

  quizSet = charData;

  currentQuizIndex = 0;

  preloadQuizImages(quizSet);

  setupOrgMenu();

  showQuestion();
}

function nextCheck() {
  currentQuizIndex = (currentQuizIndex + 1) % quizSet.length;

  showQuestion();
}

function prevCheck() {
  currentQuizIndex = (currentQuizIndex - 1 + quizSet.length) % quizSet.length;

  showQuestion();
}

function startGame(mode) {
  currentDifficulty = mode;

  document.getElementById('title-screen').classList.add('hidden');

  document.getElementById('quiz-screen').classList.remove('hidden');

  document.getElementById('back-to-title-btn').classList.remove('hidden');

  document.getElementById('org-jump-btn').classList.add('hidden');

  initGame();
}

function backToTitle() {
  location.reload();
}

function preloadQuizImages(set) {
  set.forEach((item) => {
    if (item.fileName) {
      new Image().src = `skill/${item.fileName}`;
    } else if (item.skills) {
      item.skills.forEach((s) => {
        new Image().src = `skill/${s.file}`;
      });
    }
  });
}

function initGame() {
  let allSkills = [];

  charData.forEach((char) => {
    char.skills.forEach((skill, index) => {
      allSkills.push({
        charObj: char,

        skillName: skill.name,

        fileName: skill.file,

        sin: skill.sin,

        skillSlot: index
      });
    });
  });

  quizSet = allSkills.sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);

  preloadQuizImages(quizSet);

  showQuestion();
}

function showQuestion() {
  isProcessing = false;
  const current = quizSet[currentQuizIndex];
  const standardArea = document.getElementById('quiz-standard-area');
  const checkArea = document.getElementById('check-mode-area');
  const choicesArea = document.getElementById('choices-area');
  const inputArea = document.getElementById('input-area');
  const qNum = document.getElementById('question-number');
  const mask = document.getElementById('skill-mask');
  const skillText = document.getElementById('skill-text'); // 追加

  if (currentDifficulty === 'check') {
    standardArea.classList.add('hidden');

    checkArea.classList.remove('hidden');

    choicesArea.innerHTML = '';

    qNum.innerText = `人格確認: ${currentQuizIndex + 1} / ${quizSet.length}`;

    let skillsHtml = `<div class="check-grid">`;

    current.skills.forEach((s) => {
      skillsHtml += `<div class="check-item"><img src="skill/${s.file}" alt=""><p class="check-skill-name">${s.name}</p></div>`;
    });

    skillsHtml += `</div>`;

    checkArea.innerHTML = `

      ${skillsHtml}

      <div class="check-footer">

        <p class="answer-label" style="font-size:0.8em; color:#888;">正解の人格</p>

        <p class="answer-name">${current.name}</p>

        <div class="check-controls">

          <button class="btn-prev-check" onclick="prevCheck()">← 前へ</button>

          <button class="btn-next-check" onclick="nextCheck()">次へ →</button>

        </div>

      </div>`;
  } else {
    standardArea.classList.remove('hidden');
    checkArea.classList.add('hidden');
    qNum.innerText = `第 ${currentQuizIndex + 1} 問 / 全 ${TOTAL_QUESTIONS} 問`;

    // Easyの時だけ表示されるスキル名テキストの設定
    document.getElementById('skill-name').innerText = current.skillName;
    if (currentDifficulty === 'easy') {
      skillText.classList.remove('invisible');
    } else {
      skillText.classList.add('invisible');
    }

    const img = document.getElementById('skill-image');
    img.src = `skill/${current.fileName}`;

    // ★修正：veryhardの時はぼかし(hard-effect)を付けない
    if (currentDifficulty === 'hard') {
      img.classList.add('hard-effect');
      mask.classList.remove('hidden');
    } else {
      img.classList.remove('hard-effect');
      mask.classList.add('hidden');
    }

    // ★修正：veryhard（旧lunatic）の入力エリア表示
    if (currentDifficulty === 'veryhard') {
      choicesArea.classList.add('hidden');
      inputArea.classList.remove('hidden');
      const inputField = document.getElementById('answer-input');
      inputField.value = '';
      inputField.placeholder = 'スキル名を正確に入力'; // プレースホルダー変更
      inputField.focus();
    } else {
      choicesArea.classList.remove('hidden');
      inputArea.classList.add('hidden');
      generateChoices(current);
    }
  }
}

function generateChoices(currentQuestion) {
  const correctChar = currentQuestion.charObj;

  const targetSin = currentQuestion.sin;

  const targetSlot = currentQuestion.skillSlot;

  const choicesArea = document.getElementById('choices-area');

  choicesArea.innerHTML = '';

  let wrongChoices = [];

  if (choiceMode === 'sin') {
    let tier1 = charData.filter(
      (c) => c.name !== correctChar.name && c.skills[targetSlot] && c.skills[targetSlot].sin === targetSin
    );

    let tier2 = charData.filter(
      (c) => c.name !== correctChar.name && !tier1.includes(c) && c.skills.some((s) => s.sin === targetSin)
    );

    let tier3 = charData.filter((c) => c.name !== correctChar.name && !tier1.includes(c) && !tier2.includes(c));

    wrongChoices = [
      ...tier1.sort(() => Math.random() - 0.5),

      ...tier2.sort(() => Math.random() - 0.5),

      ...tier3.sort(() => Math.random() - 0.5)
    ].slice(0, 3);
  } else if (choiceMode === 'org') {
    let sameOrg = charData.filter((c) => c.org === correctChar.org && c.name !== correctChar.name);

    let diffOrg = charData.filter((c) => c.org !== correctChar.org && c.name !== correctChar.name);

    wrongChoices = [...sameOrg.sort(() => Math.random() - 0.5), ...diffOrg.sort(() => Math.random() - 0.5)].slice(0, 3);
  } else {
    wrongChoices = charData

      .filter((c) => c.name !== correctChar.name)

      .sort(() => Math.random() - 0.5)

      .slice(0, 3);
  }

  let finalChoices = [correctChar, ...wrongChoices].sort(() => Math.random() - 0.5);

  finalChoices.forEach((char) => {
    const btn = document.createElement('button');

    btn.innerText = char.name;

    btn.style.setProperty('--char-color', charIdColors[char.id] || '#8b0000');

    btn.onclick = () => checkAnswer(btn, char.name, correctChar.name);

    choicesArea.appendChild(btn);
  });
}

function checkTextAnswer() {
  if (isProcessing) return;
  const input = document.getElementById('answer-input').value.trim();

  // ★修正：veryhardの場合はスキル名、それ以外は人格名と比較
  const current = quizSet[currentQuizIndex];
  const correctAnswer = currentDifficulty === 'veryhard' ? current.skillName : current.charObj.name;

  checkAnswer(null, input, correctAnswer);
}
function checkAnswer(clickedBtn, selected, correct) {
  if (isProcessing) return;
  isProcessing = true;
  const isCorrect = selected === correct;
  if (isCorrect) score++;

  gameLog.push({
    skill: currentDifficulty === 'veryhard' ? '画像から推測' : quizSet[currentQuizIndex].skillName,
    correct: correct,
    selected: selected || '(未入力)',
    isCorrect: isCorrect
  });

  if (clickedBtn) {
    document.querySelectorAll('#choices-area button').forEach((btn) => {
      btn.classList.add('dimmed-choice');

      if (btn.innerText === correct) {
        btn.classList.remove('dimmed-choice');

        btn.classList.add('correct-choice');
      }

      if (btn === clickedBtn && !isCorrect) {
        btn.classList.remove('dimmed-choice');

        btn.classList.add('wrong-choice');
      }
    });
  }

  setTimeout(() => {
    currentQuizIndex++;

    if (currentQuizIndex < TOTAL_QUESTIONS) showQuestion();
    else showResult();
  }, 1200);
}

function showResult() {
  document.getElementById('quiz-screen').classList.add('hidden');

  document.getElementById('back-to-title-btn').classList.add('hidden');

  document.getElementById('result-screen').classList.remove('hidden');

  const diffSet = {
    easy: { label: 'Easy', color: '#4caf50' },

    normal: { label: 'Normal', color: '#ffb74d' },

    hard: { label: 'Hard', color: '#f44336' },

    veryhard: { label: 'Very Hard', color: '#ba68c8' }
  };

  const setting = diffSet[currentDifficulty] || { label: 'Unknown', color: '#fff' };

  document.getElementById('score-text').innerHTML = `

    <div style="margin-bottom:10px;">難易度: <span style="color:${setting.color}; font-weight:bold;">${setting.label}</span></div>

    <div>${TOTAL_QUESTIONS}問中 ${score}問正解！</div>`;

  const reviewArea = document.getElementById('review-area');

  reviewArea.innerHTML = '';

  gameLog.forEach((log, i) => {
    const card = document.createElement('div');

    card.className = 'review-card';

    card.style.borderLeft = log.isCorrect ? `5px solid #2e7d32` : `5px solid #c62828`;

    card.innerHTML = `

      <div style="font-size:0.9em; color:#ffd700; margin-bottom:5px;">${i + 1}. スキル：${log.skill} ${
      log.isCorrect ? '○' : '×'
    }</div>

      <div style="font-size:0.85em; color:#888;">回答: <span style="color:${log.isCorrect ? '#81c784' : '#e57373'}">${
      log.selected
    }</span></div>

      ${
        !log.isCorrect
          ? `<div style="font-size:0.85em; color:#888;">正解: <span style="color:#81c784">${log.correct}</span></div>`
          : ''
      }`;

    reviewArea.appendChild(card);
  });
}
