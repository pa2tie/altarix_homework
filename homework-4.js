// Календарь. Принимает год, месяц. Рисует таблицу переданного месяца.
// При клике – выделяет соответствующий день в таблице (по onClick назначение класса active ячейке таблицы – дню)

function drawCalendar(yearNum, monthNum) {
    const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let firstDate = new Date(yearNum, monthNum - 1);
    let lastDate = new Date(firstDate);

    var calendarTable = document.createElement('table');

    // add table header
    let trHead = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th');
        th.innerHTML = weekDays[i];
        trHead.appendChild(th);
    }
    calendarTable.appendChild(trHead);

    // fill the cell days
    while(lastDate.getMonth() == firstDate.getMonth()) {
        let tr = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let day = (lastDate.getDay() - 1) == -1 ? 6 : lastDate.getDay() - 1;
            let td = document.createElement('td');
            td.innerHTML = (day == i) && (lastDate.getMonth() == firstDate.getMonth()) ? lastDate.getDate() : "";
            if (day == i) lastDate.setDate(lastDate.getDate() + 1);
            tr.appendChild(td);
        }
        calendarTable.appendChild(tr);
    };

    // set calendar style
    calendarTable.classList.add("calendar");
    
    // add click listeners for "td" elements
    Array.prototype.slice.call(calendarTable.getElementsByTagName("td")).forEach(el => {
        el.style.cursor = el.innerHTML ? "pointer" : "default";
        
        function clickHandler() {
            let isActive = this.classList.contains("active");

            Array.prototype.slice.call(calendarTable.getElementsByTagName("td")).forEach(el => {
                if (el.classList.contains("active")) el.classList.remove("active");
            });

            if (isActive) 
                this.classList.remove("active");
            else
                this.classList.add("active");
        }

        if (el.innerHTML) el.addEventListener("click", clickHandler);
    });
    

    document.body.appendChild(calendarTable);
}


drawCalendar(2018, 11);