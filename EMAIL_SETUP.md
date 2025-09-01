# 📧 EmailJS 邮件发送功能设置指南

## 🚀 概述

这个联系表单使用 EmailJS 服务来发送邮件，无需后端服务器。访问者填写表单后，邮件会直接发送到你的邮箱。

## 📋 设置步骤

### 1. 注册 EmailJS 账户

1. 访问 [EmailJS官网](https://www.emailjs.com/)
2. 点击 "Sign Up" 注册账户
3. 选择免费计划（每月200封邮件）

### 2. 创建邮件服务

1. 登录后，进入 "Email Services" 页面
2. 点击 "Add New Service"
3. 选择你的邮件提供商（Gmail、Outlook、Yahoo等）
4. 按照提示连接你的邮箱账户
5. 记录下生成的 **Service ID**

### 3. 创建邮件模板

1. 进入 "Email Templates" 页面
2. 点击 "Create New Template"
3. 设计你的邮件模板，使用以下变量：
   - `{{from_name}}` - 发送者姓名
   - `{{from_email}}` - 发送者邮箱
   - `{{subject}}` - 邮件主题
   - `{{message}}` - 邮件内容
   - `{{to_name}}` - 你的姓名
4. 保存模板并记录下 **Template ID**

### 4. 获取 Public Key

1. 进入 "Account" → "API Keys" 页面
2. 复制 **Public Key**

### 5. 配置环境变量

1. 在项目根目录创建 `.env.local` 文件
2. 添加以下内容：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=你的Service_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=你的Template_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=你的Public_Key
```

### 6. 测试功能

1. 启动开发服务器：`npm run dev`
2. 访问联系页面
3. 填写表单并提交
4. 检查你的邮箱是否收到邮件

## 🔧 邮件模板示例

```html
<h2>新的联系表单消息</h2>
<p><strong>来自：</strong> {{from_name}} ({{from_email}})</p>
<p><strong>主题：</strong> {{subject}}</p>
<p><strong>消息：</strong></p>
<p>{{message}}</p>
<hr />
<p><em>此邮件通过你的个人网站联系表单发送</em></p>
```

## ⚠️ 注意事项

1. **免费计划限制**：每月200封邮件
2. **安全性**：Public Key 是公开的，但只能用于发送邮件
3. **垃圾邮件防护**：EmailJS 有内置的垃圾邮件检测
4. **备份方案**：建议保留直接邮箱地址作为备选联系方式

## 🆘 故障排除

### 邮件发送失败

- 检查环境变量是否正确设置
- 确认 EmailJS 服务状态
- 查看浏览器控制台错误信息

### 邮件未收到

- 检查垃圾邮件文件夹
- 确认邮件服务连接正常
- 验证模板变量是否正确

## 💡 高级功能

### 添加验证码

- 集成 reCAPTCHA 防止机器人提交
- 使用简单的数学验证码

### 自定义邮件样式

- 使用 HTML 和 CSS 美化邮件模板
- 添加你的品牌元素和 logo

### 邮件通知

- 设置自动回复邮件
- 添加邮件分类标签

## 📞 技术支持

- EmailJS 官方文档：[https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS 社区论坛：[https://community.emailjs.com/](https://community.emailjs.com/)
