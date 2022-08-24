//ต้องการอยากให้เมนูด้านบนเปลี่ยนสี
const nav = document.querySelector('.nav')
window.addEventListener("scroll",stickyNavbar)
//เราต้องการอยากจะทราบว่าผู้ใช้ทำการสกอในแนวแกนYไปจนถึงจุดที่อยากให้เปลี่ยนสี
function stickyNavbar(){
    if(window.scrollY>nav.offsetHeight+150){ //offsetHeightหมายถึงความสูงของหน้าต่างรวมสกอบาร์/+150 คือไม่ได้ให้activeแต่เริ่มต้องไปจุดๆเพิ่ม 150ก่อนถึง active
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}