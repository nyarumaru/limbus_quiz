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
  // 全モード共通の色
  btn.style.color = '#888';
}

function setupOrgMenu() {
  const orgList = document.getElementById('org-list');
  orgList.innerHTML = '';
  const orgs = [...new Set(charData.map((c) => c.org))];

  orgs.forEach((orgName) => {
    const btn = document.createElement('button');
    btn.innerText = orgName;
    btn.onclick = () => {
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

function toggleOrgMenu() {
  document.getElementById('org-menu-overlay').classList.toggle('hidden');
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
      const img = new Image();
      img.src = `skill/${item.fileName}`;
    } else if (item.skills) {
      item.skills.forEach((s) => {
        const img = new Image();
        img.src = `skill/${s.file}`;
      });
    }
  });
}

function initGame() {
  let allSkills = [];
  charData.forEach((char) => {
    // スロット（S1, S2, S3）を判別するために index を取得
    char.skills.forEach((skill, index) => {
      allSkills.push({
        charObj: char,
        skillName: skill.name,
        fileName: skill.file,
        sin: skill.sin,
        skillSlot: index // 0:S1, 1:S2, 2:S3
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
  const qNum = document.getElementById('question-number');

  if (currentDifficulty === 'check') {
    standardArea.classList.add('hidden');
    checkArea.classList.remove('hidden');
    choicesArea.innerHTML = '';
    qNum.innerText = `人格確認: ${currentQuizIndex + 1} / ${quizSet.length}`;

    let skillsHtml = `<div class="check-grid">`;
    current.skills.forEach((s) => {
      skillsHtml += `
        <div class="check-item">
          <img src="skill/${s.file}" alt="">
          <p class="check-skill-name">${s.name}</p>
        </div>`;
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
      </div>
    `;
  } else {
    standardArea.classList.remove('hidden');
    checkArea.classList.add('hidden');
    qNum.innerText = `第 ${currentQuizIndex + 1} 問 / 全 ${TOTAL_QUESTIONS} 問`;
    document.getElementById('skill-name').innerText = current.skillName;
    const img = document.getElementById('skill-image');
    img.src = `skill/${current.fileName}`;

    if (currentDifficulty === 'hard') img.classList.add('hard-effect');
    else img.classList.remove('hard-effect');

    if (currentDifficulty === 'easy') document.getElementById('skill-text').classList.remove('invisible');
    else document.getElementById('skill-text').classList.add('invisible');

    generateChoices(current);
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
    // 優先度1：同じスロット（S1/S2/S3）に同じ色を持っている人格
    let tier1 = charData.filter(
      (c) => c.name !== correctChar.name && c.skills[targetSlot] && c.skills[targetSlot].sin === targetSin
    );

    // 優先度2：スロットは違うが、どこかに同じ色を持っている人格
    let tier2 = charData.filter(
      (c) => c.name !== correctChar.name && !tier1.includes(c) && c.skills.some((s) => s.sin === targetSin)
    );

    // 優先度3：それ以外（ランダム補填）
    let tier3 = charData.filter((c) => c.name !== correctChar.name && !tier1.includes(c) && !tier2.includes(c));

    // まとめて上位3つを取得
    wrongChoices = [
      ...tier1.sort(() => Math.random() - 0.5),
      ...tier2.sort(() => Math.random() - 0.5),
      ...tier3.sort(() => Math.random() - 0.5)
    ].slice(0, 3);
  } else if (choiceMode === 'org') {
    // 所属優先
    let sameOrgChars = charData.filter((c) => c.org === correctChar.org && c.name !== correctChar.name);
    let diffOrgChars = charData.filter((c) => c.org !== correctChar.org && c.name !== correctChar.name);
    wrongChoices = [
      ...sameOrgChars.sort(() => Math.random() - 0.5),
      ...diffOrgChars.sort(() => Math.random() - 0.5)
    ].slice(0, 3);
  } else {
    // 全ランダム
    wrongChoices = charData
      .filter((c) => c.name !== correctChar.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }

  let finalChoices = [correctChar, ...wrongChoices].sort(() => Math.random() - 0.5);
  finalChoices.forEach((char) => {
    const btn = document.createElement('button');
    btn.innerText = char.name;
    const charColor = charIdColors[char.id] || '#8b0000';
    btn.style.setProperty('--char-color', charColor);
    btn.onclick = () => checkAnswer(btn, char.name, correctChar.name);
    choicesArea.appendChild(btn);
  });
}

function checkAnswer(clickedBtn, selected, correct) {
  if (isProcessing) return;
  isProcessing = true;

  const isCorrect = selected === correct;
  if (isCorrect) score++;

  gameLog.push({
    skill: quizSet[currentQuizIndex].skillName,
    correct: correct,
    selected: selected,
    isCorrect: isCorrect
  });

  const allBtns = document.querySelectorAll('#choices-area button');
  allBtns.forEach((btn) => {
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

  const diffSettings = {
    easy: { label: 'Easy', color: '#4caf50' },
    normal: { label: 'Normal', color: '#2196f3' },
    hard: { label: 'Hard', color: '#f44336' }
  };

  const setting = diffSettings[currentDifficulty] || { label: 'Unknown', color: '#ffffff' };

  document.getElementById('score-text').innerHTML = `
    <div style="margin-bottom: 10px;">
      難易度: <span style="color: ${setting.color}; font-weight: bold; font-size: 1.2em;">${setting.label}</span>
    </div>
    <div>${TOTAL_QUESTIONS}問中 ${score}問正解！</div>
  `;

  const reviewArea = document.getElementById('review-area');
  reviewArea.innerHTML = '';

  gameLog.forEach((log, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.borderLeft = log.isCorrect ? `5px solid #2e7d32` : `5px solid #c62828`;

    card.innerHTML = `
      <div style="font-size:0.9em; color:#ffd700; margin-bottom:5px;">
        ${i + 1}. スキル：${log.skill} ${log.isCorrect ? '○' : '×'}
      </div>
      <div style="display:flex; flex-direction:column; gap:2px; font-size:0.85em;">
        <div><span style="color:#888;">選んだ回答:</span> <span style="${
          log.isCorrect ? 'color:#81c784' : 'color:#e57373'
        }">${log.selected}</span></div>
        ${
          !log.isCorrect
            ? `<div><span style="color:#888;">正解の人格:</span> <span style="color:#81c784">${log.correct}</span></div>`
            : ''
        }
      </div>
    `;
    reviewArea.appendChild(card);
  });
}
