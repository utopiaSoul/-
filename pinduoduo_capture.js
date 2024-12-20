/**
 * 拼多多参数抓取脚本
 */

// 处理请求头
if ($request) {
    console.log("Request URL:", $request.url);
    console.log("Request Headers:", JSON.stringify($request.headers, null, 2));
    console.log("Request Body:", $request.body || "No Body");

    // 将结果返回，不修改请求
    $done({});
}

// 处理响应体
if ($response) {
    console.log("Response Headers:", JSON.stringify($response.headers, null, 2));
    console.log("Response Body:", $response.body || "No Body");

    // 将结果返回，不修改响应
    $done({});
}
