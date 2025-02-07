---
title: Excel 指南
description: 怎么还要学这个（恼
mathjax: true
tags:
  - Excel
abbrlink: 20241201a
swiper_index: 3
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/default_cover_2.webp
date: 2024-12-01 16:54:00
updated: 2024-12-01 16:54:00
---

# Excel 公式
* =Rank(=RANK(L2,$L$2:$L$62,0))
* =SUM(E2:K2)
* =AVERAGE(E2:K2)
* =MID(A2,4,1)&"班"
* =IF(AND(L2>650,E2>95,F2>95,G2>95),"有","没有")
* =COUNTIF(C2:C62,"1班")
* =VLOOKUP(E3,编号对照!$A$1:$C$19,2,FALSE)