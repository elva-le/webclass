// 依分類、專輯名稱或歌曲名稱，篩選作品。
function filterAlbums() {
    var type = document.getElementById("albumType").value;
    var keyword = document.getElementById("albumSearch").value.toLowerCase().trim();
    var albums = document.getElementsByClassName("album");
    var count = 0;

    for (var i = 0; i < albums.length; i++) {
        var sameType = type == "all" || albums[i].getAttribute("data-type") == type;
        var sameName = albums[i].textContent.toLowerCase().indexOf(keyword) != -1;

        if (sameType && sameName) {
            albums[i].hidden = false;
            count = count + 1;
        } else {
            albums[i].hidden = true;
        }
    }

    document.getElementById("albumResult").textContent = "找到 " + count + " 部作品。";
}

//點選圖片，開啟放大的照片與標題。
function showPhoto(path, title) {
    var photo = document.getElementById("largePhoto");
    photo.src = path;
    photo.alt = "IVE 團體照：" + title;
    document.getElementById("photoCaption").textContent = title;
    document.getElementById("photoDialog").showModal();
}

function closePhoto() {
    document.getElementById("photoDialog").close();
}

//依年份篩選獲獎活動。
function filterAwards() {
    var year = document.getElementById("awardYear").value;
    var rows = document.querySelectorAll("#awardTable tbody tr");
    var count = 0;

    for (var i = 0; i < rows.length; i++) {
        if (year == "all" || rows[i].getAttribute("data-year") == year) {
            rows[i].hidden = false;
            count = count + 1;
        } else {
            rows[i].hidden = true;
        }
    }

    document.getElementById("awardResult").textContent = "顯示 " + count + " 筆頒獎活動紀錄。";
}