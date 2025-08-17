var proSearch = document.getElementById("proSearch")
var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");

var proContainer = [];

var udpIndex;

if (JSON.parse(localStorage.getItem("AllProducts")) != null) {
  proContainer = JSON.parse(localStorage.getItem("AllProducts"));
  showPro();
}

btn.onclick = function() {
  var pro = {
  name: proName.value,
  price: proPrice.value,
  category: proCategory.value,
  desc: proDesc.value
};
  if (btn.innerHTML == "Add Product") {
    console.log("Add");
  proContainer.push(pro);
  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  showPro();
  console.log(proContainer);
  } else {
    console.log("update");
    proContainer[udpIndex] = pro;
    localStorage.setItem("AllProducts", JSON.stringify(proContainer));
    showPro();
    btn.innerHTML = "Add Product";
    console.log(proContainer);
  }
  proName.value = "";
  proPrice.value = "";
  proCategory.value = "";
  proDesc.value = "";
}

function showPro() {
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    AllPro += `
            <tr>
              <td>${i + 1}</td>
              <td>${proContainer[i].name}</td>
              <td>${proContainer[i].price}</td>
              <td>${proContainer[i].category}</td>
              <td>${proContainer[i].desc}</td>
              <td>
                <button onclick="delPro(${i})" class="btn delete">Delete</button>
                <button onclick="updPro(${i})" class="btn update">Update</button>
              </td>
            </tr>
    `
  }
  document.getElementById("tbody").innerHTML = AllPro;
}

function delPro(index) {
  proContainer.splice(index, 1);
  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  showPro();
  console.log(proContainer);
}

proSearch.onkeyup = function() {
  searchPro(proSearch.value);
}

function searchPro(data) {
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    if (proContainer[i].name.toLowerCase().includes(data.toLowerCase())) {
      AllPro += `
              <tr>
                <td>${i + 1}</td>
                <td>${proContainer[i].name}</td>
                <td>${proContainer[i].price}</td>
                <td>${proContainer[i].category}</td>
                <td>${proContainer[i].desc}</td>
                <td>
                  <button onclick="delPro(${i})" class="btn delete">Delete</button>
                  <button onclick="updPro(${i})" class="btn update">Update</button>
                </td>
              </tr>
      `
    }
  }
  document.getElementById("tbody").innerHTML = AllPro;
}

function updPro(index) {
  udpIndex = index;
  document.getElementById("proName").value = proContainer[index].name;
  document.getElementById("proPrice").value = proContainer[index].price;
  document.getElementById("proCategory").value = proContainer[index].category;
  document.getElementById("proDesc").value = proContainer[index].desc;

  btn.innerHTML = "Update Product";
}

