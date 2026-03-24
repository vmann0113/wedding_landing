// partners.js
const expoData = {
    getKstTargetDate: function() {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const kstNow = new Date(utc + (9 * 60 * 60 * 1000));
        const targetDate = new Date(kstNow);
        targetDate.setDate(kstNow.getDate() + 30);
        targetDate.setHours(0, 0, 0, 0);
        return targetDate.getTime();
    },
    partners: [
        { 
            name: "아뜰리에 로리에", 
            category: "DRESS", 
            img: "https://images.unsplash.com/photo-1594462254593-37609204859a?q=80&w=600", 
            desc: "실크 드레스의 정수", 
            tags: ["#실크", "#청담", "#본식드레스"] // [해시태그 부활!]
        },
        { 
            name: "그랜드 모먼트", 
            category: "HALL", 
            img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600", 
            desc: "단독홀 특별 할인", 
            tags: ["#단독홀", "#부산웨딩", "#대관료할인"]
        },
        { 
            name: "D102", 
            category: "JEWELRY", 
            img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600", 
            desc: "맞춤 예물 상담", 
            tags: ["#예물", "#커플링", "#다이아몬드"]
        }
    ]
};