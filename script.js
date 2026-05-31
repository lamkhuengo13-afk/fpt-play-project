function moDangNhap() {
    document.getElementById('loginModal').style.display = 'block';
}

function dongDangNhap() {
    document.getElementById('loginModal').style.display = 'none';
}

let danhSachPhim = [
{
        id: 1, 
        tenPhim: "Đất Rừng Phương Nam", 
        namPhatHanh: "2023", 
        tuoi: "13T", 
        thoiLuong: "2h 19m", 
        quocGia: "Việt Nam", 
        poster: "phim/ngangDRPN.jpg", 
        trailer: "https://youtu.be/hktzirCnJmQ?si=o---KG_i9O6RIZUq", 
        theLoai: "Phiêu lưu / Lịch sử"
    },
    {
        id: 2, 
        tenPhim: "Tro Tàn Rực Rỡ", 
        namPhatHanh: "2022", 
        tuoi: "16T", 
        thoiLuong: "1h 56m", 
        quocGia: "Việt Nam", 
        poster: "phim/ngangTTRR.jpg", 
        trailer: "https://youtu.be/Sx0gdaeeGi4?si=W2122skzivRJq5aI", 
        theLoai: "Nghệ thuật"
    },
    {
        id: 3, 
        tenPhim: "Mưa Đỏ", 
        namPhatHanh: "2025", 
        tuoi: "16T", 
        thoiLuong: "2h", 
        quocGia: "Việt Nam", 
        poster: "phim/ngangMD.jpg", 
        trailer: "https://youtu.be/BD6PoZJdt_M", 
        theLoai: "Lịch sử / Chiến tranh"
    },
    {
        id: 4, 
        tenPhim: "Mùi Cỏ Cháy", 
        namPhatHanh: "2012", 
        tuoi: "13T", 
        thoiLuong: "1h 37m", 
        quocGia: "Việt Nam", 
        poster: "phim/ngangmcochay.jpg", 
        trailer: "https://youtu.be/Up9T0jRpBOA?si=ssLYtX_WZJsG7CFb", 
        theLoai: "Lịch sử / Chiến tranh"
    },
    {
        id: 5, 
        tenPhim: "Địa Đạo", 
        namPhatHanh: "2024", 
        tuoi: "13T", 
        thoiLuong: "1h 50m", 
        quocGia: "Việt Nam", 
        poster: "phim/ngangDD.jpg", 
        trailer: "https://youtu.be/-OGDDtsIBHA?si=KE68T2Vbvx1lHNi0", 
        theLoai: "Lịch sử / Chiến tranh"
    }
];

function chonPhim(idPhim) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if(danhSachPhim[i].id == idPhim) {
            document.getElementById("banner").src = danhSachPhim[i].poster;
            document.getElementById("xem").textContent = "Xem ngay";
            document.getElementById("trailer").href = danhSachPhim[i].trailer;
            document.getElementById("tenPhim").textContent = danhSachPhim[i].tenPhim;
            document.getElementById("theLoai").textContent = danhSachPhim[i].theLoai;
            document.getElementById("quocGia").textContent = danhSachPhim[i].quocGia;
            document.getElementById("nam").textContent = danhSachPhim[i].namPhatHanh;
            document.getElementById("thoiLuong").textContent = danhSachPhim[i].thoiLuong;
            document.getElementById("doTuoi").textContent = danhSachPhim[i].tuoi;
        }
    }
}

function moveSlider(button, direction) {
    var container = button.parentElement.querySelector('.phim_doc, .phim_ngang, .phim_mini');
    var scrollAmount = 600; 
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

let currentIndex = 0; 

function tuDongChuyenPhim() {
    currentIndex++;
    if (currentIndex >= danhSachPhim.length) {
        currentIndex = 0;
    }
    let nextId = danhSachPhim[currentIndex].id;
    chonPhim(nextId);
}
setInterval(tuDongChuyenPhim, 3500);
