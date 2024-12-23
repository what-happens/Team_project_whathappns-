// src/utils/quizUtils.js

/**
 * 배열의 요소를 랜덤하게 섞는 함수
 * @param {Array} arr - 섞고자 하는 배열
 * @returns {Array} - 섞인 배열
 */
export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 퀴즈 데이터의 답안을 섞는 함수
 * @param {Array} quizData - 원본 퀴즈 데이터
 * @returns {Array} - 답안이 섞인 퀴즈 데이터
 */
export function processQuizData(quizData) {
  return quizData.map((quiz) => ({
    ...quiz,
    answers: shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]),
  }));
}
