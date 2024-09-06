export default {
  async fetch(request) {
    const { method } = request;

    if (method === 'POST') {
      try {
        const requestBody = await request.json();
        
        // 修改payload，加入model字段
        const payload = {
          model: 'glm-4-flash', // 新增的model字段
          messages: requestBody.messages
        };

        const apiResponse = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer 此处填入你的密钥',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify(payload)
        });

        const apiData = await apiResponse.json();

        return new Response(JSON.stringify(apiData), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // 允许所有来源
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, errors: [error.message] }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // 允许所有来源
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        });
      }
    }

    // 处理预检请求
    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};
