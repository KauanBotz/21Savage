import styles from './Principal.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Principal() {
    return(
        <>
            <main className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>

                        <h1 className={styles.h1}>
                        Da Juventude Problemática à Luminária do Rap
                        </h1>
                        <h2 className={styles.h2}>
                        21 Savage, cujo nome real é Shéyaa Bin Abraham-Joseph, nasceu em 22 de outubro de 1992, em Londres, mas cresceu em Atlanta, Geórgia. Sua carreira na música começou a ganhar tração em 2015, após a trágica morte de um amigo próximo. Motivado por esse evento, 21 Savage lançou sua primeira mixtape, "The Slaughter Tape", que recebeu atenção significativa na cena underground do rap.<br></br>

                        Em 2016, 21 Savage lançou o EP "Savage Mode" em colaboração com o produtor Metro Boomin. Esse projeto impulsionou sua carreira ao mainstream, principalmente com os sucessos "X", que contou com a participação de Future, e "No Heart". Ambas as faixas foram bem recebidas tanto comercialmente quanto pela crítica, solidificando a reputação de 21 Savage como uma força emergente no rap.<br></br>

                        O primeiro álbum de estúdio de 21 Savage, "Issa Album", foi lançado em 2017. O single principal, "Bank Account", tornou-se um grande sucesso, alcançando o top 20 na Billboard Hot 100 e se tornando uma de suas músicas mais reconhecíveis.<br></br>

                        Em 2018, ele lançou "I Am I Was", que incluiu o hit "a lot" com a participação de J. Cole. Esta faixa ganhou o Grammy de Melhor Canção de Rap em 2020, destacando-se como uma das músicas mais importantes de sua carreira.<br></br>

                        Com um estilo caracterizado por suas letras honestas e sombrias, abordando temas de violência e sobrevivência nas ruas, 21 Savage se estabeleceu como uma voz distinta no rap contemporâneo. Suas colaborações com artistas de alto perfil e a consistência de seus lançamentos consolidaram sua posição na indústria musical.
                        </h2>

                        <div className={styles.itensLeft}>
                        <div className={styles.iconsLeft}>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src="21 2.png" className={styles.img} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Principal