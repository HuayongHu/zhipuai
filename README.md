# zhipuai

## 接口名称

### 1) 请求地址

>https://zhipuai.011102.xyz/

### 2) 调用方式：HTTP post

### 3) 接口描述：

* 利用智谱清言官方api搭建的自用api

* 官方接口文档地址：https://open.bigmodel.cn/dev/api#glm-4

### 4) 请求参数:



```
{
    "model": "glm-4-flash",
    "messages": [
        {
            "role": "user",
            "content": "你好"
        }
    ]
}
```

#### POST参数:
详见官方说明




### 5) 请求返回结果:

```
{
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "message": {
                "content": "你好！作为智能学习助手，我已经准备好帮助你解决问题或提供学习上的帮助。有什么我可以帮你的吗？",
                "role": "assistant"
            }
        }
    ],
    "created": 1725607026,
    "id": "2024090615170503e5eb37d22a4e96",
    "model": "glm-4-flash",
    "request_id": "2024090615170503e5eb37d22a4e96",
    "usage": {
        "completion_tokens": 25,
        "prompt_tokens": 22,
        "total_tokens": 47
    }
}
```


### 6) 请求返回结果参数说明:
详见官方说明





