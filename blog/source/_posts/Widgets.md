---
title: Windows 11 小组件
description: 如何在 Windows 11 中卸载和重新安装小组件
mathjax: true
tags:
  - Windows优化
abbrlink: 20230502a
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/default_cover_1.webp
date: 2023-05-02 22:00:00
updated: 2023-05-03 09:00:00
---

如果您不喜欢小组件，您可以禁用甚至卸载该功能，并在改变主意时重新安装它。

## 在 Windows 11 中禁用小组件

1. 右键单击任务栏
2. 选择任务栏设置
3. 在“任务栏项”下，将“小组件”切换为“关闭”。

请注意，这将从任务栏中删除小组件图标，但它们如上所述继续运行。

在了解如何卸载小组件之前，请查看如何删除小组件。

## 删除Windows 11 中的小组件

1. 单击任务栏上的图标以启动小组件
2. 在这里，您会注意到几个小组件，每个小组件都有一个三点图标，单击三点图标以获取更多选项，然后选择要删除的小组件。

以这种方式删除的小部件可以重新添加回来，方法如下：

### 再次将已删除的小组件重新添加到 Windows 11

1. 打开小组件
2. 向下滚动并单击添加小组件
3. 选择一个小部件，然后单击“+”图标添加一个。
4. 完成，向上滚动以注意新添加的小组件。

### 使用 Powershell 卸载 Windows 11 小组件

1. 按 win 键并键入 Powershell，单击以管理员身份运行
2. 复制并粘贴此命令，然后按回车键winget uninstall "Windows web experience Pack"
3. Windows 11 卸载负责小组件的 Windows Web 体验包 [[MicrosoftWindows.Client.WebExperience_cw5n1h2txyewy]。

## 在 Windows 11 中恢复/重新安装小组件

1. 要找回小部件，请访问浏览器中的 [Windows Web 体验商店链接](https://www.microsoft.com/store/productId/9MSSGKG348SP)
2. 单击“获取”按钮并进一步安装它
