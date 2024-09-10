getAll(urlTable, displayTable);

function displayTable(data) {
    const table = document.querySelector(".tables");
    console.log("v bdb")
    data.forEach((value) => {
        let img = value.status ? "../img/meeting.png" : "../img/dining-room.png";
        let btn = value.status ? `<div class="card-body text-center">
                                        <button class="btn btn-success"> <i class="fas fa-plus"></i> Add</button>
                                        <button class="btn btn-danger"> <i class="fa-solid fa-cart-shopping">
                                            </i>Cart</button>
                                    </div>` : `<div onclick=getId(${value.id}) class="card-body text-center" data-bs-toggle="modal" data-bs-target="#booking">
                                        <button class="btn btn-warning">Booking</button>
                                    </div>`
        table.innerHTML += `<div class="col">
                                <div class="card p-2">
                                    <div class="number-circle">${value.id}</div>
                                    <img src="${img}" class="card-img-top"
                                        alt="Product Image">
                                    <div class="card-body text-center">
                                    ${btn}
                                    </div>
                                </div>
                            </div>`;
    })

}
var idtables;
function getId(id){
    idtables = id;
    console.log(id);
    
}
function booking() {
    var Customer = document.getElementById("Customer-name").value;
    var quanlyti = document.getElementById("Quantily").value;
    var object = { id: idtables, customerName: Customer, quantity: quanlyti , status: true }
    edit(urlTable,idtables,object)

}