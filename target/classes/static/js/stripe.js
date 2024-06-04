const stripe = Stripe('pk_test_51PAoUCP5oEoi7I0OVflSe0UYlxpFntwbtJYKw5YZBEoQuFDUjN0DOsJB5AbwdAGyRDq07vM3ToJikVsix9DcFOoK00RwxamQYX');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });