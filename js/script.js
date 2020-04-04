'use strict';
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'), 
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

        expensesItem = document.getElementsByClassName('expenses-item'),
        optionalExpensesBtn = document.getElementsByTagName('button'),
        countBudgetBtn = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
        incomeItem = document.querySelector('.choose-income'),
        checkSavings = document.querySelector('#savings'),
        sumValue = document.querySelector('.choose-sum'),

    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money,time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("YYYY-MM-DD");

    while(isNaN (money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function(){
        for (let i = 0; i < 2 ; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце"),
                b = prompt ("Во сколько обойдется?");
            if ( (typeof (a)) === "string" && (typeof(a) != null) && (typeof(b) != null) && (typeof(a) != "") && (typeof(b) != "") && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
            } else{
                console.log ("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий урокень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if(appData.savings = true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(i=0; i<3;i++) {
            let questionOptExpenses= prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход (Перечислите через запятую)", "");

        if(typeof (items) != "string" || items == "" || items === null){
            console.log('Попробуй еще')
        }else{
            appData.income = items.split(",");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
       
        appData.income.forEach(function(itemmassive,i){
            alert("Способы доп. заработка:" + (i+1) + "-" + itemmassive);
        });
    }
};
    for(let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
    }