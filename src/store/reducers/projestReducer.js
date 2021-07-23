const initState = {
  projects: [
    {
      image:
        "https://betterme.world/articles/wp-content/uploads/2020/06/shutterstock_392510389-1024x557.jpg",
      name: "Clean food",
      detail:
        "เรื่อง “ขา” ถือว่าเป็นปัญหาใหญ่ของสาว ๆ เช่นกันค่ะ ใครขาเล็กขาเรียวก็โชคดีไป แต่ถ้าขาใหญ่นี่ก็ลำบากอยู่เหมือนกันนะคะ จะใส่กางเกงขาสั้นก็ไม่มั่นใจ ถ่ายรูปทีก็บิดแล้วบิดอีกกว่าจะได้มุมผอม ๆ เรามาแก้ที่ต้นเหตุด้วยการออกกำลังกายกับท่าลดขาเรียวใน 30 วันกันดีกว่า แต่ละท่าทำตามได้ไม่ยากเลยค่ะ ทุกคนจะได้มีขาสวย ๆ เพิ่มความมั่นใจให้ตัวเอง อ่านต่อได้ที่ https://www.wongnai.com/articles/exercise-listing?ref=ct",
      harf: "https://www.facebook.com/CleanFoodKitchenNakonpathom/",
    },
    {
      image:
        "https://onnitacademy.imgix.net/wp-content/uploads/2019/01/backopener.jpg",
      name: "About me",
      detail:
        "ผู้หญิงส่วนใหญ่ เมื่อเวลาอยากลดน้ำหนัก มักจะไปโฟกัสที่การออกกำลังลดแขน ลดขา ลดหน้าท้องให้กลับมาฟิตแอนด์เฟิร์ม แต่หลายคนอาจมองข้าม “เนื้อบริเวณแผ่นหลัง” กันไป ซึ่งหากมาออกกำลังกายสร้างกล้ามเนื้อบริเวณนี้ได้ นอกจากจะช่วยทำให้สาวๆ ดูหุ่นเฟิร์มมากยิ่งขึ้น เวลามีใครมองจากด้านหลังก็ไม่ต้องกังวล ก็ดูเป๊ะ ฟิตสุดๆ แล้ว ยังเป็นอีกวิธีที่ช่วยทำให้น้ำหนักลดลงได้ด้วยนะ ว่าแล้ววันนี้เลยขน 5 ท่าออกกำลังกาย บอกลาลำตัวหนาๆ มาสร้างกล้ามเนื้อหลังให้ฟิตเฟิร์มมาฝากให้เพื่อนๆ ได้ทำกันดู มาดูกันดีกว่าว่ามีท่าอะไรบ้าง",
      harf: "https://www.facebook.com/profile.php?id=100009560280771",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("Add project", action.project);
      return state;
    case "ADD_PROJECT_ERROR":
      console.log("Add project_error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
