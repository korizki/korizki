const { useState, useEffect } = React
const App = () => {
   const [activeTab, setActiveTab] = useState(2)
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
         {
            activeTab == 2 ? (<ExperienceContent />) : false
         }
         <Technical />
         <Footer />
      </div>
   )
}

const el = document.querySelector('#apps')
const root = ReactDOM.createRoot(el)
root.render(<App />)

const ExperienceContent = () => {
   const listExp = [
      {
         company: 'PT. Putra Perkasa Abadi',
         posisi: 'System Developer (Front End Dev)',
         periode: 'Aug 2022 - Now',
         location: 'Kutai Kartanegara, East Kalimantan',
         logo: 'ppa.png',
         list: [
            'Discussing with Group Leader for additional features or updates for existing Web Application - SS6 (Safe & Strong) Reporting System',
            'Learning existing and new Tech Stack that used in Teamwork Application Web then suggesting tech features for optimizing',
            'Code Maintaince includes fixing bug, write clean and readable code, and also doing test and make sure code running properly before deployment on Production repositories'
         ]
      },
      {
         company: 'PT. Bukit Asam Kreatif',
         posisi: 'Fleet Management System Dispatcher',
         location: 'Tanjung Enim, South Sumatera',
         periode: 'Apr 2021 - Aug 2022',
         logo: 'bak.png',
         list: [
            'Compile daily meeting reports and hourly Loader problems and report of mining production',
            'Monitor and ensure the Fleet Management System devices (Vehicle Mount Computer) in the hauler unit (Belaz) is working properly using MineDispatch Application',
            'Analyzing problems and performing maintenance activity for MineLink application and device by remote or direct on hand'
         ]
      },
      {
         company: 'PT. SatNetcom',
         posisi: 'Project Asistant Engineer',
         periode: 'Mar 2019 - Apr 2021',
         location: 'Tanjung Enim, South Sumatera',
         logo: 'snc.png',
         list: [
            'Ensure network availability on PIT / Minning Location for VMC in Loader (Shovel PC-3000) and Hauler (Belaz)',
            'Perform installation software and maintenance hardware of VMC (Vehicle Mount computer) and Mobile Tower',
            'Prepare daily work plans, monthly activity report, and ensuring All Production area are covered with BMSMinelink Network (Local Area Network)'
         ]
      },
   ]
   return (
      <div className="outex">
         {
            listExp.map((it, index) => (
               <React.Fragment>
                  <div key={index} className="cardex">
                     <div className="headex">
                        <img src={`../assets/${it.logo}`} />
                        <div>
                           <h4>{it.company}</h4>
                           <p className="blue"> {it.posisi}</p>
                           <div className="secondsec">
                              <p><i className="fas fa-map-marker-alt"></i> {it.location}</p>
                              <p><i className="fas fa-calendar"></i> {it.periode}</p>
                           </div>
                        </div>
                     </div>
                     <div className="jobtask">
                        <h4>Responsibilities</h4>
                        {
                           it.list.map((data, index) => (
                              <div key={index}>
                                 <i className="fas fa-circle"></i>
                                 <p >{data}</p>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </React.Fragment>
            ))
         }
      </div>
   )
}
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