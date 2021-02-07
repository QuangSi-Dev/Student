let productList = [];
//call axios get product list from DB
const getProductListFromDB = function () {
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      var mappedData = mapData(res.data);
      productList = mappedData;
      console.log(productList);
      createProductInterfaces(mappedData);
    })
    .catch(function (error) {
      console.log(error);
    });
};
getProductListFromDB();
const mapData = function (dataFromBD) {
  var mappedData = [];
  for (var i = 0; i < 8; i++) {
    const mappedProduct = new Product(
      dataFromBD[i].id,
      dataFromBD[i].name,
      dataFromBD[i].price,
      dataFromBD[i].screen,
      dataFromBD[i].backCamera,
      dataFromBD[i].frontCamera,
      dataFromBD[i].img,
      dataFromBD[i].desc,
      dataFromBD[i].type
    );
    mappedData.push(mappedProduct);
  }

  console.log(mappedData);
  return mappedData;
};
const createProductInterfaces = function (data) {
  var productListHTML = "";
  for (var i = 0; i < data.length; i++) {
    productListHTML += `
      <div class="col-3 mt-5">
        <div class="card p-2 d-flex">
          <img
            style="height: 340px"
            src="${data[i].img}"
            max-width="100%"
            alt=""
          />
          <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">Giá bán: ${data[i].price}$</p>
          <button class="btn btn-success">Cart</button>
          </div>
          
        </div>
      </div>
    `;
  }
  document.getElementById("tbodyProducts").innerHTML = productListHTML;
};
const filterProduct = function () {
  var typeProduct = document.getElementById("typeProduct").value;
  console.log(typeProduct);
  let newProductList = [];
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].type === "samsung") {
      newProductList.push(productList[i]);
    }
    // if (productList[i].type === "iphone") {
    //   newProductList.push(productList[i]);
    // }
  }
  createProductInterfaces(newProductList);
};
