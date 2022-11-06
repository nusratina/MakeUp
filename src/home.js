function buttonClicked(){
    //const cityForm  = document.querySelector("#foodForm")
    //const getWeatherConditions = async(city) => {
    let brand = document.getElementById("brand").value
    let category = document.getElementById("category").value
    fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${category}`)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
            console.log("Brand:",data[0].brand)
            console.log("Category:",data[0].product_type)
            console.log("Name:",data[0].name)
            console.log("Description:",data[0].description)
            console.log("Price: $",data[0].price)
            console.log("Product link: ",data[0].product_link)
            console.log("Website: ",data[0].website_link)
            console.log("Rating: ",data[0].rating)
            document.getElementById("displaybrand")//.append((data[0].brand))
            document.getElementById("displaytype")//.append((data[0].product_type))
            document.getElementById("displayname").append((data[0].name))
            document.getElementById("displaydesc").append((data[0].description))
            document.getElementById("displayprice").append((data[0].price))
            document.getElementById("displayweb").append((data[0].website_link))
            document.getElementById("displaypl").append((data[0].product_link))
            document.getElementById("displayrating").append((data[0].rating))
        })
}