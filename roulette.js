// 1. 혜택 리스트와 확률(가중치) 설정
// [주의] 확률의 총합이 100이 되도록 설정해주세요.
const prizes = [
    { name: "스드메10%할인", weight: 10 },        // 10% 확률
    { name: "혼주한복10%할인", weight: 20 },      // 20% 확률
    { name: "맞춤예복10%할인", weight: 20 },      // 20% 확률
    { name: "뷔페무료시식권", weight: 5 },        // 5% 확률 (제일 낮음)
    { name: "주얼리10%할인", weight: 15 },       // 15% 확률
    { name: "웨딩다이어리증정", weight: 30 }      // 30% 확률 (제일 높음)
];

let isSpinning = false;

function spinRoulette() {
    if (isSpinning) return;
    isSpinning = true;

    const rouletteImg = document.getElementById("roulette-img");
    
    // 2. 가중치 기반 당첨자 미리 뽑기
    let totalWeight = prizes.reduce((sum, p) => sum + p.weight, 0);
    let randomNum = Math.random() * totalWeight;
    let accumulatedWeight = 0;
    let selectedIndex = 0;

    for (let i = 0; i < prizes.length; i++) {
        accumulatedWeight += prizes[i].weight;
        if (randomNum <= accumulatedWeight) {
            selectedIndex = i;
            break;
        }
    }

    // 3. 당첨된 칸의 각도 계산 (대표님의 -30~30도 로직 반영)
    // 인덱스 0번(스드메)이 0도 위치이므로, 당첨된 칸이 12시로 오려면 (360 - (인덱스 * 60))
    const oneSlice = 360 / prizes.length; // 60도
    const targetAngle = (360 - (selectedIndex * oneSlice)) % 360;
    
    // 4. 자연스러움을 위해 해당 칸 안에서 랜덤하게 멈추도록 미세 조정 (-25도 ~ +25도)
    const padding = (Math.random() * 50) - 25; 
    const finalRotate = 3600 + targetAngle + padding; // 10바퀴 + 목표각도 + 미세조정

    // 5. 애니메이션 실행
    rouletteImg.style.transform = "scale(0.97)";
    
    setTimeout(() => {
        rouletteImg.style.transform = `scale(1) rotate(${finalRotate}deg)`;

        setTimeout(() => {
            const won = prizes[selectedIndex].name;
            
            alert(`🎊 축하합니다! [${won}] 당첨!`);
            
            document.getElementById('roulette-overlay').style.display = "none";
            const wonField = document.getElementById('wonPrizeField');
            if (wonField) {
                wonField.value = won;
                document.getElementById('prize-wrap').style.display = "block";
            }
            
            const applySection = document.getElementById('apply');
            if (applySection) {
                applySection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 4000); 
    }, 100);
}