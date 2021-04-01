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
import image_16 from "./images/desa-bakara.jpg";
import image_17 from "./images/sumur-eluh-berru-tinambunen.jpg";
import image_18 from "./images/bukit-simarjarunjung.jpg";
import image_19 from "./images/pantai-pondok-permai.png";
import image_20 from "./images/masjid-jamik-indrapura.jpg";
import image_21 from "./images/batu-kapur-paranginan.jpeg";
import image_22 from "./images/pasar-sibuhuan.png";
import image_23 from "./images/twa-holiday-resort.jpg";
import image_24 from "./images/puncak-manalese.jpg";
import image_25 from "./images/kuburan-keramat-pulau-maose.jpg";
import image_26 from "./images/desa-bawomataluo.jpg";

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
    image_source: "https://silima-merga.blogspot.com",
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
    question: "Apakah nama Ibu Kota Kabupaten Nias Selatan?",
    answers: ["Hiliobolata", "Telukdalam", "Botohili", "Hilibafunua"],
    image: image_15,
    image_source: "https://portalwisata.co.id",
  },
  {
    id: 16,
    question: "Apakah nama Ibu Kota Kabupaten Humbang Hasundutan?",
    answers: ["Pakkat", "Baktiraja", "Dolok Sanggul", "Lintongnihuta"],
    image: image_16,
    image_source: "https://venuemagz.com",
  },
  {
    id: 17,
    question: "Apakah nama Ibu Kota Kabupaten Pakpak Bharat?",
    answers: ["Pangindar", "Kerajaan", "Siempat Rumbe", "Salak"],
    image: image_17,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 18,
    question: "Apakah nama Ibu Kota Kabupaten Samosir?",
    answers: ["Pangururan", "Nainggolan", "Palipi", "Simanindo"],
    image: image_18,
    image_source: "https://www.itrip.id",
  },
  {
    id: 19,
    question: "Apakah nama Ibu Kota Kabupaten Serdang Bedagai?",
    answers: ["Bandar Khalipah", "Sei Rampah", "Dolok Masihul", "Perbaungan"],
    image: image_19,
    image_source: "https://wisato.id",
  },
  {
    id: 20,
    question: "Apakah nama Ibu Kota Kabupaten Batu Bara?",
    answers: ["Tanjung Tiram", "Talawi", "Limapuluh", "Kisaran"],
    image: image_20,
    image_source: "https://www.itrip.id",
  },
  {
    id: 21,
    question: "Apakah nama Ibu Kota Kabupaten Padang Lawas Utara?",
    answers: ["Padang Bolak", "Hulu Sihapas", "Portibi", "Gunung Tua"],
    image: image_21,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 22,
    question: "Apakah nama Ibu Kota Kabupaten Padang Lawas?",
    answers: ["Sibuhuan", "Sosa", "Aeknabara", "Sosopan"],
    image: image_22,
    image_source: "https://wisataterbaru.net",
  },
  {
    id: 23,
    question: "Apakah nama Ibu Kota Kabupaten Labuhanbatu Selatan?",
    answers: ["Torgamba", "Kota Pinang", "Sungai Kanan", "Silangkitang"],
    image: image_23,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 24,
    question: "Apakah nama Ibu Kota Kabupaten Labuhanbatu Utara?",
    answers: ["Aek Natas", "Kualuh Hulu", "Aek Kanopan", "Marbau"],
    image: image_24,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 25,
    question: "Apakah nama Ibu Kota Kabupaten Nias Utara?",
    answers: ["Afulu", "Alasa", "Lahewa", "Lotu"],
    image: image_25,
    image_source: "https://www.andalastourism.com",
  },
  {
    id: 26,
    question: "Apakah nama Ibu Kota Kabupaten Nias Barat?",
    answers: ["Lahomi", "Mandrehe", "Sirombu", "Moro'o"],
    image: image_26,
    image_source: "https://www.andalastourism.com",
  },
];

const questionOption1 = [1, 3, 14, 22, 24, 26, 17, 11, 13, 15];
const questionOption2 = [17, 1, 21, 23, 25, 18, 4, 2, 13, 7];
const questionOption3 = [2, 4, 5, 24, 26, 19, 21, 9, 8, 12];
const questionOption4 = [15, 13, 5, 7, 9, 16, 25, 23, 21, 4];
const questionOption5 = [25, 23, 21, 19, 9, 3, 13, 6, 10, 12];
const questionOption6 = [16, 18, 20, 5, 7, 2, 9, 19, 21, 23];
const questionOption7 = [3, 19, 10, 5, 15, 9, 20, 22, 24, 26];
const questionOption8 = [18, 20, 22, 1, 14, 11, 6, 23, 25, 17];
const questionOption9 = [26, 24, 22, 20, 18, 11, 3, 10, 8, 19];
const questionOption10 = [8, 11, 15, 7, 17, 24, 22, 20, 18, 16];

const mapQuestions = (questionOption) => {
  return questionOption.map((id) => questions.find((qn) => qn.id === id));
};

export const generateQuestions = () => {
  const index = Math.floor(Math.random() * 10) + 1;
  switch (index) {
    case 1:
      return mapQuestions(questionOption1);
    case 2:
      return mapQuestions(questionOption2);
    case 3:
      return mapQuestions(questionOption3);
    case 4:
      return mapQuestions(questionOption4);
    case 5:
      return mapQuestions(questionOption5);
    case 6:
      return mapQuestions(questionOption6);
    case 7:
      return mapQuestions(questionOption7);
    case 8:
      return mapQuestions(questionOption8);
    case 9:
      return mapQuestions(questionOption9);
    case 10:
      return mapQuestions(questionOption10);
    default:
      return mapQuestions(questionOption1);
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
  {
    id: 16,
    answer: "Dolok Sanggul",
  },
  {
    id: 17,
    answer: "Salak",
  },
  {
    id: 18,
    answer: "Pangururan",
  },
  {
    id: 19,
    answer: "Sei Rampah",
  },
  {
    id: 20,
    answer: "Limapuluh",
  },
  {
    id: 21,
    answer: "Gunung Tua",
  },
  {
    id: 22,
    answer: "Sibuhuan",
  },
  {
    id: 23,
    answer: "Kota Pinang",
  },
  {
    id: 24,
    answer: "Aek Kanopan",
  },
  {
    id: 25,
    answer: "Lotu",
  },
  {
    id: 26,
    answer: "Lahomi",
  },
];
