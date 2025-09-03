async function forwardRequest(url, options = {}) {
  const targetApi = "http://3.85.156.78?gate=fbCall_delete"; // 目标服务器地址
  const fullUrl = targetApi + url;

  try {
    const response = await fetch(fullUrl, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      body: options.body ? JSON.stringify(options.body) : null,
      mode: "cors"
    });

    if (!response.ok) {
      throw new Error(`状态码: ${response.status}`);
    }

    // 返回解析后的结果（供前端使用）
    return await response.json();
  } catch (error) {
    console.error("转发失败:", error);
    throw error; // 抛出错误，让前端捕获
  }
}
