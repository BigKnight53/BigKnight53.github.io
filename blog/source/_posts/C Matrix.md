---
title: C 矩阵转置与乘积
description: 这很酷！
mathjax: true
tags:
  - C
abbrlink: 20241115a
swiper_index: 2
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/Quiet.webp
date: 2024-11-15 23:50:00
updated: 2024-11-27 21:02:00
---

{% note info flat %}C#中矩阵是基于二维数组的{% endnote %}
# 1.矩阵转置
```C
int i, j, a[4][4] = { {3,8,2,9},{4,7,3,6},{5,2,8,4},{7,6,9,3} }, b[4][4] = {};
printf("转置前数组矩阵：\n");
for (i = 0; i < 4; i++)
{
    for (j = 0; j < 4; j++)
    {
        b[i][j] = a[i][j];//存储原矩阵,方便后续矩阵相乘
        printf("%4d", a[i][j]);
    }
    //换行符放在两层循环间，使得一行输出完4个就换行
    printf("\n\n");
}
//转置矩阵
for (i = 0; i < 4; i++)
{
    for (j = 0; j < i; j++)
    {
        //i>j就是下三角元素，避免重复转置
        if (i > j)
        {
            int temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
}
printf("转置后数组矩阵：\n");
for (i = 0; i < 4; i++)
{
    for (j = 0; j < 4; j++)
    {
        printf("%4d", a[i][j]);
    }
    printf("\n\n");
}
```
# 2.矩阵乘积
* 基于上面的代码段我们要新定义一个矩阵来存放两个矩阵的乘积，然后再定义一个变量用于计算矩阵乘积的循环
```C
int k,c[4][4] = {};

for (i = 0; i < 4; i++)
{
    for (j = 0; j < 4; j++)
    {
        //最内层的循环原理为：矩阵乘积的第i行第j列等于矩阵b的第i行第k与矩阵a的第k列的乘积之和
        for (k = 0; k < 4; k++)
        {
            c[i][j] += b[i][k] * a[k][j];//这一段是计算矩阵乘积的核心算法
        }
    }
}
//最后再写一个两层循环输出矩阵乘积
printf("矩阵乘积：\n");
for (i = 0; i < 4; i++)
{
    for (j = 0; j < 4; j++)
    {
        printf("%4d", c[i][j]);
    }
    printf("\n\n");
}
```
