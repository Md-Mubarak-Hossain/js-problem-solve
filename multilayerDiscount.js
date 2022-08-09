/*
Requirement:
............................
1.if ticket number is less than 100, per ticket price: 100;
2.if ticket number is more than 100,but less than 200,first 100 tickets will be 100 taka  per ticket price;
second 100 tickets will be 90 taka per ticket price;
3.if ticket number is more than 200, 
first 100 .....>100tk
101 ...200...>90k
200+ ........>70tk;
..............................
calculate total discunt;
..............................
input ticket:
90/120/250;
*/

function discuntPrice(tickets) {
    // console.log(tickets);
    let first100TicketRate = 100;
    let second100TicketRate = 90;
    let restTicketRate = 70;
    if (tickets <= 100) {
        let totalPrice = tickets * first100TicketRate;
        return totalPrice;
    }
    else if (tickets <= 200) {
        let first100TicketPrice = first100TicketRate * 100;
        let restTicketprice = (tickets - 100) * second100TicketRate;
        let totalPrice = first100TicketPrice + restTicketprice;
        return totalPrice;

    }
    else {
        let first100TicketPrice = first100TicketRate * 100;
        let second100TicketPrice = second100TicketRate * 100;
        let restTicketprice = (tickets - 200) * restTicketRate;
        let totalPrice = first100TicketPrice + second100TicketPrice + restTicketprice;
        return totalPrice;
    }
}
const numberTicket = 220;
const totalDiscunt = discuntPrice(numberTicket);
console.log(totalDiscunt);