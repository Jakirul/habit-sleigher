async function createHabit(data1) {

    const sec = document.querySelector("body > .habit-list");
    const div = document.createElement("div");
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const h2 = document.createElement("h2");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const form = document.createElement("form")
    const input = document.createElement("input");
    const form1 = document.createElement("form");
    const form2 = document.createElement("form")
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const section = document.createElement("section")

    let habitFrequency = document.createElement('progress')
    p2.textContent = `${data1.currfreq} / ${data1.frequency}`
    // p3.textContent = `Current Streak: ${data1.currstreak}, Max Streak: ${data1.maxstreak}`
    
    p3.textContent = `Current Streak: ${data1.currstreak} ${data1.currstreak == 1 ? 'day' : 'days'}`
    p4.textContent = `Max Streak: ${data1.maxstreak} ${data1.maxstreak == 1 ? 'day' : 'days'}`
    habitFrequency.setAttribute('max', data1.frequency)
    habitFrequency.setAttribute('value', data1.currfreq)
    div4.setAttribute("class", "leftOver")
    div4.append(habitFrequency)
    div4.append(p2)
    div4.append(p3)
    div4.append(p4)

    div.setAttribute("class", "inner-habit")
    div.setAttribute("name", data1.habit_id)

    form.setAttribute("name", data1.habit_id);
    form.setAttribute("class", "deletion")

    h2.textContent = `${data1.habit}`
    div2.setAttribute("class", "name")
    div2.append(h2)

    form1.setAttribute("name", data1.habit_id)
    form1.setAttribute("class", "count")

    form2.setAttribute("name", data1.habit_id)
    form2.setAttribute("class", "decrement")
    

    input2.setAttribute("value", "-")
    input2.setAttribute("type", "submit")
    form2.append(input2)

    input1.setAttribute("value", "+")
    input1.setAttribute("type", "submit")
    form1.append(input1)

    input.setAttribute("value", "DELETE")
    input.setAttribute("type", "submit")
    form.append(input)

    div3.setAttribute("class", "buttons")
    div3.append(form1)
    div3.append(form2)
    
    div3.append(form1)
    div3.append(form)

    section.append(div2)
    section.append(div4)
    section.append(div3)
    div.append(section)

    sec.append(div)
    return { input1, input2, div, habitFrequency }
}



module.exports = {createHabit}