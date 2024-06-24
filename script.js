var text = document.querySelector(".text"); // 获取显示文本的元素
var str = ["我的英文名字是Tanner", "中文名字是袁展韜"]; // 要打印的字符串数组
function writeText(t, delay = 200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text.innerHTML = t; // 显示当前字符串 t
      resolve(); // Promise 完成
    }, delay); // 延迟 delay 毫秒后执行
  });
}

async function main(str) {
  while (true) {
    // 无限循环
    for (let j = 0; j < str.length; j++) {
      // 写入
      for (let i = 0; i <= str[j].length; i++) {
        await writeText(str[j].substr(0, i)); // 显示当前字符串的前 i 个字符
      }
      // 回退
      // 回退前先等一秒
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(); // 等待 1000 毫秒后 Promise 完成
        }, 1000); // 等待 1000 毫秒
      });
      for (let i = str[j].length; i >= 0; i--) {
        await writeText(str[j].substr(0, i), 200); // 显示当前字符串的前 i 个字符，间隔 200 毫秒
      }
    }
  }
}
main(str);