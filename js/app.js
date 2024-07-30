const fetchQuote = async () => {
  const url = `https://api.quotable.io/random`;

  try {
    const response = await axios.get(url);
    const result = await response;

    const { content, author } = result.data;

    document.querySelector("#quote").textContent = `"${content}"`;
    document.querySelector(".author").textContent = author;
  } catch (error) {
    console.log(error);
  }
};

const fetchTime = () => {
  let time = new Date();
  let format = time.getHours(); // 24-hour format
  let hour = time.getHours() % 12 || 12; // Convert to 12-hour format
  let minutes = String(time.getMinutes()).padStart(2, "0");

  let period = "";

  if (format >= 5 && format <= 11) {
    period = "morning";
  } else if (format >= 12 && format <= 17) {
    period = "afternoon";
  } else {
    period = "evening";
  }

  document.querySelector(".timeday").textContent = `GOOD ${period} IT'S CURRENTLY`;
  document.querySelector(".hour").textContent = `${hour}:${minutes}`;
  let intervals = (60 - new Date().getSeconds()) * 1000 + 5;

  let background = document.querySelector(".bg");
  let icon = document.querySelector('.icon-day');

  if (period === "morning") {
    background.classList.add("morning");
    icon.classList.add('fa-sun');
  } else if (period === "afternoon") {
    background.classList.add("afternoon");
    icon.classList.add('fa-sun');
  } else {
    background.classList.add("evening");
    icon.classList.add('fa-moon');
  }

  setTimeout(fetchTime, intervals);
};

const fetchApiTime = async () => {
  const url = `https://worldtimeapi.org/api/ip`;

  try {
    const response = await axios.get(url);
    const data = await response;

    const {
      day_of_week,
      day_of_year,
      week_number,
      abbreviation,
    } = data.data;

    document.querySelector("#abb").textContent = `${abbreviation}`;
    document.querySelector("#day-week").textContent = `${day_of_week}`;
    document.querySelector("#day-year").textContent = `${day_of_year}`;
    document.querySelector("#week-number").textContent = `${week_number}`;
  } catch (error) {
    console.log(error);
  }
};

const fetchLocation = async () => {
  const url = `https://freegeoip.app/json/`;

  try {
    const response = await axios.get(url);
    const result = await response;
    const { region_name, country_code, city, country_name } = result.data;

    document.querySelector("#location").textContent = `in ${region_name}, ${country_code}`;
    document.querySelector("#current-timezone").textContent = `${country_name}/${city}`;
  } catch (error) {
    console.log(error);
  }
};

const rotateArrow = () => {
  document.querySelector(".fa-angle-down").classList.toggle("rotate");
};

const toggleInformation = () => {
  document.querySelector("#main-section").classList.toggle("transform");
  document.querySelector(".more-information").classList.toggle("transform");
  let more = document.querySelector(".click-more");

  if (more.firstChild.nodeValue === "More") {
    more.firstChild.nodeValue = "Less";
  } else {
    more.firstChild.nodeValue = "More";
  }
};

fetchQuote();
fetchTime();
fetchApiTime();
fetchLocation();

document.querySelector(".more").addEventListener("click", rotateArrow);
document.querySelector(".more").addEventListener("click", toggleInformation);
document.querySelector("#refresh").addEventListener("click", fetchQuote);
