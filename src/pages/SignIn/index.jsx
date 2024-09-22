import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth.jsx"
import { useState } from "react"

import { Container } from './styles.js'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = useAuth()

  function handleSignIn() {
    signIn({ email, password });
  }

  return(
    <Container>
        <Logo></Logo>

        <div className="loginBox">
        
          <h2>Faça login</h2>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@email.com.br"
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button title="Entrar" />

          <Link to="/register" onClick={handleSignIn}>Criar conta</Link>
        </div>
    </Container>
  )
}