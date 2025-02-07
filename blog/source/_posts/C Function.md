---
title: C 函数及其参数
description: 不难，水一下笔记
mathjax: true
tags:
  - C
abbrlink: 20241219a
swiper_index: 3
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/default_cover_6.webp
date: 2024-12-19 20:15:00
updated: 2024-12-19 20:15:00
---

```C
#include<stdio.h>
int isLeapYear(int year)//该处的year是形式参数（形参）的变量名，int是数据类型
{
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400)
        return 1;
    return 0;
}
int main()
{
    int year = 0;
    printf("请输入年份：");
    scanf("%d", &year);//输入要判断的年份
    if(isLeapYear(year))//该处的year是实际参数（实参）的变量名，其数据类型必须要和接收函数的形参类型一致，变量名可以相同或不同
        printf("%d是闰年",year);
    else
        printf("%d是平年", year);
    return 0;
}
```