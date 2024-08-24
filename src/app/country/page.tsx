// "use server";
const Davlatlar = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    return [];
  }
};

const Card = async () => {
  const data = await Davlatlar();
  console.log(data);
};

export default Card;
