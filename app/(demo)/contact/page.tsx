import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full mx-auto py-20">
      {/* Conteneur principal des cartes de contact */}
      <div className="flex flex-col md:flex-row   rounded-lg overflow-hidden ">
        {/* Carte Email */}

        <div className="flex-1 p-6 text-center flex flex-col items-center border-r border-gray-300">
          <Phone className="w-20 h-20 text-[#c3002f] mb-2" />
          <h3 className="text-2xl font-bold">Contactez-nous <br /> par telephone</h3> <br />
          <p className="text-gray-700 dark:text-white">Rapide et efficace, pour toute demande, n&apos; hésitez pas à nous appeler au :</p>
          <br /> <p className="text-gray-700 dark:text-white">+228 22 27 85 54 / 22 27 85 55</p> <br />
          
          <a href="tel:+22822278554" className="flex items-center rounded-md shadow px-4 py-2 text-white bg-[#c3002f] hover:text-white ">
  appeler
</a>


        </div>


        <div className="flex-1 p-6 text-center flex flex-col items-center border-r border-gray-300">
          <Mail className="w-20 h-20 text-[#c3002f] mb-2" />
          <h3 className="text-2xl font-bold">Formulaire de contact</h3> <br />
          <p className="text-gray-700 dark:text-white">Utilisez le formulaire ci-dessous pour nous envoyer un message. Nous vous répondrons dans les plus brefs délais.</p>
         <br /> <p className="text-gray-700 dark:text-white">contact@japanmotorstogo.com</p>
         <br />
          
          <a href="mailto:contact@japanmotorstogo.com" className="flex items-center rounded-md shadow px-4 py-2 text-white bg-[#c3002f] hover:text-white ">
  Ecrire
</a>

        </div>

        {/* Carte Téléphone */}
        

        {/* Carte Adresse */}
        <div className="flex-1 p-6 text-center flex flex-col items-center">
          <MapPin className="w-20 h-20 text-[#c3002f] mb-2" />
          <h3 className="text-2xl font-bold">L&apos;agence Japan <br /> Motors Togo</h3> <br />
          <p className="text-gray-700 dark:text-white">
          Venez prendre un café ou un thé à l&apos;agence, nous serons ravis de vous accueillir à l&apos;adresse suivante :
          </p> <br />
          <p className="text-gray-700 dark:text-white">
            815, Bd. de l’Oti, à côté de l’Eglise Evangélique Presbytérienne Bè Kpota – 01 BP 4715 Lomé 1 Lomé – Togo
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-8 p-10 dark:bg-white " >
        {/* Carte Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.547668694644!2d1.248010412527231!3d6.1566821309288775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e363700fe9e7%3A0x82321a8220f5be7f!2sJapan%20Motors%2C%20Nissan%20TOGO!5e0!3m2!1sfr!2stg!4v1740329883472!5m2!1sfr!2stg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white dark:bg-black shadow-lg rounded-lg p-8 h-[500px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Contactez-nous</h2>
          <div className="border-t-4 border-[#c3002f] w-1/6 mb-6"></div>
          <form className="space-y-4">
            <input type="text" placeholder="Nom" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" required />
            <input type="text" placeholder="Objet" className="w-full p-3 border rounded-lg" required />
            <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-32" required></textarea>
            <button type="submit" className="w-full rounded-full bg-[#c3002f] text-white p-3 font-semibold hover:bg-red-700 transition">
              Envoyer
            </button>
          </form>
        </div>

        
      </div>

      <div className="w-full flex justify-center  mt-12">
      <div className="text-center">
  <h3 className="text-lg mb-8 font-bold">SUIVEZ-NOUS</h3>
  <div className="flex justify-center space-x-8">
    <Link
      href="https://www.facebook.com/japanmotorstogo"
      target="_blank"
      className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition"
    >
      <FaFacebook className="w-10 h-10" />
    </Link>
    <Link
      href="https://www.instagram.com/japanmotorstogo"
      target="_blank"
      className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-400 hover:border-pink-600 hover:bg-pink-600 hover:text-white transition"
    >
      <FaInstagram className="w-10 h-10" />
    </Link>
    <Link
      href="https://tg.linkedin.com/company/japanmotorstogo"
      target="_blank"
      className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-400 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition"
    >
      <FaLinkedin className="w-10 h-10" />
    </Link>
    <Link
      href="https://www.tiktok.com/@japanmotorstogo"
      target="_blank"
      className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-400 hover:border-black hover:bg-slate-400 hover:text-white transition"
    >
      <FaTiktok className="w-10 h-10" />
    </Link>
  </div>
</div>
</div>

              
    </div>
  );
}
