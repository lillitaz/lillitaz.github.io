import "./impressum.css";
import Footer from "../../components/Footer/Footer";

function Impressum() {
    return (
        <>
        <section id="impressum">
        <h2>Impressum</h2>
        <div className="container impressum_container">

            <div className="impressum_content">
                <article className="impressum_details">
                    Offenlegung nach Mediengesetz
                </article>
                <article className="impressum_details">
                    Medieninhaberin:<br/>
                    Elisabeth Weitzer, BA<br/>
                    1090 Wien<br/>
                    Oesterreich <br/>
                </article>
                <article className="impressum_details">
                    Alle Recht vorbehalten.
                </article>
                <article className="impressum_details">
                    <a href="mailto:contact@lilliweitzer.com">e-mail: contact@lilliweitzer.com</a>
                </article>

                <article className="impressum_details">
                    <a href="/"> → Zurück zur Homepage</a>
                </article>
            </div>
        </div>
        </section>
        <Footer />
        </>
   )
}

export default Impressum;