let productsCheckOut = JSON.parse(localStorage.getItem('paymentCard')) || []; 
let buyerInfo = JSON.parse(localStorage.getItem('buyerInfo')); //for current buyer


function getRandomArbitrary(min) {
    return Math.floor(Math.random() * min);
}

const countTheSumPrice = () => { // 4
	let sum = 0;
	productsCheckOut.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const receipt = document.querySelector('.row2');
console.log(buyerInfo);
console.log(productsCheckOut);


receipt.innerHTML = `<p>Receipt Number:` + getRandomArbitrary(100) + `</p>`
            + `<p>Total Amount Paid: &#8369;    ${countTheSumPrice()}`
            + `<p>Paid by: ${buyerInfo.firstname} ${buyerInfo.lastname}</p>`
            + `<p>For the Payment of:</p>`;


const receipt2 = document.querySelector('.customers');
for (let i = 0; i < productsCheckOut.length; i++) {
    const element = productsCheckOut[i];
    let result = `<tr>
                    <td>${element.name}</td>
                    <td>${element.count}</td>
                    <td>&#8369;${element.basePrice}</td>
                    <td>&#8369;${element.price}</td>
                </tr>`;
    receipt2.innerHTML += result; 
} 




