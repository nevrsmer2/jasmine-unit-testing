// describe("Utilities test (with setup and tear-down)", function () {
//   beforeEach(function () {
//     billAmtInput.value = 100;
//     tipAmtInput.value = 20;
//     submitPaymentInfo();
//   });

//   it("should sum total tip amount of all payments on sumPaymentTotal()", function () {
//     expect(sumPaymentTotal("tipAmt")).toEqual(20);

//     billAmtInput.value = 200;
//     tipAmtInput.value = 40;

//     submitPaymentInfo();

//     expect(sumPaymentTotal("tipAmt")).toEqual(60);
//   });

//   it("should sum total bill amount of all payments on sumPaymentTotal()", function () {
//     expect(sumPaymentTotal("billAmt")).toEqual(100);

//     billAmtInput.value = 200;
//     tipAmtInput.value = 40;

//     submitPaymentInfo();

//     expect(sumPaymentTotal("billAmt")).toEqual(300);
//   });

//   it("should sum total tip percent on sumPaymentTotal()", function () {
//     expect(sumPaymentTotal("tipPercent")).toEqual(20);

//     billAmtInput.value = 100;
//     tipAmtInput.value = 20;

//     submitPaymentInfo();

//     expect(sumPaymentTotal("tipPercent")).toEqual(40);
//   });

//   afterEach(function () {
//     billAmtInput.value = "";
//     tipAmtInput.value = "";
//     paymentTbody.innerHTML = "";
//     summaryTds[0].innerHTML = "";
//     summaryTds[1].innerHTML = "";
//     summaryTds[2].innerHTML = "";
//     serverTbody.innerHTML = "";
//     allPayments = {};
//     paymentId = 0;
//   });
// });
