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

let choiceMode = 'all';

function toggleChoiceMode() {
  const btn = document.getElementById('mode-toggle-btn');
  if (choiceMode === 'all') {
    choiceMode = 'org';
    btn.innerText = '選択肢：所属優先';
    btn.style.color = '#ff4444';
  } else {
    choiceMode = 'all';
    btn.innerText = '選択肢：全ランダム';
    btn.style.color = '#888';
  }
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

// 確認モード開始時も先読みする
function startCheckMode() {
  currentDifficulty = 'check';
  document.getElementById('title-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  document.getElementById('back-to-title-btn').classList.remove('hidden');
  document.getElementById('org-jump-btn').classList.remove('hidden');

  quizSet = charData; // 全人格データ
  currentQuizIndex = 0;

  // --- 追加：データ確認モードの画像も先読み（最初の数件だけでもOKですが、ここでは全体） ---
  preloadQuizImages(quizSet); // とりあえず最初の10件を先読み

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
    // クイズモード（1問ずつバラのデータ）の場合
    if (item.fileName) {
      const img = new Image();
      img.src = `skill/${item.fileName}`;
    }
    // 確認モード（人格データごと）の場合
    else if (item.skills) {
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
    char.skills.forEach((skill) => {
      allSkills.push({ charObj: char, skillName: skill.name, fileName: skill.file });
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

    generateChoices(current.charObj);
  }
}

function generateChoices(correctChar) {
  const choicesArea = document.getElementById('choices-area');
  choicesArea.innerHTML = '';
  let wrongChoices = [];
  if (choiceMode === 'org') {
    let sameOrgChars = charData.filter((c) => c.org === correctChar.org && c.name !== correctChar.name);
    let diffOrgChars = charData.filter((c) => c.org !== correctChar.org && c.name !== correctChar.name);
    wrongChoices = [
      ...sameOrgChars.sort(() => Math.random() - 0.5),
      ...diffOrgChars.sort(() => Math.random() - 0.5)
    ].slice(0, 3);
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
  document.getElementById('score-text').innerText = `${TOTAL_QUESTIONS}問中 ${score}問正解！`;

  const reviewArea = document.getElementById('review-area');
  reviewArea.innerHTML = '';

  gameLog.forEach((log, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.borderLeft = log.isCorrect ? '5px solid #2e7d32' : '5px solid #c62828';

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
