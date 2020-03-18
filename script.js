let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("YYYY-MM-DD");

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
}    

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
};
 
appData.moneyPerDay = appData.budget/30;


    alert("Ежедневный бюджет:" + appData.moneyPerDay);
    
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий урокень достатка");
    } else {
        console.log("Произошла ошибка");
    }
