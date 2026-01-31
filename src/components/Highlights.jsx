import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Nunca ha habido un mejor momento para actualizar.</h2>
            <h3>Esto es lo que obtienes con la nueva MacBook Pro.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Realice tareas exigentes hasta 9,8 veces más rápido.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Una impresionante  <br />
                            pantalla Liquid  <br/>
                            Retina XDR.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Construido para<br />
                            <span>Inteligencia de Apple.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Up to
                            <span className="green-gradient">{' '}14 horas más{' '}</span>
                            duración de la batería.
                            <span className="text-dark-100">{' '}(Hasta 24 horas en total.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights