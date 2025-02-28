import React from 'react'

function visit() {
  return (
   <section className="container mx-auto p-4 my-8">
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-left">VISITE VIRTUELLE JAPAN MOTORS TOGO</h2>
       
      </div>
      <div className="border-t-8 border-[#c3002f] w-1/6 mb-10"></div> {/* Séparateur rouge */}

     <iframe
  className="w-full max-w-full h-[430px]"
  src="https://www.klapty.com/tour/tunnel/Ne30Cj4PJb"
  frameBorder="0"
  allowFullScreen
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
></iframe>

   </section>
    
  )
}

export default visit