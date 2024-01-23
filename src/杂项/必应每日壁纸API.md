---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-23
# 当前页面图标的 FontClass 或文件路径
# icon: string
# 分类
category:
  - API

# 标签
tag:
  - API
  - 壁纸
---

# 必应每日壁纸API

## 官方API

```
https://cn.bing.com/HPImageArchive.aspx
```

## 接口说明

| 参数名称         | 值含                                                         |
| :--------------- | :----------------------------------------------------------- |
| format（非必需） | 返回数据格式，不存在返回xml格式<br/>`js` (返回json格式，一般使用这个)<br/>`xml`（返回xml格式） |
| idx（非必需）    | 请求图片截止天数<br/>`0` 今天<br/>`-1` 截止至明天（预准备的）<br/>`1` 截止至昨天，类推（目前最多获取到16天前的图片） |
| n（必需）        | 1-8 返回请求数量，目前最多一次获取8张                        |
| mkt（非必需）    | 地区<br/>`zh-CN`                                             |

## 返回示例

```
curl "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN"
```

以上面 URL 为例，可以看到返回内容为：

```json
{
    "images": [
        {
            "startdate": "20240122",
            "fullstartdate": "202401221600",
            "enddate": "20240123",
            "url": "/th?id=OHR.MaldivesAtolls_ZH-CN1365670653_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            "urlbase": "/th?id=OHR.MaldivesAtolls_ZH-CN1365670653",
            "copyright": "印度洋的环礁，马尔代夫 (© Amazing Aerial Premium/Shutterstock)",
            "copyrightlink": "https://www.bing.com/search?q=%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB&form=hpcapt&mkt=zh-cn",
            "title": "印度洋之眼",
            "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240122_MaldivesAtolls%22&FORM=HPQUIZ",
            "wp": true,
            "hsh": "b2ceb56aee1dee4fce31b51c9967ddde",
            "drk": 1,
            "top": 1,
            "bot": 1,
            "hs": []
        }
    ],
    "tooltips": {
        "loading": "正在加载...",
        "previous": "上一个图像",
        "next": "下一个图像",
        "walle": "此图片不能下载用作壁纸。",
        "walls": "下载今日美图。仅限用作桌面壁纸。"
    }
}
```

此时，就得到图片部分地址了，可以通过域名 + 图片地址获取图片了：

```
https://cn.bing.com/th?id=OHR.MaldivesAtolls_ZH-CN1365670653_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
```