function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function startMathQuiz() {
    const content = document.getElementById("activity-content");
    content.innerHTML = "<h3>مسابقة الرياضيات</h3><p>سؤال: ما حاصل ضرب 7 × 8؟</p>";
}

function viewPhysicsSim() {
    const content = document.getElementById("activity-content");
    content.innerHTML = "<h3>تجارب الفيزياء</h3><p>قم بتشغيل المحاكاة لمشاهدة تجربة الضوء.</p>";
}

function startCodingGame() {
    const content = document.getElementById("activity-content");
    content.innerHTML = "<h3>لعبة البرمجة</h3><p>اكتب كود لتشغيل الروبوت!</p>";
}

function solveRiddles() {
    const content = document.getElementById("activity-content");
    content.innerHTML = "<h3>ألغاز الذكاء</h3><p>ما الرقم التالي في التسلسل: 2، 4، 8، ؟</p>";
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
});