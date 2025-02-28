import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carte Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.547668694644!2d1.248010412527231!3d6.1566821309288775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e363700fe9e7%3A0x82321a8220f5be7f!2sJapan%20Motors%2C%20Nissan%20TOGO!5e0!3m2!1sfr!2stg!4v1740329883472!5m2!1sfr!2stg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Carte de contact */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col h-[300px] justify-center">
        <h2 className="text-2xl mb-4 font-bold text-left">CONTACTEZ-NOUS</h2>
        <div className="border-t-8 border-[#c3002f] w-1/6 mb-10"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#c3002f]" />
              <p className="text-lg text-gray-700">
              815, Bd. de l’Oti, à côté de l’Eglise Evangélique Presbytérienne Bè Kpota – 01 BP 4715 Lomé 1 Lomé – Togo

              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#c3002f]" />
              <p className="text-lg text-gray-700">+228 22 27 85 54 / 22 27 85 55
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-[#c3002f]" />
              <p className="text-lg text-gray-700">contact@japanmotorstogo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
