// "use client";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import Link from "next/link";
// import React from "react";
// import './Cart.css';
// import productData from "../Components/ProductData";

// export default function Basic() {
//   return (
//     <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol>
//             <MDBCard>
//               <MDBCardBody className="p-4">
//                 <MDBRow>
//                   <MDBCol lg="7">
//                     <MDBTypography tag="h5">
//                       <Link href="/" className="text-body">
//                         <MDBIcon fas icon="long-arrow-alt-left me-2" />
//                         Back to Home
//                       </Link>
//                     </MDBTypography>

//                     <hr />

//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <div>
//                         <p className="mb-1">Shopping cart</p>
//                         <p className="mb-0">You have 4 items in your cart</p>
//                       </div>
//                     </div>

//                     {/* Mapping cart Products */}

//                     {productData.map((product, i) => {
//                       return (
//                         <MDBCard className="mb-3">
//                           <MDBCardBody>
//                             <div className="d-flex justify-content-between">
//                               <div className="d-flex flex-row align-items-center">
//                                 <div>
//                                   <MDBCardImage
//                                     src={product.imgUrl1}
//                                     fluid
//                                     className="rounded-3 productImg"
//                                     style={{ width: "120px" }}
//                                     alt="Shopping item"
//                                   />
//                                 </div>
//                                 <div className="ms-3">
//                                   <MDBTypography tag="h5" className="productName">
//                                      {product.name}
//                                   </MDBTypography>
//                                   {/* <p className="small mb-0">256GB, Navy Blue</p> */}
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center">
//                                 <div style={{ width: "50px" }}>
//                                   <MDBTypography
//                                     tag="h5"
//                                     className="fw-normal mb-0"
//                                   >
//                                     2
//                                   </MDBTypography>
//                                 </div>
//                                 <div style={{ width: "80px" }}>
//                                   <MDBTypography tag="h5" className="mb-0">
//                                     &#8377;{product.price}
//                                   </MDBTypography>
//                                 </div>
//                                 <a href="#!" style={{ color: "#cecece" }}>
//                                   <MDBIcon fas icon="trash-alt" />
//                                 </a>
//                               </div>
//                             </div>
//                           </MDBCardBody>
//                         </MDBCard>
//                       );
//                     })}
//                   </MDBCol>

//                {/* Checkout Card */}
//                   <MDBCol lg="5">
//                     <MDBCard className="bg-primary text-white rounded-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                           <MDBTypography tag="h5" className="mb-0">
//                             Card Total :{" "}
//                             <span className="mb-2">&#8377;4818.00</span>
//                           </MDBTypography>
//                         </div>

//                         <hr />
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Subtotal</p>
//                           <p className="mb-2">&#8377;4798.00</p>
//                         </div>

//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Shipping</p>
//                           <p className="mb-2">&#8377;20.00</p>
//                         </div>

//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Total(Incl. taxes)</p>
//                           <p className="mb-2">&#8377;4818.00</p>
//                         </div>

//                         <MDBBtn color="info" block size="lg">
//                           <div className="d-flex justify-content-center">
//                             <span>
//                               Proceed to Checkout{" "}
//                               <i className="fas fa-long-arrow-alt-right ms-2"></i>
//                             </span>
//                           </div>
//                         </MDBBtn>
//                       </MDBCardBody>
//                     </MDBCard>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }
