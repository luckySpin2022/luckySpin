function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1); // 去掉 '?'
  queryString.split("&").forEach(pair => {
    const [key, value] = pair.split("=");
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
  });
  return params;
}

async function forwardRequest() {
  const targetUrl = "https://d38xk3lkaygrbr.cloudfront.net/gate.php?gate=fbCall_delete&qudao=LuckySpin_Ios"; // 目标服务器地址

  // 获取请求参数作为 POST 数据
  const payload = getQueryParams();

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    document.getElementById("result").textContent = text;
  } catch (err) {
    document.getElementById("result").textContent = "请求失败: " + err;
  }
}

// 页面加载完成后自动调用
window.addEventListener("load", forwardRequest);
