import app, { db } from "./firebaseConfig";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// -------------------------
// setDoc not asycnhronous - we add then in the submit - not working
// export const postGiveStuffFormData = (user, type, bags) => {
//   const userGiveStuffFormRef = doc(db, `giveStuffForm/${user}`);
//   const userGiveStuffData = {
//     created: serverTimestamp(),
//     user: user,
//     type: type,
//     bags: bags,
//   };
//   return setDoc(userGiveStuffFormRef, userGiveStuffData, {
//     merge: true,
//   });
// };

// -------------------------
// setDoc not asycnhronous - we add then in the submit - not working
export const postGiveStuffFormData = (
  user,
  type,
  bags,
  helpGroup,
  street,
  city,
  postCode,
  phone,
  date,
  time,
  note
) => {
  const userGiveStuffFormRef = doc(db, "giveStuffForm", "givestuff4");
  const userGiveStuffData = {
    created: serverTimestamp(),
    user: user.email,
    type: type,
    bags: bags,
    helpGroup: helpGroup,
    street: street,
    city: city,
    postCode: postCode,
    phone: phone,
    date: date,
    time: time,
    note: note,
  };
  return setDoc(userGiveStuffFormRef, userGiveStuffData);
};

// // -------------------------
// setDoc with async await - not working
// export const postGiveStuffFormData = async (
//   user,
//   type,
//   bags,
//   helpGroup,
//   street,
//   city,
//   postCode,
//   phone,
//   date,
//   time,
//   note
// ) => {
//   const userGiveStuffFormRef = doc(db, `giveStuffForm/${user.email}`);
//   const userGiveStuffData = {
//     created: serverTimestamp(),
//     user: user.email,
//     type: type,
//     bags: bags,
//     helpGroup: helpGroup,
//     street: street,
//     city: city,
//     postCode: postCode,
//     phone: phone,
//     date: date,
//     time: time,
//     note: note,
//   };
//   try {
//     return await setDoc(userGiveStuffFormRef, userGiveStuffData, {
//       merge: true,
//     });
//   } catch (error) {
//     console.log("postError", error);
//   }
// };

// -------------------------
// setDoc with then - not working
// export const postGiveStuffFormData = (
//   user,
//   type,
//   bags,
//   helpGroup,
//   street,
//   city,
//   postCode,
//   phone,
//   date,
//   time,
//   note
// ) => {
//   const userGiveStuffFormRef = doc(db, `giveStuffForm/${user}`);
//   const userGiveStuffData = {
//     created: serverTimestamp(),
//     user: user.email,
//     type: type,
//     bags: bags,
//     helpGroup: helpGroup,
//     street: street,
//     city: city,
//     postCode: postCode,
//     phone: phone,
//     date: date,
//     time: time,
//     note: note,
//   };
//   return setDoc(userGiveStuffFormRef, userGiveStuffData, {
//     merge: true,
//   })
//     .then(() => console.log("value added to database"))
//     .catch((error) => console.log(error));
// };

// --------------------------
// add doc made asynchronous in submit - not working
// export const postGiveStuffFormData = (
//   user,
//   type,
//   bags,
//   helpGroup,
//   street,
//   city,
//   postCode,
//   phone,
//   date,
//   time,
//   note
// ) => {
//   return addDoc(collection(db, "giveStuffForm"), {
//     created: serverTimestamp(),
//     user: user.email,
//     formData: {
//       type: type,
//       bags: bags,
//       helpGroup: helpGroup,
//       street: street,
//       city: city,
//       postCode: postCode,
//       phone: phone,
//       date: date,
//       time: time,
//       note: note,
//     },
//   });
// };
