// import React, { useState,useEffect } from "react";
// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import Rating from "@mui/material/Rating";
// import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
// import MessageIcon from "@mui/icons-material/Message";
// import AttachmentIcon from "@mui/icons-material/Attachment";
// import User from "../../assets/images/girl_user.jfif";
// import GirlUser from "../../assets/images/girl_user.jfif";
// import './../../style/info.scss'
// import { getService } from '../../Services/services';

// const feedback = [
//   {
//     cusotmer_pic: User,
//     cusotmer_name: "John Doe",
//     cusotmer_food: "SellerID: w47w487w857w856",
//     order_data: "February 24, 2022",
//     customer_rating: 3,
//     cusotmer_feedback:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
//     customer_message: 16,
//     cusotmer_pin: 3,
//   },
//   {
//     cusotmer_pic: GirlUser,
//     cusotmer_name: "Leena dora",
//     cusotmer_food: "SellerID: w47w487w857w856",
//     order_data: "February 25, 2022",
//     customer_rating: 5,
//     cusotmer_feedback: "Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
//     customer_message: 53,
//     cusotmer_pin: 12,
//   },
// ];

// const FeedbackReview = () => {
//   const [value, setValue] = useState(2);
//   const [rows, setrows] = React.useState([])

//   let allList = []
//   const getAllFeedbacks = async () => {
//     let list = []

//     // setLoading(true)
//     const querySnapshot = await getService("Chat")

//     querySnapshot.forEach((doc) => {
//       list.push({
//         id: doc.id,

//         ...doc.data()
//       })
//       console.log("🚀 ~ file: FeedbackReview.js ~ line 54 ~ querySnapshot.forEach ~ list", list)
//     });
//     const newList = list.map(({ categories, ...rest }) =>
//       ({ ...rest, category: categories.map(el => el.category) }))
//     // list.map((item) => {
//     //   item?.prsqS4IraGeH5eP9ysnfNkVoUFu2.map((subitems) => {
//     //     allList.push(subitems)
//     //   })
//     // })   
//      console.log("🚀 ~ file: FeedbackReview.js ~ line 61 ~ getAllFeedbacks ~ allList", allList)

//     setrows(allList)
  
//   }
//   useEffect(() => {
//     // if(!openPopup){
//       getAllFeedbacks()
//     // }
//   }, [])
//   return (
//     <div>
//       {feedback.map((item) => {
//         return (
//           <Stack
//             direction="row"
//             spacing={2}
//             key={item.customer_message}
//             style={{
//               background: "#ffff",
//               padding: "25px",
//               marginBottom: "20px",
//               borderRadius: '10px'
//             }}
//           >
//             <Avatar
//             className="user_avatar"
//               alt="Remy Sharp"
//               src={item.cusotmer_pic}
//               // sx={{ width: 44, height: 44 }}
//             />
//             <div>
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span style={{ display: "flex" }}>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     component="div"
//                     style={{ marginRight: "35px" }}
//                   >
//                     {item.cusotmer_name}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     component="div"
//                     style={{ color: "#ca2129" }}
//                   >
//                     {item.cusotmer_food}
//                   </Typography>
//                 </span>
//                 <Rating
//                   name="read-only"
//                   value={item.customer_rating}
//                   readOnly
//                 />
//               </div>
//               <div style={{ display: "flex" }}>
//                 <InsertInvitationIcon />
//                 <Typography variant="body1" gutterBottom component="div">
//                   {item.order_data}
//                 </Typography>
//               </div>
//               <Typography variant="body1" gutterBottom component="div">
//                 {item.cusotmer_feedback}
//               </Typography>
//             </div>
//           </Stack>
//         );
//       })}
//     </div>
//   );
// };

// export default FeedbackReview;
