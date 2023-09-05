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
         <Footer />
      </div>
   )
}

const el = document.querySelector('#apps')
const root = ReactDOM.createRoot(el)
root.render(<App />)
const EducationContent = props => {
   return (
      <div>

      </div>
   )
}

const Footer = () => {
   return (
      <div className="footer">
         <div>
            <a><i className="fab fa-linkedin"></i></a>
            <a><i className="fab fa-google"></i></a>
            <a><i className="fab fa-github"></i></a>
            <a><i className="fab fa-instagram"></i></a>
         </div>
         <p>Design inspiration by <a href="https://dribbble.com/tranmautritam" target="_blank">Tran Mau Tri Tam's </a>.</p>
      </div>
   )
}