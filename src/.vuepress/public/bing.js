// 必应每日壁纸API
// https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN

alert(100)
const url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
fetch(url).then(response => response.json())
.then(data => console.log(data))
.catch(e => console.log("Oops, error", e))