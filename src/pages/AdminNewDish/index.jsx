import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { PiCaretLeftBold, PiUploadSimpleBold } from 'react-icons/pi'
import { VscClose } from 'react-icons/vsc'
import { HiOutlinePlus } from 'react-icons/hi2'

export function AdminNewDish() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'title') setTitle(value)
    if (name === 'category') setCategory(value)
    if (name === 'description') setDescription(value)
    if (name === 'price') setPrice(value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleIngredientChange = (e) => {
    setNewIngredient(e.target.value)
  }

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([...ingredients, { name: newIngredient.trim() }])
      setNewIngredient('')
    }
  }

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(updatedIngredients)
  }

  const handleCreateDish = async (e) => {
    e.preventDefault()

    if (!title.trim()) {
      alert('Por favor, insira o nome do prato.');
      return
    }
    if (!category.trim() || !['food', 'dessert', 'drink'].includes(category)) {
      alert('Por favor, selecione uma categoria válida.')
      return
    }
    if (!description.trim()) {
      alert('Por favor, insira a descrição do prato.')
      return
    }
    if (!price.trim() || isNaN(price) || Number(price) <= 0) {
      alert('Por favor, insira um preço válido.')
      return
    }
    if (!image) {
      alert('Por favor, selecione uma imagem para o prato.')
      return
    }
    if (ingredients.length === 0) {
      alert('Por favor, adicione pelo menos um ingrediente.')
      return
    }

    try {
      const token = localStorage.getItem('@foodexplorer:token')
      if (!token) {
        alert('Token não encontrado')
      }

      const formData = new FormData()
      formData.append('title', title)
      formData.append('category', category)
      formData.append('description', description)
      formData.append('price', price);
      formData.append('image', image);
      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient.name)
      })

      const response = await api.post('/adminDishes', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response.data)
      alert('Prato criado com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao criar prato:', error)
      if (error.response) {
        console.error('Response:', error.response.data)
      }
      alert('Erro ao criar prato. Tente novamente.')
    }
  }

  return (
    <Container>
      <HeaderAdmin />

      <form>
        <Link to="/">
          <button className="backButton">
            <PiCaretLeftBold />
            voltar
          </button>
        </Link>

        <h1>Criar novo prato</h1>

        <section className="imageNameAndCategoryWrapper">
          <div className="uploadContainer">
            <h2>Imagem do Prato</h2>
            <input type="file" id="upload" onChange={handleImageChange} />
            <label htmlFor="upload">
              <div className="uploadBox">
                <PiUploadSimpleBold />
                <p>Selecione a imagem </p>
              </div>
            </label>
          </div>

          <div className="nameContainer">
            <label htmlFor="title">Nome do prato</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Ex: Salada Ceasar"
            />
          </div>

          <div className="categoryContainer">
            <label htmlFor="category">Categoria</label>
            <select 
              id="category" 
              name="category" 
              value={category} 
              onChange={handleCategoryChange}>

              <option value="">Selecione uma categoria</option>
              <option value="food">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </section>

        <section className="ingredientsAndPriceWrapper">

          <div className="ingredientsContainer">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredientsList">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredientItem">
                  <span>{ingredient.name}</span>
                  <button type="button" onClick={() => handleRemoveIngredient(index)}>
                    <VscClose />
                  </button>
                </div>
                ))}

                <div className="addIngredient">
                  <input
                    type="text"
                    id="newIngredient"
                    name="newIngredient"
                    value={newIngredient}
                    onChange={handleIngredientChange}
                    placeholder="Adicionar"
                  />
                  <button type="button" onClick={handleAddIngredient}>
                    <HiOutlinePlus />
                  </button>
                </div>
            </div>
          </div>

          <div className="priceContainer">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handleInputChange}
              placeholder="Ex: 19.90"
            />
          </div>
        </section>

        <section className="descriptionAndSaveButtonWrapper">

          <div className="descriptionContainer">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </div>

          <Button title={'Criar prato'} type="submit" id="saveButton" onClick={handleCreateDish}/>
        </section>
      </form>
      <Footer />
    </Container>
  );
}