import SalesCard from "./components/SalesCard"
import NotificationButton from "./components/notificationButton"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-conteiner"></div>
          <div>
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
