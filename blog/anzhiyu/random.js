var posts=["2024/10/15/Binary Learning/","2024/12/19/C Function/","2024/10/19/C Statement/","2024/11/26/C Math Questions/","2024/12/01/Excel Handbook/","2024/11/15/C Matrix/","2024/11/17/C Algorithm/","2021/04/01/Hello world/","2022/08/09/Markdown Grammar/","2024/09/23/My College life/","2023/07/24/Windows 11 Update/","2023/05/02/Widgets/","2024/10/20/C Operators And Expressions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };