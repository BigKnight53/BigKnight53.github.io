---
title: C 算法
description: 是算法，有救了（雾
mathjax: true
tags:
  - C
  - 算法
abbrlink: 20241117a
swiper_index: 3
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/City.webp
date: 2024-11-17 23:40:00
updated: 2024-11-27 21:40:00
---

# 冒泡排序 / 起泡法
* 冒泡排序（Bubble Sort）是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。以下为核心代码段，可单独作为排序函数
```C
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n - i - 1; j++)
    {
        if (arr[j] > arr[j + 1])
        {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
```
# 选择排序
* 选择排序（Selection Sort）是一种简单直观的排序算法。它的工作原理是首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。以下为核心代码段，可单独作为排序函数
```C
for (int i = 0; i < n - 1; i++)
{
    int minIndex = i;
    for (int j = i + 1; j < n; j++)
    {
        if (arr[j] < arr[minIndex])
        {
            minIndex = j;
        }
    }
    //将每次找到的最小元素放到已排序序列的末尾
    int temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
```
# 递归
* 递归（Recursion）是一种编程技巧，它利用函数的调用自身的特点，来解决一些问题。递归函数一般都有一个基线条件，当这个条件满足时，递归函数就停止调用自身，并返回一个基准值。以下为递归函数的模板
{% note warning flat %}注意：递归函数的调用栈的最大深度受限于系统的内存限制，因此，在计算量大的情况下，递归函数的使用要慎重{% endnote %}
```C
int factorial(int n)
{
    if (n == 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}
```
# 记忆化搜索 TODO
<!-- * 记忆化搜索（Memoization Search）是一种优化搜索算法，它通过存储中间结果，避免重复计算，从而达到优化搜索效率的目的。以下为核心代码段，可单独作为搜索函数
```C
int[,] memo = new int[n + 1, n + 1];

int minCost(int[] cost, int n)
{
    if (n == 0 || n == 1)
    {
        return 0;
    }
    if (memo[n, cost[n - 1]] != -1)
    {
        return memo[n, cost[n - 1]];
    }
    int min = int.MaxValue;
    for (int i = 1; i <= n; i++)
    {
        int temp = minCost(cost, n - i) + i * cost[n - 1];
        if (temp < min)
        {
            min = temp;
        }
    }
    memo[n, cost[n - 1]] = min;
    return min;
}
``` -->