function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
function showResult() {
    var answer = ["B", "D", "B", "B", "D", "ABC", "ACD"];//标准答案
    var answer_score = [12, 12, 12, 12, 12, 20, 20];//答案的分数
    var user_answer = JSON.parse(getUrlParam("json"));//获取用户答案
    var radio_num = parseInt(getUrlParam("radio"));//获取单选个数
    var checkbox_num = parseInt(getUrlParam("checkbox"));//获取多选个数
    var radio_result = 0;//单选分数
    var checkbox_result = 0;//多选分数
    // var radio_right_num = 0;//单选答对个数
    // var checkbox_right_num = 0;//多选答对个数
    var result = 0;//总分数
    var user_answer_result = new Array();//用户每道题的答题情况
    for (var i = 0; i < user_answer.length; i++) {
        if (user_answer[i] == answer[i]) {
            if (i < radio_num) {
                radio_result = radio_result + answer_score[i];
                // radio_right_num++;
            } else {
                checkbox_result = checkbox_result + answer_score[i];
                // checkbox_right_num++;
            }
            user_answer_result[i] = "√";
        } else {
            user_answer_result[i] = "×";
        }
    }
    result = checkbox_result + radio_result;
    //结果展示
    var show_result1;
    var show_result2;
    var show_result3;
    var show_result4;
    var show_result5;
    var show_result6;
    show_result1 = "你的答案结果为：";
    for (var i = 0; i < user_answer.length; i++) {
        show_result1 = show_result1 + (i + 1) + "：" + user_answer_result[i] + "；&nbsp;";
    }
    show_result2 = "Total number of topics：" + user_answer.length;
    // show_result3 = "答对单选题题目个数：" + radio_right_num + "；&nbsp;得分：" + radio_result;
    // show_result4 = "答对多选题题目个数：" + checkbox_right_num + "；&nbsp;得分：" + checkbox_result;
    show_result5 = "Number of wrong answers：" + (user_answer.length - radio_right_num - checkbox_right_num);
    show_result6 = " The result is: " + result;
    $("p#show_result1").html(show_result1);
    $("p#show_result2").html(show_result2);
    $("p#show_result3").html(show_result3);
    $("p#show_result4").html(show_result4);
    $("p#show_result5").html(show_result5);
    $("p#show_result6").html(show_result6);
}