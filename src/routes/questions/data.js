import image_01 from "./images/kantor-gubernur-sumutt.jpg";
import image_02 from "./images/kantor-bupati-nias.jpg";
import image_03 from "./images/tor-sibohi.jpg";
import image_04 from "./images/makam-papan-tinggi.jpg";
import image_05 from "./images/tarutung.jpg";
import image_06 from "./images/jalan-laguboti.jpg";
import image_07 from "./images/padang-halaban.png";
import image_08 from "./images/puncak-galau.jpg";
import image_09 from "./images/kebun-teh-bah-butong-sidamanik.jpg";
import image_10 from "./images/pemandian-lau-timah.jpg";
import image_11 from "./images/danau-pondok-limo.jpg";
import image_12 from "./images/desa-lingga.jpg";
import image_13 from "./images/air-terjun-dua-warna-sibolangit.jpg";
import image_14 from "./images/bukit-lawang-ecotourism-ecoproject.jpg";
import image_15 from "./images/pantai-hilitasaro-toma.jpg";

const questions = [
  {
    id: 1,
    question: "Berapakah jumlah Kabupaten dan Kota di Provinsi Sumatera Utara?",
    answers: [30, 32, 33, 34],
    image: image_01,
    image_source: "https://kliksumut.com",
  },
  {
    id: 2,
    question: "Apakah nama Ibu Kota Kabupaten Nias?",
    answers: ["Gido", "Sirombu", "Afulu", "Lahewa"],
    image: image_02,
    image_source: "https://blog.showus.biz",
  },
  {
    id: 3,
    question: "Apakah nama Ibu Kota Kabupaten Tapanuli Selatan?",
    answers: ["Pintu Padang", "Aek Badak", "Sipirok", "Batang Toru"],
    image: image_03,
    image_source: "https://www.pariwisatasumut.net",
  },
  {
    id: 4,
    question: "Apakah nama Ibu Kota Kabupaten Tapanuli Tengah?",
    answers: ["Barus", "Pandan", "Sorkam", "Sibolga"],
    image: image_04,
    image_source: "https://phinemo.com",
  },
  {
    id: 5,
    question: "Apakah nama Ibu Kota Kabupaten Tapanuli Utara?",
    answers: ["Tarutung", "Situmeang", "Siborongborong", "Balige"],
    image: image_05,
    image_source: "https://www.sewukuto.id",
  },
  {
    id: 6,
    question: "Apakah nama Ibu Kota Kabupaten Toba Samosir?",
    answers: ["Laguboti", "Balige", "Porsea", "Pangururan"],
    image: image_06,
    image_source: "https://id.wikipedia.org",
  },
  {
    id: 7,
    question: "Apakah nama Ibu Kota Kabupaten Labuhanbatu?",
    answers: ["Kualamerbau", "Perbaungan", "Tanjungmedan", "Rantau Prapat"],
    image: image_07,
    image_source: "https://wisataterbaru.net",
  },
  {
    id: 8,
    question: "Apakah nama Ibu Kota Kabupaten Asahan?",
    answers: ["Tanjung Balai", "Simpangampat", "Kisaran", "Ulakmedan"],
    image: image_08,
    image_source: "https://www.itrip.id",
  },
  {
    id: 9,
    question: "Apakah nama Ibu Kota Kabupaten Simalungun?",
    answers: ["Pematang Siantar", "Sarimatondang", "Dalandolok", "Raya"],
    image: image_09,
    image_source: "https://www.itrip.id",
  },
  {
    id: 10,
    question: "Apakah nama Ibu Kota Kabupaten Dairi?",
    answers: ["Sidikalang", "Berastagi", "Sigalingging", "Parendean"],
    image: image_10,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 11,
    question: "Apakah nama Ibu Kota Kabupaten Mandailing Natal?",
    answers: ["Kotanopan", "Panyabungan", "Siabu", "Natal"],
    image: image_11,
    image_source: "https://jejaktrip.com",
  },
  {
    id: 12,
    question: "Apakah nama Ibu Kota Kabupaten Karo?",
    answers: ["Berastagi", "Sibolangit", "Kabanjahe", "Tigabinaga"],
    image: image_12,
    image_source: "https://silima-merga.blogspot.com/",
  },
  {
    id: 13,
    question: "Apakah nama Ibu Kota Kabupaten Deli Serdang?",
    answers: ["Sibolangit", "Belawan", "Tanjung Morawa", "Lubuk Pakam"],
    image: image_13,
    image_source: "https://www.tempatwisata.pro",
  },
  {
    id: 14,
    question: "Apakah nama Ibu Kota Kabupaten Langkat?",
    answers: ["Stabat", "Binjai", "Pangkalansusu", "Tanjungpura"],
    image: image_14,
    image_source: "https://www.itrip.id",
  },
  {
    id: 15,
    question: "Apakah nama Ibu Kota Nias Selatan?",
    answers: ["Hiliobolata", "Telukdalam", "Botohili", "Hilibafunua"],
    image: image_15,
    image_source: "https://portalwisata.co.id/",
  },
];

const questionOption1 = [1, 3, 14, 5, 7, 2, 9, 11, 13, 15];
const questionOption2 = [3, 1, 10, 5, 15, 9, 4, 2, 13, 7];
const questionOption3 = [2, 4, 5, 1, 14, 11, 6, 9, 8, 12];
const questionOption4 = [15, 13, 5, 7, 9, 11, 3, 10, 8, 4];
const questionOption5 = [8, 11, 15, 7, 9, 3, 13, 6, 10, 12];

export const generateQuestions = () => {
  const index = Math.floor(Math.random() * 5) + 1;
  switch (index) {
    case 1:
      return questionOption1.map((id) => questions.find((qn) => qn.id === id));
    case 2:
      return questionOption2.map((id) => questions.find((qn) => qn.id === id));
    case 3:
      return questionOption3.map((id) => questions.find((qn) => qn.id === id));
    case 4:
      return questionOption4.map((id) => questions.find((qn) => qn.id === id));
    case 5:
      return questionOption5.map((id) => questions.find((qn) => qn.id === id));
    default:
      return questionOption1.map((id) => questions.find((qn) => qn.id === id));
  }
};

export const answers = [
  {
    id: 1,
    answer: 33,
  },
  {
    id: 2,
    answer: "Gido",
  },
  {
    id: 3,
    answer: "Sipirok",
  },
  {
    id: 4,
    answer: "Pandan",
  },
  {
    id: 5,
    answer: "Tarutung",
  },
  {
    id: 6,
    answer: "Balige",
  },
  {
    id: 7,
    answer: "Rantau Prapat",
  },
  {
    id: 8,
    answer: "Kisaran",
  },
  {
    id: 9,
    answer: "Raya",
  },
  {
    id: 10,
    answer: "Sidikalang",
  },
  {
    id: 11,
    answer: "Panyabungan",
  },
  {
    id: 12,
    answer: "Kabanjahe",
  },
  {
    id: 13,
    answer: "Lubuk Pakam",
  },
  {
    id: 14,
    answer: "Stabat",
  },
  {
    id: 15,
    answer: "Telukdalam",
  },
];
