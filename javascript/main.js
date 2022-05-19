Vue.createApp({
    data() {
      return {
        header: {
            hallo: "-Haloo, kenalin aku",
            nama: "Riki Rasuli",
            deskripsi: "Aku merupakan salah satu mahasiswa di Universitas Ahmad Dahlan Yogyakarta, yang sekarang sedang menuntut ilmu di jurusan sistem informasi",
            perkenalan: "Berikut sedikit perkenalan singkat tentang diriku...",
            bio: ["Tanggal Lahir : 4 September 2000", "Umur : 21", "Hobi : Rebahan", "Email : rikirasuli0@gmail.com", "Nomor Telpon : +62-895-3487-47864", "Alamat : Karawang"],
        },
        tabel: {
            judul:"Beberapa Skill",
            deskripsi:"Pada bagian ini, berisikan skill skill yang saya miliki selama masa pendidikan saya - Hingga sekarang.",
            thead:["No.","Skill","Kemampuan"],
            tabel_data: [
                {
                    skill:"Microsoft Word",
                    kemampuan:"Advance"
                },
                {
                    skill:"Microsoft Power Point",
                    kemampuan:"Advance"
                },
                {
                    skill:"Microsoft Excell",
                    kemampuan:"Advance"
                },
                {
                    skill:"HTML",
                    kemampuan:"Intermediatte"
                },
                {
                    skill:"CSS",
                    kemampuan:"Intermediatte"
                },
                {
                    skill:"PHP",
                    kemampuan:"Intermediatte"
                },
                {
                    skill:"Javascript",
                    kemampuan:"Intermediatte"
                },
            ]
        },
        artik   : {
            judul: "Artikel Pribadi",
            deskripsi:"kalo ini, kumpulan artikel yang pernah saya buat sampai sekarang, silahkan dibaca yaa",
            
        },
        kontak: {
            judul:"Kontak",
            deskripsi:"Kalian mau mengetahui info tentang diriku lebih lanjut?, Bisa kirim email disamping yaa"
        },
    
        artikel: [],
        article: null,

      };
    },
    methods: {
      getArticle()
      {
        axios
          .get(
            src="../artikel/artikel.json"
            )
          .then((res) => {
            console.log(res.data);
            this.artikel = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getDataMarkdown()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const artikel = urlParams.get('article');        
        var converter = new showdown.Converter();
        console.log(artikel);
        axios
          .get(
            src="../artikel/"+artikel
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() { 
      this.getArticle(),
      this.getDataMarkdown()
    },
  }).mount("#app");