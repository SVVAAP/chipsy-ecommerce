// import React from 'react';
// import { loadScript } from './utils';

// class RazorpayCheckout extends React.Component {
//   componentDidMount() {
//     loadScript('https://checkout.razorpay.com/v1/checkout.js', () => {
//       const options = {
//         key: 'rzp_test_cZ9N7oK6kOZRyp',
//         amount: '50000',
//         currency: 'INR',
//         name: 'Acme Corp',
//         description: 'Test Transaction',
//         image: 'https://example.com/your_logo',
//         order_id: 'order_IluGWxBm9U8zJ8',
//         handler: function (response) {
//           alert(response.razorpay_payment_id);
//           alert(response.razorpay_order_id);
//           alert(response.razorpay_signature);
//         },
//         prefill: {
//           name: 'Gaurav Kumar',
//           email: 'gaurav.kumar@example.com',
//           contact: '9000090000',
//         },
//         notes: {
//           address: 'Razorpay Corporate Office',
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.on('payment.failed', function (response) {
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
//       });

//       document.getElementById('rzp-button1').onclick = function (e) {
//         rzp1.open();
//         e.preventDefault();
//       };
//     });
//   }

//   render() {
//     return Pay;
//   }
// }

// export default RazorpayCheckout;