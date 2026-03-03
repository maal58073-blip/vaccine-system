// بيانات المراكز
const vaccinationCenters = [
    {
        location: "الصابري",
        name: "مركز الصابري الصحي",
        schedule: [
            { day: "الأحد", vaccine: "تطعيمة الشهرين (شلل + خماسي)" },
            { day: "الثلاثاء", vaccine: "تطعيمة 9 أشهر (حصبة)" },
            { day: "الخميس", vaccine: "تطعيمة السنة (MMR)" }
        ]
    },
    {
        location: "بنغازي الجديدة",
        name: "مجمع عيادات بنغازي الجديدة",
        schedule: [
            { day: "الإثنين", vaccine: "تطعيمة 4 أشهر" },
            { day: "الأربعاء", vaccine: "تطعيمة 6 أشهر" },
            { day: "السبت", vaccine: "تطعيمة 18 شهراً" }
        ]
    }
];

// دالة تحديث جدول المركز المختار
function updateVaccineSchedule() {
    const select = document.getElementById('centerSelect');
    const display = document.getElementById('scheduleDisplay');
    const list = document.getElementById('vaccineList');
    const title = document.getElementById('centerTitle');

    if (!select || !display) return;

    const data = vaccinationCenters.find(c => c.location === select.value);

    if (data) {
        display.style.display = 'block';
        title.innerText = "جدول مواعيد " + data.name;
        list.innerHTML = data.schedule.map(s => 
            `<li style="padding:5px 0; border-bottom:1px solid #eee;"><strong>${s.day}:</strong> ${s.vaccine}</li>`
        ).join('');
    } else {
        display.style.display = 'none';
    }
}

// التأكد من عمل السكريبت على الموبايل
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('centerSelect');
    if (select) {
        select.addEventListener('change', updateVaccineSchedule);
    }
});