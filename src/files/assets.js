import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";

/*export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};
*/
/*
export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]
*/

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Abhinav Dey",
    image: doc1,
    speciality: "Dentist",
    degree: "BDS",
    experience: "4 Years",
    about:
      "Dr. Abhinav Dey is dedicated to promoting oral health through preventive dental care, timely treatments, and patient education. He specializes in restorative procedures and dental hygiene awareness.",
    fees: 500,
    address: {
      line1: "17th Cross, MG Road",
      line2: "Bangalore, Karnataka",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Nikita Sharma",
    image: doc2,
    speciality: "Dentist",
    degree: "BDS",
    experience: "3 Years",
    about:
      "Dr. Nikita Sharma focuses on delivering compassionate and modern dental care. Her key areas include cosmetic dentistry and preventive treatments tailored to each patient's needs.",
    fees: 600,
    address: {
      line1: "5th Block, Koramangala",
      line2: "Bangalore, Karnataka",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Suraj Kashyap",
    image: doc3,
    speciality: "Dentist",
    degree: "BDS",
    experience: "1 Years",
    about:
      "Dr. Suraj Kashyap emphasizes the importance of dental hygiene and early diagnosis. He is known for his gentle approach and effective treatment strategies for young adults.",
    fees: 300,
    address: {
      line1: "Sector 15",
      line2: "Navi Mumbai, Maharashtra",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christina Reddy",
    image: doc4,
    speciality: "Pediatric Dentist",
    degree: "BDS",
    experience: "2 Years",
    about:
      "Dr. Christina Reddy has a friendly and comforting approach for children. She ensures every child receives proper oral care while educating parents on oral hygiene.",
    fees: 400,
    address: {
      line1: "Banjara Hills",
      line2: "Hyderabad, Telangana",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Mehra",
    image: doc5,
    speciality: "Orthodontist",
    degree: "BDS, MDS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Mehra specializes in braces, aligners, and correcting dental alignment. She combines aesthetics with functionality to enhance patient smiles.",
    fees: 700,
    address: {
      line1: "Sector 21",
      line2: "Chandigarh, Punjab",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Arjun Kapoor",
    image: doc6,
    speciality: "Endodontist",
    degree: "BDS, MDS",
    experience: "4 Years",
    about:
      "Dr. Arjun Kapoor is an expert in root canal treatments and conservative dentistry. He ensures pain-free procedures using modern tools and techniques.",
    fees: 600,
    address: {
      line1: "Salt Lake City",
      line2: "Kolkata, West Bengal",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Priya Nair",
    image: doc7,
    speciality: "General Dentist",
    degree: "BDS",
    experience: "4 Years",
    about:
      "Dr. Priya Nair provides complete dental care ranging from fillings to scaling and polishing. Her focus is on affordability and community dental health.",
    fees: 450,
    address: {
      line1: "Vyttila",
      line2: "Kochi, Kerala",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy Das",
    image: doc8,
    speciality: "Prosthodontist",
    degree: "BDS, MDS",
    experience: "3 Years",
    about:
      "Dr. Timothy Das helps restore oral function through dentures, crowns, and bridges. His goal is to improve chewing efficiency and overall oral quality of life.",
    fees: 500,
    address: {
      line1: "Ashok Nagar",
      line2: "Chennai, Tamil Nadu",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Asha Roy",
    image: doc9,
    speciality: "Periodontist",
    degree: "BDS, MDS",
    experience: "1 Years",
    about:
      "Dr. Asha Roy treats gum diseases and specializes in scaling, root planning, and surgical procedures related to gum care. She advocates early periodontal care.",
    fees: 400,
    address: {
      line1: "Rajendra Nagar",
      line2: "Patna, Bihar",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeet Bhandari",
    image: doc10,
    speciality: "Pediatric Dentist",
    degree: "BDS",
    experience: "2 Years",
    about:
      "Dr. Jeet Bhandari makes dental visits fun and comfortable for children. His focus lies in cavity prevention, dental sealants, and early habit counseling.",
    fees: 450,
    address: {
      line1: "Sector 17",
      line2: "Gurgaon, Haryana",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoya Khan",
    image: doc11,
    speciality: "Orthodontist",
    degree: "BDS, MDS",
    experience: "4 Years",
    about:
      "Dr. Zoya Khan helps patients achieve confident smiles with customized orthodontic solutions including braces and clear aligners for teens and adults.",
    fees: 700,
    address: {
      line1: "Aliganj",
      line2: "Lucknow, Uttar Pradesh",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Rakesh Sen",
    image: doc12,
    speciality: "Oral Surgeon",
    degree: "BDS, MDS",
    experience: "4 Years",
    about:
      "Dr. Rakesh Sen performs complex dental surgeries including wisdom tooth extraction and jaw corrections. He believes in painless and fast recovery.",
    fees: 800,
    address: {
      line1: "Gariahat",
      line2: "Kolkata, West Bengal",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Sneha Bhattacharya",
    image: doc13,
    speciality: "General Dentist",
    degree: "BDS",
    experience: "4 Years",
    about:
      "Dr. Sneha Bhattacharya is committed to providing affordable and effective dental care. She ensures all her patients understand and feel confident about their treatment.",
    fees: 450,
    address: {
      line1: "Beltola",
      line2: "Guwahati, Assam",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Rahul Raut",
    image: doc14,
    speciality: "Cosmetic Dentist",
    degree: "BDS",
    experience: "3 Years",
    about:
      "Dr. Rahul Raut enhances smiles through teeth whitening, veneers, and cosmetic bonding. His goal is to boost confidence through smile transformations.",
    fees: 650,
    address: {
      line1: "Shivajinagar",
      line2: "Pune, Maharashtra",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amrita Sinha",
    image: doc15,
    speciality: "Dentist",
    degree: "BDS",
    experience: "1 Years",
    about:
      "Dr. Amrita Sinha promotes preventive dentistry and early care for cavities and oral issues. She is known for her friendly attitude and attention to detail.",
    fees: 350,
    address: {
      line1: "Fraser Road",
      line2: "Patna, Bihar",
    },
  },
];

