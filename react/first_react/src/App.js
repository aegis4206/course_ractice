import React from 'react';
import { Routes, Route, Link  } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const Home = () => (
    <div>
        <h2>陳俊佑</h2>
        <p>目前剛從科技業離職自學想轉職前端!!以下為簡略的自我介紹，詳細請點選關於我~</p>
        <h2>使用中程式語言以及工具</h2>
        <ul className='list-inline'>
            <li className='list-inline-item'><Icon name='html5' size='big'></Icon>Html</li>
            <li className='list-inline-item'><Icon name='css3' size='big'></Icon>CSS</li>
            <li className='list-inline-item'><Icon name='js square' size='big'></Icon>Jquery</li>
            <li className='list-inline-item'><Icon name='node js' size='big'></Icon>Node.js</li>
            <li className='list-inline-item'><Icon name='npm' size='big'></Icon>Npm</li>
            <li className='list-inline-item'><Icon name='react' size='big'></Icon>React</li>
            <li className='list-inline-item'><Icon name='git' size='big'></Icon>Git</li>
            <li className='list-inline-item'><Icon name='github' size='big'></Icon>GitHub</li>
            <li className='list-inline-item'><Icon name='database' size='big'></Icon>Firebase</li>
        </ul>

        <h3>工作經歷</h3>
        <img className='w-100' src='http://aegis4206.tplinkdns.com/resume/demo.jpg' alt='demo'></img>
        <hr></hr>
        <h3>能力</h3>
        <img className='w-100' src='http://aegis4206.tplinkdns.com/resume/ability.jpg' alt='ability'></img>
    </div>
);

const About = () => (
    <div>
        <h2>關於我-自傳</h2>
        <hr></hr>
        <p>我是來自屏東縣的純樸鄉村鹽埔鄉陳俊佑，在家中排行老么上有兩位姐姐，由於是家中孩子中唯一的男生，且家中爸爸觀念較為傳統守紀律，所以對我的品德教育非常嚴苛，而媽媽觀念則較為開放民主，許多事都讓我做決定居多，培養我獨立思考的能力。</p>
        <p>大學就讀於正修工管系，在求學過程中，經由學校林邦傑老師介紹，去康熙科系公司實習，印象深刻的一次是去台中大魯閣幫忙百貨公司安裝POS機，實習中讓我學會了一個團隊如何執行一個專案，與其公司經營的方式。</p>
        <p>而在大學中，亦參加系上的機器人團隊，並代表系上去參加大專院校的比賽，其中我負責的項目是mBot機器人的搬運競速與循跡競速，mBot主要是透過scratch語言所開發的圖形方塊設計界面，利用拉動圖形方塊的方式來設計整個架構，當然亦可用純程式語言編輯，在搬運競速當中自學了App Inventor 2來設計一個以藍芽模組控制mBot的App，以取代舊型的紅外線遙控器來提升整體準確度與可操控性。</p>
        <p>大學專題中，則是為一間在高雄的餐廳設計一個介紹網站，利用Wordpress來架設網站。而在大四實習，經邦傑老師介紹以產學合作方式來抵免學分，協助一間生產鋁窗工廠開發倉管程式，因該工廠從日本引進的ASRS自動倉儲，且設備並無記帳功能，所以從中做一套MySQL+PHP+APP的倉儲管理系統，讓公司可以直接以平板電腦或手機方式進行管理作業，也因此學習到頗多軟體的應用設計與程式邏輯。</p>
        <p>研究所就讀於正修工管系，在研究所階段，從大學的大班制變成只有十人的小班制，從團體報告變成個人報告，且教授對報告內容較為嚴苛，不僅訓練了我的專業技能，更磨練了我的抗壓能力。而我論文主題是物流中心揀貨無人搬運車之派車法則最適化研究、指導教授為陳君涵老師，探討自動物料搬運系統於物流中心的揀貨過程，利用系統模擬Arena Simulation (SIMAN語言)軟體，針對動態的派車法則進行系統模擬，以系統車數以及派車法則的變化，比較不同的無人搬運車系統控制策略，並進一步的討論出其不同策略所產生的績效。</p>
        <p>出社會第一份工作為台灣大幅高科技設備有限公司的軟體規劃工程師(軟體EG)，進公司約兩年多，主要負責目前半導體新規客戶的軟體規劃(系統分析)，實績有PSI New Fab、PSMC P3 STK替換(原村田系統)、PSMC P5 New Fab，以及輔助FPD制御控制相關改造案。</p>
        <p>第二份工作為群創光電的製程設備工程師，進公司約7個月，主要負責Rubbing機台的製程與機台保養改造。以我的求學過程來看，可以發現我對未知的事有求知心，亦不吝對學習付出，相信能將我的經驗與心態應用在工作上。</p>
        <hr></hr>
        <h3>專題餐廳網站截圖</h3>
        <img className='w-100' src='http://aegis4206.tplinkdns.com/resume/webpreview.jpg' alt='網頁預覽'></img>
        <hr></hr>
        <h3>倉儲系統APP截圖</h3>
        <img className='w-100' src='http://aegis4206.tplinkdns.com/resume/webpreview_1.jpg' alt='網頁預覽_1'></img>
    </div>
);

const Projects = () => (
    <div>
        <h2>歡迎來到我的作品集展示網站！</h2>
        <p>這裡收錄了我在前端開發領域中的部分作品，包括 React、Jquery、Firebase、Bootstrap、Semantic...等應用。</p>
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品1</h5>
                    <p className="card-text">留言板(React+Firebase)歡迎刪減測試</p>
                    <a href="http://aegis4206.tplinkdns.com/react/memo/build/" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品2</h5>
                    <p className="card-text">Github用戶搜尋API串接(React axios+bootstrap)</p>
                    <a href="http://aegis4206.tplinkdns.com/react/first_react/API/build" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品3</h5>
                    <p className="card-text">自定義音樂撥放器(存JS)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/practice/MusicPlayer.html" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品4</h5>
                    <p className="card-text">自定義影片撥放器(Jquery)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/day11/test.html" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品5</h5>
                    <p className="card-text">爵士鼓模擬 新增觸碰功能 手機請橫向操作(JS+Jquery)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/day1/day1.html" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品6</h5>
                    <p className="card-text">備忘錄 localStorage應用(Jquery)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/day15/test.html" className="btn btn-primary">作品連結</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品7</h5>
                    <p className="card-text">書目查詢Google API(Jquery ajax)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/day6/test1.html" className="btn btn-primary">作品連結</a>
                </div>
            </div><div className="card">
                <div className="card-body">
                    <h5 className="card-title">學習作品8</h5>
                    <p className="card-text">打地鼠小遊戲(Jquery)</p>
                    <a href="http://aegis4206.tplinkdns.com/js/day30/test.html" className="btn btn-primary">作品連結</a>
                </div>
            </div>
        </div>
    </div>
);

const App = () => (
    <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Icon name='react' size='big'></Icon>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">首頁</Nav.Link>
                        <Nav.Link as={Link} to="/about">關於我</Nav.Link>
                        <Nav.Link as={Link} to="/projects">作品集</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="https://github.com/aegis4206">
                            <Icon name='github square' size='big'></Icon>
                        </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/aegis4206/">
                            <Icon name='facebook' size='big'></Icon>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/%E9%99%B3-%E4%BF%8A%E4%BD%91-19150b266/">
                            <Icon name='linkedin' size='big'></Icon>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container className="mt-3">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Container>
        <hr></hr>
        <Container>
            <p>©&nbsp;&nbsp;2023&nbsp;&nbsp;aegis4206(white)</p>            
        </Container>
    </div>
);

export default App;