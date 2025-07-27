import Header from "../../components/Header"

export default function Home(){
    return(
       <section id="Home">
       <Header/>
       <ul id="posts">
        <li className="post">
            <img src="https://i.pinimg.com/736x/90/c0/97/90c097159b9bf2eac99ed4f5a259ca52.jpg" alt="" />
           <div className="informations">
            <div className="name">Luiza</div>
            <div className="person-inf">
                <p>22. Salvador/Bahia</p>
            </div>
           </div>
        </li>
       </ul>
       </section>
    )
}