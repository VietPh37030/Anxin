// scrip.js
// Lấy tham chiếu đến phần tử div của hộp thoại
const dialogBox = document.getElementById('dialogBox');
// Lấy các phần tử button từ DOM
const noButton = document.querySelector('.No');
const yesButton = document.querySelector('.Yes');
const rerollImg = document.getElementById('rerollimg');
let clickCount = 0;
const modalDialog = document.querySelector('.modal-dialog');
// Thêm sự kiện click cho nút "No"// Thêm sự kiện click cho nút "No"

noButton.addEventListener('click', function() {
    // Thay đổi src của ảnh thành ảnh siba2
    rerollImg.src = "./img/siba2.png";

    // Kiểm tra kích thước của nút "No" trước khi giảm kích thước
    if (noButton.offsetWidth > 1 && noButton.offsetHeight > 1) {
        // Giảm kích thước của nút "No" và tăng kích thước của nút "Yes"
        noButton.style.width = `${parseInt(noButton.offsetWidth) - 30}px`;
        noButton.style.height = `${parseInt(noButton.offsetHeight) - 30}px`;
        yesButton.style.width = `${parseInt(yesButton.offsetWidth) + 30}px`;
        yesButton.style.height = `${parseInt(yesButton.offsetHeight) + 30}px`;

        // Giảm kích thước của chữ trong nút "No" theo tỷ lệ của nút
        const scaleFactor = (parseInt(noButton.style.width) / parseInt(noButton.offsetWidth));
        noButton.style.fontSize = `${parseInt(noButton.style.fontSize) * scaleFactor}px`;

        // Đặt nút "No" vào vị trí ngẫu nhiên trên màn hình
        const maxX = window.innerWidth - parseInt(noButton.offsetWidth);
        const maxY = window.innerHeight - parseInt(noButton.offsetHeight);
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        noButton.style.position = "absolute";
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;

        // Tăng biến đếm lần nhấn
        clickCount++;

        // Kiểm tra nếu đã nhấn 5 lần, ẩn đi nút "No"
        if (clickCount === 6) {
            noButton.style.visibility = "hidden";
            noButton.style.backgroundColor = "#FFFF";
        }
    }
});

// Thêm sự kiện click cho nút "Yes"
yesButton.addEventListener('click', function() {
    modalDialog.style.display = "block";
});
function handlePay() {
    // Thay đổi nội dung của các phần tử h1 và h2
    const titleElement = document.getElementById('t1');
    const subtitleElement = document.getElementById('t2');
    
    titleElement.textContent = "Cảm ơn bạn đã ủng hộ!";
    subtitleElement.textContent = "Chúc bạn một năm mới tràn đầy sức khỏe và may mắn.";
    
    // Thay đổi src của ảnh
    const imageElement = document.getElementById('img1');
    imageElement.src = "./img/siba4.png";
    imageElement.style.width="403px"
    // Hiển thị modal dialog
    modalDialog.style.display = "block";
    const textPay = document.getElementById('pay');
    textPay.textContent = "Đéo biết code tắt kiểu gì thông cảm:>";
    

}


