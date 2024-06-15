const instrumentos = [
    {
       id:1,
       nombre:"Yamaha RDP0F5 HOR Batería acústica Rydeen, Hot Red",
       precio:37252.12,
       descripcion:"Juego de batería de 5 tambores. Color rojo candente",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6d335e3403f96dc6139a885910f69b8bc646589c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/3B72154A6CC24603AAAA86320A0FCED8_12073_a4c3074fd11503c2b4df1b273afdad42.jpg",
       categoria: "baterías-acústicas"

    },
    {
       id:2,
       nombre:"RDP2F5 PB Batería acústica Rydeen, Plateado brillante Bombo 22",
       precio:39524.41,
       descripcion:"Juego de batería de 5 tambores. Color plateado escarchado",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ba23367618cad140a84f6a2e0979480565744ae8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/RDP0F5%20SGL.jpg",
       categoria: "baterías-acústicas"
    },
    {
       id:3,
       nombre:"DTX452K Bateria electrónica",
       precio:70538.32,
       descripcion:"DTX452K Bateria electrónica",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2tDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e648633b5e02acdad26489118d7d1f833e51aefc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/DTX452K.jpg",
       categoria: "baterías-eléctricas"
    },
    {
       id:4,
       nombre:"VAD103 Bateria electroacústica DESING KIT",
       precio:203522.86,
       descripcion:"VAD103 Bateria electrónica",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3dlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d11b4a0f4c760bdf5af50a863b11100cf68d7784/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/vad103_main.jpg",
       categoria: "baterías-eléctricas"
    },
    {
       id:5,
       nombre:"CCDU141620 Classics custom dual set",
       precio:44174.93,
       descripcion:"Meinl Juegos de platillos",
       img:"https://rvb-img.reverb.com/image/upload/s--1mM3RIC1--/f_auto,t_large/v1630938948/isapau3qidtortnm2fws.jpg",
       categoria: "platillos"
    },
    {
       id:6,
       nombre:"CC-141620+18 Set de platillos Custom Classic (5)",
       precio:43204.41,
       descripcion:"Meinl Custom Juegos de platillos",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaG9EIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--13bffe36c707b62794f47da94e1b0be26825e00f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/91VQAQH4PaL._AC_SL1500_.jpg",
       categoria: "platillos"
    },
    {
       id:7,
       nombre:"TXR5AW Bolillos Forward 5A RAW",
       precio:932.20,
       descripcion:"Bolillos y Brochas",
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzRhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bb8961cc3e61b915ea2e0a3ff23d9165055fd0cd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lKYm05dVpRWTdCbFE2REdkeVlYWnBkSGxKSWd0alpXNTBaWElHT3daVU9ndGxlSFJsYm5SQUJ6b0pZM0p2Y0VraUVEVXpPSGcxTXpnck1Dc3dCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e3b1bb34a5d73b2dd871b297653c542bc5667228/txr5aw_detail2_transparent.png",
       categoria: "accesorios"
    },
    {
       id:8,
       nombre:"MDH DRUM Almohadillas amortiguadoras de Miel",
       descripcion:"Apagadores DRUM HONEY DAMPER PADS",
       precio:710.81,
       img:"https://assets-instrumentosgiraldez.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2tMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--41e8844c7b4a0ee5686ef42489f849ad4005189d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRERVek9IZzFNemdHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lLZDJocGRHVUdPd1pVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzR1ZEb0xaWGgwWlc1MFFBYzZDV055YjNCSkloQTFNemg0TlRNNEt6QXJNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--eec315e827716bf06e720ace9b9862f1973e7a15/MEINL-Cymbals-Drum-Honey-MDH_5a3f7f5_600x600@2x.jpg",
       categoria: "accesorios"
    },
 ];

 export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(instrumentos);
    }, 2000);
  });
  
  export const getProduct = (id) => {

    return new Promise((resolve) =>{
      const product = instrumentos.find((prod) => prod.id == id);
      setTimeout(() => {
         resolve(product)
      }, 1000);
   }); 
  };


