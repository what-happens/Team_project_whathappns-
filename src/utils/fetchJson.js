/**
 *
 * @param {number} : stageId : 스테이지 아이디
 * @param {number} : levelId : 레벨 아이디
 * @param {'level' | 'learn'} : type : 데이터의 불러오는 타입
 */
export const fetchJson = async (stageId, levelId, type) => {
  try {
    const json = await import(`../data/stage${stageId}/${type}${levelId}.json`); //절대경로 알아보기
    return json;
  } catch (error) {
    console.error(error);
  }
};
