import Header from "./header";


export default function Home(){
    return(
        <div className="bg-[url('/src/assets/bg-web.jpg')] bg-cover bg-center h-svh">
            <Header/>
            <p >s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button>Start Your Journey</button>
        </div>
    );
}