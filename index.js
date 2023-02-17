var count = 1;

function getExpense(){
    let trowEmpty = document.getElementById("trEmpty");
    trowEmpty.setAttribute("style", "display: none;");

    let name = document.getElementById("expName");
    let date = document.getElementById("expDate");
    let amount = document.getElementById("expAmount");
    // console.log(name, date, amount);
    addExpense(name.value, date.value, amount.value);
    name.value = null;
    date.value = null;
    amount.value = null;
}

function addExpense(name, date, amount){
    let expTable = document.getElementById("expTable");
    let tbody = document.getElementById("tbody");
    let trow = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("button");
    let node = document.createTextNode(count);

    // Appending table data:
    // For SN field
    c1.appendChild(node);
    c1.setAttribute("id", "td"+count);
    trow.appendChild(c1);

    // For Expense field
    node = document.createTextNode(name);
    c2.appendChild(node);
    trow.appendChild(c2);

    // For Date Field
    node = document.createTextNode(date);
    c3.appendChild(node);
    trow.appendChild(c3);

    // For Amount Field
    node = document.createTextNode(amount);
    c4.appendChild(node);
    trow.appendChild(c4);

    // For close button field
    c5.setAttribute("class", "close fa fa-close");
    c5.setAttribute("data-tr-id", count);
    c5.setAttribute("onclick", "expDelete(dataset.trId)")
    trow.appendChild(c5);
    trow.setAttribute("id", count);
    // Finally the composite <tr> appended to the <tbody>
    tbody.appendChild(trow);
    count++;
    console.log(count);
}

function expDelete(trId){
    console.log(trId);
    let trow = document.getElementById(trId);
    trow.remove();
    count--;
    console.log(count);
    if(count == 1){
        let trowEmpty = document.getElementById("trEmpty");
        trowEmpty.setAttribute("style", "display:");
    }
    
    // if ((count - trId) > 1){
    //     trId++;
    //     for(i = trId; i < count; i++){
    //         console.log("success");
    //     // From the deleted trow to the last trow
    //     let c1 = document.getElementById("td" + i);
    //     let trowNew = document.getElementById(trId);
    //     let button = document.getElementById(trId);

    //     c1.innerHTML--;
    //     trowNew.setAttribute("id", c1.innerHTML);

    //     console.log(c1.innerHTML);

    // }
    
    // TRY USING CSS COUNTERS INSTEAD?

}