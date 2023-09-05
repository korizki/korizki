const { useState, useEffect } = React
const App = () => {
   const [activeTab, setActiveTab] = useState(3)
   const [listInfo, setListInfo] = useState([
      { title: 'Project', count: 15 },
      { title: 'Github Contr.', count: '> 2k' },
      { title: 'Used Libraries', count: 10 },
   ])
   return (
      <div>
         <div className="header">
            <i className="fas fa-bars"></i>
            <div>
               <img className="pp" src="../assets/pp.jpg" />
               <i className="fas fa-check-circle"></i>
            </div>
            <div>
               <h2>Rizki Ramadhan</h2>
               <p className="mtheader">System Developer (Front End) at <a href="https://ppa.co.id" target="_blank">Putra Perkasa Abadi</a></p>
               <p>Tech & Web Development Enthusiast, keep learning and practicing.</p>
            </div>
         </div>
         <div className="buttonarea">
            <button>Contact Me</button>
            <a>Follow</a>
         </div>
         <div className="infoarea">
            {
               listInfo.map((it, index) => (
                  <div key={index}>
                     <p>{it.title}</p>
                     <h4>{it.count}</h4>
                  </div>
               ))
            }
         </div>
         <div className="navs">
            <a
               className={activeTab == 1 ? 'active' : ''}
               onClick={e => setActiveTab(1)}
            >Project</a>
            <a
               className={activeTab == 2 ? 'active' : ''}
               onClick={e => setActiveTab(2)}
            >Experience</a>
            <a
               className={activeTab == 3 ? 'active' : ''}
               onClick={e => setActiveTab(3)}
            >Education</a>
         </div>
         {
            activeTab == 3 ? (<EducationContent />) : false
         }
         <Technical />
         <Footer />
      </div>
   )
}

const el = document.querySelector('#apps')
const root = ReactDOM.createRoot(el)
root.render(<App />)

const EducationContent = props => {
   const [listEdu, setListEdu] = useState([
      {
         universitas: 'Universitas Siber Asia',
         periode: 'Apr 2023 - now',
         icon: 'https://akupintar.id/documents/20143/0/120061378_110520754141084_6594683579243627143_n.jpg',
         jurusan: 'Bachelor Degree - Informatic Engineering',
         link: 'https://unsia.ac.id'
      },
      {
         universitas: 'AMIK AKMI Baturaja',
         periode: 'Agustus 2010 - Juli 2013',
         icon: 'https://www.akmi-baturaja.ac.id/wp-content/uploads/2018/12/logo-amik-akmi-baturaja-339x350.jpg',
         jurusan: 'Diploma - Informatic Engineering',
         link: 'https://www.akmi-baturaja.ac.id/'
      },
   ])
   return (
      <div className="edu">
         {
            listEdu.map((it, index) => (
               <div key={index} className="educard">
                  <img src={it.icon} width="50" />
                  <div>
                     <h4><a href={it.link} target="_blank">{it.universitas}</a></h4>
                     <div>
                        <a>{it.jurusan}</a>
                        <p>{it.periode}</p>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
   )
}
const Technical = () => {
   const [listSkill, setListSkill] = useState([
      'fab fa-react', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-vuejs', 'fab fa-php'
   ])
   return (
      <div className="skill">
         <h3>Tecnical Skill's</h3>
         <div>
            {
               listSkill.map((it, index) => (
                  <i key={index} className={it}></i>
               ))
            }
            <img src="../assets/lodash.png" className="lodash" />
            <img src="../assets/jquery.png" />
            <img src="../assets/ci.png" />
            <img src="../assets/sql.png" />
            <img src="../assets/next.png" className="next" />
            <img src="../assets/chartjs.svg" />
            <img src="../assets/sheet.png" />
         </div>
      </div>
   )
}
const Footer = () => {
   const [listSocmed, setListSocmed] = useState([
      { icon: 'fab fa-linkedin' },
      { icon: 'fab fa-google' },
      { icon: 'fab fa-github' },
      { icon: 'fab fa-instagram' }
   ])
   return (
      <div className="footer">
         <div>
            {
               listSocmed.map((it, index) => (
                  <a><i className={it.icon}></i></a>
               ))
            }
         </div>
         <p>Design inspiration by <a href="https://dribbble.com/tranmautritam" target="_blank">Tran Mau Tri Tam's </a></p>
      </div>
   )
}