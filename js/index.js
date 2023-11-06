const request = fetch("https://api.msigma.in/btech/v2/branches/");
console.log(request);

const color = [
  "rgb(27, 117, 187)",
  "rgb(246, 165, 41)",
  "rgb(81, 182, 185)",
  "rgb(244, 115, 14)",
];

request
  .then((response) => response.json())
  .then((data) => {
    const courseData = [];
    data.branches.forEach((element) => {
      courseData.push(element);
    });
    console.log(courseData);
    let k = 0;
    for (let i = 0; i < 10; i += 2) {
      let listDiv = document.getElementById("list-column");
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("list-row");
      for (let j = i; j < i + 2; j++) {
        if (k === 3) {
          k = 0;
        }
        let rowItem = document.createElement("div");
        rowItem.classList.add("list-row-item");
        let itemHeading = document.createElement("h3");
        itemHeading.innerHTML = courseData[j].short;
        itemHeading.style.color = color[k];
        rowItem.appendChild(itemHeading);
        let itemName = document.createElement("p");
        itemName.innerHTML = courseData[j].name;
        rowItem.appendChild(itemName);
        let itemButton = document.createElement("button");
        itemButton.classList.add("item-button");
        itemButton.innerHTML = "Apply Now";
        itemButton.style.color = color[k];
        rowItem.appendChild(itemButton);
        let itemCost = document.createElement("p");
        itemCost.innerHTML = "Fee starting at ₹799 per subject";
        rowItem.appendChild(itemCost);
        rowDiv.appendChild(rowItem);
        k++;
      }
      listDiv.appendChild(rowDiv);
    }
  })
  .catch((error) => console.error("Error:", error));
