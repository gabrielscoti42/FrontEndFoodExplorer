import { Link } from "react-router-dom"

import { Container } from './styles'
import { HeaderAdmin} from '../../components/HeaderAdmin'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { PiCaretLeftBold } from "react-icons/pi";

import juice from '../../assets/images/juice.png'


export function AdminDish() {
    return(
        <Container>
            <HeaderAdmin></HeaderAdmin>

            <div className="content">

                <div className="backAndImageWrapper">
                    <Link to ="/">
                        <button className="back">
                            <PiCaretLeftBold />
                            voltar
                        </button>
                    </Link>

                    <img src={juice} alt=""  height={260} width={260}/>
                </div>

                <div className="ingredientsAndDescriptionWrapper">
                    <h1>Salada de Salada</h1>
                    <p>Salada salada salada salada salada salada salada salada salada salada salada salada.</p>

                    <div className="ingredientsWrapper">
                        <Ingredient title={'alface'} />
                        <Ingredient title={'requeijão'} />
                        <Ingredient title={'cebola'} />
                        <Ingredient title={'cebolinha'} />
                        <Ingredient title={'banana'} />
                        <Ingredient title={'picles'} />
                    </div>
                    
                    <Link to="/editDish/1">
                        <Button title={'Editar Prato'} className='editButton'></Button>
                    </Link>
                </div>
            </div>

            <Footer></Footer>
        </Container>
    )
}